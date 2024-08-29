import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpots } from "../../store/spots";
import { FaStar } from "react-icons/fa";
import "./AllTheSpots.css";
import { useNavigate } from "react-router-dom";
import OpenModal from "../OpenModal";
import DeleteSpotModal from "../DeleteSpotModal";

export default function AllTheSpots({ isCurrent }) {
   const dispatch = useDispatch();
   const navigateTo = useNavigate();
   const sessionUser = useSelector((state) => state.session.user);
   const spotsData = useSelector((state) => state.spots);
   const spots = Object.values(spotsData);

   useEffect(() => {
      dispatch(getAllSpots());
   }, [dispatch, isCurrent]);

   return (
      <div className="content_box">
         {isCurrent
            ? spots
                 ?.filter((spot) => spot.Owner.id === sessionUser?.id)
                 .map((spot, i) => (
                    <div key={i + 1} className="spot-tile">
                       <img
                          src={spot.previewImage}
                          onClick={() => navigateTo(`/spots/${spot.id}`)}
                          className="spot-image"
                          alt="Image Not Found"
                       ></img>
                       <div className="spot-details">
                          <p>
                             {spot.city}, {spot.state}
                             <span className="rating">
                                <FaStar />
                                {spot.avgRating ? spot.avgRating : "NEW!"}
                             </span>
                             <br />${spot.price.toFixed(2)} night
                          </p>
                       </div>
                       <div className="button-box">
                          <button
                             onClick={() => {
                                navigateTo(`/spots/${spot.id}/edit`);
                             }}
                          >
                             Update
                          </button>
                          <OpenModal
                             buttonText="Delete"
                             modalComponent={<DeleteSpotModal id={spot.id} />}
                          />
                       </div>
                    </div>
                 ))
            : spots?.map((spot, i) => (
                 <div key={i + 1} className="spot-tile">
                    <img
                       src={spot.previewImage}
                       className="spot-image"
                       onClick={() => navigateTo(`/spots/${spot.id}`)}
                       alt="Image Not Found"
                    ></img>
                    <div className="spot-details">
                       <p className="locale-rating">
                          {spot.city}, {spot.state}
                          <span className="rating">
                             <FaStar />
                             {spot.avgRating ? spot.avgRating : "NEW!"}
                          </span>
                       </p>
                       ${spot.price.toFixed(2)} night
                    </div>
                 </div>
              ))}
      </div>
   );
}
