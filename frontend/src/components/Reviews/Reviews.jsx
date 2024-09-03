import "./Reviews.css";
import { FaStar } from "react-icons/fa";
import DeleteReviewModal from "../ReviewModal";
import { CreateReviewModal } from "../ReviewModal/ReviewModal";
import OpenModal from "../OpenModal";
import { useState } from "react";

const MONTHS_OF_YEAR = [
   "Jan",
   "Feb",
   "Mar",
   "Apr",
   "May",
   "Jun",
   "Jul",
   "Aug",
   "Sep",
   "Oct",
   "Nov",
   "Dec",
];

export default function Reviews({ spot, reviews, user }) {
   const [modalFlag, setModalFlag] = useState(false);
   const toggle = () => {
      setModalFlag(!modalFlag);
   };

   return (
      <>
         {reviews.length > 0 ? (
            <>
               <div>
                  <FaStar /> {spot.avgRating} •{" "}
                  {spot.numReviews > 1 ? (
                     <span>{spot.numReviews} reviews</span>
                  ) : (
                     <span>{spot.numReviews} review</span>
                  )}
               </div>
               {reviews.map((review) => {
                  return (
                     <div key={`${review.id}`} className="review-box">
                        {review.User.firstName}
                        <div>
                           {
                              MONTHS_OF_YEAR[
                                 new Date(review.createdAt).getMonth()
                              ]
                           }
                           , {new Date(review.createdAt).getFullYear()}
                        </div>
                        <p>{review.review}</p>
                        {review.User.id === user.id ? (
                           <OpenModal
                              buttonText="Delete"
                              modalComponent={
                                 <DeleteReviewModal
                                    id={review.id}
                                    flag={toggle}
                                 />
                              }
                           />
                        ) : null}
                     </div>
                  );
               })}
            </>
         ) : (
            <>
               <div>
                  <FaStar />
                  <span>New</span>
               </div>
               {user.id !== spot.Owner.id ? (
                  <>
                     <OpenModal
                        buttonText="Post Your Review"
                        modalComponent={<CreateReviewModal id={spot.id} />}
                     />
                     <h5>Be the first to post a review!</h5>
                  </>
               ) : null}
            </>
         )}
      </>
   );
}
