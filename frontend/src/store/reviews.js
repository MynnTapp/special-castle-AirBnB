import { csrfFetch } from "./csrf";

const CREATE_REVIEW = "reviews/add";
const DELETE_REVIEW = "reviews/remove";
const GET_ALL_REVIEWS = "reviews/getAllReviews";

const initialState = {};

// const add = (review) => {
//    return {
//       type: CREATE_REVIEW,
//       payload: review,
//    };
// };

// const remove = ({ id }) => {
//    return {
//       type: DELETE_REVIEW,
//       payload: id,
//    };
// };

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

export default function reviewsReducer(state = initialState, action) {
   switch (action.type) {
      case GET_ALL_REVIEWS: {
         const newState = {};
         action.payload.forEach((review) => (newState[review.id] = review));
         return newState;
      }
      case CREATE_REVIEW:
      case DELETE_REVIEW:
      default:
         return state;
   }
}
