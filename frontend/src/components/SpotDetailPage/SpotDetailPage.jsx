import { useParams } from "react-router-dom";
import "./SpotDetailPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllSpots } from "../../store/spots";
import { getAllReviews } from "../../store/reviews";
import BookingBlock from "./BookingBlock";
import Reviews from "../Reviews";

export default function SpotDetailPage() {
   const dispatch = useDispatch();
   const { id } = useParams();
   const spot = useSelector((state) => state.spots[id]);
   const reviews = useSelector((state) => state.reviews);
   useEffect(() => {
      dispatch(getAllSpots());
      dispatch(getAllReviews(id));
   }, [dispatch, id]);

   if (!spot || !reviews) return <h1>Loading...</h1>;
   const reviewsArr = Object.values(reviews ? reviews : []);
   console.log(reviewsArr);
   return (
      <div className="the-page">
         <div className="main-spot-content">
            <h1>{spot.name}</h1>
            <h4>
               Location: {spot.city}, {spot.state}, {spot.country}
            </h4>
            <img
               src={`${spot.previewImage}`}
               alt="Image not found"
               className="preview"
            />
            <div className="details">
               <div>
                  <h3>
                     Hosted by {spot.Owner.firstName} {spot.Owner.lastName}
                  </h3>
                  <p>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Incidunt illo rem, fuga exercitationem ratione aliquid!
                     Minima, qui ex. Provident omnis aperiam numquam iste nulla
                     magni labore quidem, natus architecto, eius sit, obcaecati
                     aut tenetur at libero laboriosam officia debitis? Similique
                     voluptatum eius deserunt voluptates non. Aperiam hic facere
                     fugiat fugit?
                  </p>
                  <p>{spot.description}</p>
               </div>

               <BookingBlock
                  spot={spot}
                  reviews={reviewsArr.length ? reviewsArr : []}
               />
            </div>
            <div className="divider"></div>
            <Reviews
               spot={spot}
               reviews={reviewsArr.length ? reviewsArr : []}
            />
         </div>
      </div>
   );
}
