import { csrfFetch } from "./csrf";

const ADD_THE_IMAGES = "spots/addAllImages";

const add = (payload) => {
   return {
      type: ADD_THE_IMAGES,
      payload,
   };
};

const normalizer = (payload) => {
   const res = {};

   payload.forEach((ele) => {
      res[ele.id] = ele;
   });

   return res;
};

export const addTheImages = (payload, id) => async (dispatch) => {
   const res = [];
   for (let i = 0; i < payload.length; i++) {
      res.push(
         await csrfFetch(`/api/spots/${id}/images`, {
            method: "POST",
            body: JSON.stringify(payload[i]),
         })
      );
   }
   console.log("this is the actual Images array", res);
   dispatch(add(normalizer(res)));
};

const defaultState = {};

export default function spotImagesReducer(
   state = defaultState,
   { type, payload }
) {
   switch (type) {
      case ADD_THE_IMAGES: {
         const newState = { ...state, ...payload };
         return newState;
      }
      default:
         return state;
   }
}
