import { csrfFetch } from "./csrf";

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => {
   return {
      type: SET_USER,
      payload: user,
   };
};

const removeUser = () => {
   return { type: REMOVE_USER };
};

export const login = (user) => async (dispatch) => {
   const { credential, password } = user;
   const res = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({ credential, password }),
   });

   if (!res.errors) {
      dispatch(setUser(res.user));
      return res;
   }
   return res;
};

export const restoreUser = () => async (dispatch) => {
   const data = await fetch("/api/session");

   const user = await data.json();
   dispatch(setUser(user.user));
};

export const signup = (user) => async (dispatch) => {
   const { username, firstName, lastName, email, password } = user;
   const data = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
         firstName,
         lastName,
         email,
         username,
         password,
      }),
   });

   if (!data.errors) {
      dispatch(setUser(data.user));
   }
   return data;
};

export const signout = () => async (dispatch) => {
   const res = await csrfFetch("/api/session", {
      method: "DELETE",
   });

   dispatch(removeUser());
   return res;
};

const initialState = { user: null };

export default function sessionReducer(state = initialState, action) {
   switch (action.type) {
      case SET_USER:
         return { ...state, user: action.payload };
      case REMOVE_USER:
         return { ...state, user: null };
      default:
         return state;
   }
}
