import { csrfFetch } from "./csrf";

const CREATE_REVIEW = "reviews/add";
const DELETE_REVIEW = "reviews/remove";
const GET_ALL_REVIEWS = "reviews/getAllReviews";

const initialState = {};

const add = (review) => {
   return {
      type: CREATE_REVIEW,
      payload: review,
   };
};

const remove = (id) => {
   return {
      type: DELETE_REVIEW,
      payload: id,
   };
};

const getAll = (reviews) => {
   return {
      type: GET_ALL_REVIEWS,
      payload: reviews,
   };
};

export const getAllReviews = (id) => async (dispatch) => {
   const res = await csrfFetch(`/api/spots/${id}/reviews`);
   if (!res.errors) {
      dispatch(getAll(res.Reviews));
      return res;
   }
};

export const createReview = (review, id) => async (dispatch) => {
   const options = {
      method: "POST",
      body: JSON.stringify(review),
   };
   const res = await csrfFetch(`/api/spots/${id}/reviews`, options);
   if (!res.message) {
      dispatch(add(res));
   }
};

export const deleteReview = (id) => async (dispatch) => {
   await csrfFetch(`/api/reviews/${id}`, {
      method: "DELETE",
   });

   dispatch(remove(id));
};

export default function reviewsReducer(state = initialState, action) {
   switch (action.type) {
      case GET_ALL_REVIEWS: {
         const newState = {};
         action.payload.forEach((review) => (newState[review.id] = review));
         return newState;
      }
      case CREATE_REVIEW:
         return {
            ...state,
            [action.payload.id]: action.payload,
         };
      case DELETE_REVIEW: {
         const newState = { ...state };
         delete newState[action.payload];
         return newState;
      }
      default:
         return state;
   }
}
