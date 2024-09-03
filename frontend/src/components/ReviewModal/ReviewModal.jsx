import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./ReviewModal.css";
import { deleteReview } from "../../store/reviews";
import { createReview } from "../../store/reviews";
import { useState } from "react";
import { IoMdStarOutline } from "react-icons/io";

export default function DeleteReviewModal({ id, flag }) {
   const { closeModal } = useModal();
   const dispatch = useDispatch();

   const handleDeletion = async (e) => {
      e.preventDefault();
      dispatch(deleteReview(id));
      flag();
      closeModal();
   };
   return (
      <>
         <h2>Confirm Delete</h2>
         <h5>Are you sure you want to delete this review?</h5>
         <button onClick={handleDeletion}>Yes (Delete Review)</button>
         <button onClick={() => closeModal()}>No (Keep Review)</button>
      </>
   );
}
export function CreateReviewModal({ id }) {
   const { closeModal } = useModal();
   const dispatch = useDispatch();
   const [review, setReview] = useState("");
   const [stars, setStars] = useState(0);
   const [activeRating, setActiveRating] = useState(stars);

   const handleSubmission = async (e) => {
      e.preventDefault();
      const payload = {
         review,
         stars,
      };
      dispatch(createReview(payload, id));
      closeModal();
   };

   const onChange = (num) => setStars(num);

   return (
      <>
         <h2>How was your stay?</h2>
         <textarea
            placeholder="Leave your review here..."
            onChange={({ target: { value } }) => setReview(value)}
         ></textarea>
         <br />

         <div
            onMouseLeave={() => setActiveRating(stars)}
            className="rating-input"
         >
            <span
               className={activeRating < 1 ? "empty" : "filled"}
               onClick={() => onChange(1)}
               onMouseEnter={() => setActiveRating(1)}
            >
               <IoMdStarOutline />
            </span>
            <span
               className={activeRating < 2 ? "empty" : "filled"}
               onClick={() => onChange(2)}
               onMouseEnter={() => setActiveRating(2)}
            >
               <IoMdStarOutline />
            </span>
            <span
               onClick={() => onChange(3)}
               className={activeRating < 3 ? "empty" : "filled"}
               onMouseEnter={() => setActiveRating(3)}
            >
               <IoMdStarOutline />
            </span>
            <span
               onClick={() => onChange(4)}
               className={activeRating < 4 ? "empty" : "filled"}
               onMouseEnter={() => setActiveRating(4)}
            >
               <IoMdStarOutline />
            </span>
            <span
               onClick={() => onChange(5)}
               className={activeRating < 5 ? "empty" : "filled"}
               onMouseEnter={() => setActiveRating(5)}
            >
               <IoMdStarOutline />
            </span>
            <span>Stars</span>
         </div>
         <button
            onClick={handleSubmission}
            disabled={review.length < 10 || stars === 0}
         >
            Submit Review
         </button>
      </>
   );
}
