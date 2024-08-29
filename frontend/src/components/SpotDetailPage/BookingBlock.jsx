import "./BookingBlock.css";
import { FaStar } from "react-icons/fa";
export default function BookingBlock({ spot }) {
   if (!spot) return <h1>Loading...</h1>;
   return (
      <>
         <div className="booking-block">
            <div className="price_reviews">
               <div>$ {spot.price.toFixed(2)} night</div>
               {spot.numReviews ? (
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
