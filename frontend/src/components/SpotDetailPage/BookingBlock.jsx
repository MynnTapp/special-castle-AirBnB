import "./BookingBlock.css";
import { FaStar } from "react-icons/fa";
export default function BookingBlock({ spot, reviews }) {
   console.log(reviews);
   return (
      <>
         <div className="booking-block">
            <div className="price_reviews">
               <div>$ {spot.price.toFixed(2)} night</div>
               {reviews.length ? (
                  <div>
                     <FaStar />
                     {spot.avgRating} •{" "}
                     {spot.numReviews === 1 ? (
                        <span>{spot.numReviews} review</span>
                     ) : (
                        <span>{spot.numReviews} reviews</span>
                     )}
                  </div>
               ) : (
                  <div>
                     <FaStar /> New
                  </div>
               )}
            </div>
            <button
               onClick={() => alert("Feature Coming Soon...")}
               className="button"
            >
               Reserve
            </button>
         </div>
      </>
   );
}
