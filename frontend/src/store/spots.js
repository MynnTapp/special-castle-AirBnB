import { csrfFetch } from "./csrf";

const CREATE_SPOT = "spots/CREATE";
const DELETE_SPOT = "spots/DELETE";
const GET_ALL_SPOTS = "spots/getAllSpots";

const add = (spot) => {
   return {
      type: CREATE_SPOT,
      payload: spot,
   };
};

const remove = () => {
   return {
      type: DELETE_SPOT,
   };
};

const allSpots = (spots) => {
   return {
      type: GET_ALL_SPOTS,
      payload: spots,
   };
};

export const getAllSpots = () => async (dispatch) => {
   const res = await csrfFetch("/api/spots");

   if (!res.errors) {
      dispatch(allSpots(res.Spots));
      return res;
   }
};

export const addASpot = (spot) => async (dispatch) => {
   const res = await csrfFetch("/api/spots", {
      method: "POST",
      body: JSON.stringify(spot),
      headers: {
         "Content-Type": "application/json",
      },
   });
   if (!res.errors) {
      dispatch(add(res));
      return res;
   }
   return res;
};

export const removeSpot = (id) => async (dispatch) => {
   const res = await csrfFetch(`/api/spots/${id}`, {
      method: "DELETE",
   });

   if (!res.errors) {
      dispatch(remove());
   }
};

const initialState = {};

export default function spotsReducer(state = initialState, action) {
   switch (action.type) {
      case GET_ALL_SPOTS: {
         const newState = {};
         action.payload.forEach((spot) => (newState[spot.id] = spot));
         return newState;
      }
      case CREATE_SPOT:
         return { ...state, [action.payload.id]: action.payload };
      case DELETE_SPOT: {
         const newState = { ...state };
         delete newState[action.payload];
         return newState;
      }
      default:
         return state;
   }
}
