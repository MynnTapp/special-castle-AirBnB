import { useState } from "react";
import { addASpot } from "../../store/spots";
import "./SpotForm.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function SpotForm({ isNewSpot }) {
   const dispatch = useDispatch();
   const navigateTo = useNavigate();
   const { id } = useParams();
   const [address, setAddress] = useState("");
   const [city, setCity] = useState("");
   const [state, setState] = useState("");
   const [country, setCountry] = useState("");
   const [lat, setLat] = useState(0);
   const [lng, setLng] = useState(0);
   const [description, setDescription] = useState("");
   const [name, setName] = useState("");
   const [price, setPrice] = useState(1);
   const [previewImg, setPreviewImg] = useState("");
   const [errors, setErrors] = useState({});
   const spot = useSelector((state) => state.spots[id ? id : 0]);

   const handleErrors = () => {
      const errors = {};
      if (!address) errors.address = "Address is required";
      if (!city) errors.city = "City is required";
      if (!state) errors.state = "State is required";
      if (!country) errors.country = "Country is required";
      if (description.length < 30)
         errors.description = "Please write at least 30 characters";
      if (!name) errors.name = "Name is required";
      if (!price) errors.price = "Price is required";
      if (!previewImg) {
         errors.previewImg = "Preview image is required";
      } else if (
         !previewImg.endsWith(".jpeg") &&
         !previewImg.endsWith(".png") &&
         !previewImg.endsWith(".jpg")
      ) {
         errors.previewImg = "Image URL must end in .png, .jpg, or .jpeg";
      }
      return errors;
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setErrors({});
      const errors = handleErrors();

      setErrors(errors);

      if (!Object.values(errors).length) {
         const payload = {
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            price,
            description,
         };
         const spot = await dispatch(addASpot(payload));

         if (!spot.errors) {
            navigateTo(`/spots/${spot.id}`);
         }
      }
   };

   return (
      <main className="form-box">
         <h1>{isNewSpot ? "Create a New Spot" : "Update your Spot"}</h1>
         <h3>Where&apos;s your place located?</h3>
         <p>
            Guests will only get your exact address once they booked a
            reservation.
         </p>
         <form onSubmit={handleSubmit}>
            <label>
               Street Address{" "}
               <span className="error-message">
                  {errors.address ? errors.address : ""}
               </span>
            </label>
            <br />
            <input
               type="text"
               placeholder="Address"
               value={spot ? spot.address : address}
               onChange={({ target: { value } }) => setAddress(value)}
            />
            <div className="city">
               <label>
                  City{" "}
                  <span className="error-message">
                     {errors.city ? errors.city : ""}
                  </span>
               </label>
               <br />
               <input
                  type="text"
                  placeholder="City"
                  value={spot ? spot.city : city}
                  onChange={({ target: { value } }) => setCity(value)}
               />
            </div>
            <div className="state">
               <label>
                  State{" "}
                  <span className="error-message">
                     {errors.state ? errors.state : ""}
                  </span>
               </label>
               <br />
               <input
                  type="text"
                  placeholder="STATE"
                  value={spot ? spot.state : state}
                  onChange={({ target: { value } }) => setState(value)}
               />
            </div>
            <label>
               Country{" "}
               <span className="error-message">
                  {errors.country ? errors.country : ""}
               </span>
            </label>
            <br />
            <input
               type="text"
               placeholder="Country"
               value={spot ? spot.country : country}
               onChange={({ target: { value } }) => setCountry(value)}
            />
            <br />
            <label>
               Latitude <span className="error-message"></span>
            </label>
            <br />
            <input
               type="number"
               min="-90"
               max="90"
               value={spot ? spot.lat : lat}
               onChange={({ target: { value } }) => setLat(value)}
            />
            <br />
            <label>
               Longitude <span className="error-message"></span>
            </label>
            <br />
            <input
               type="number"
               min="-180"
               max="180"
               value={spot ? spot.lng : lng}
               onChange={({ target: { value } }) => setLng(value)}
            />
            <br />
            <div style={{ border: "1px solid gray", marginTop: "1rem" }}></div>
            <h3>Describe your place to guests</h3>
            <p>
               Mention the best features of your space, and special amentities
               like fast wifi or parking, and what you love about the
               neighborhood.
            </p>
            <textarea
               className="description"
               type="text"
               minLength="30"
               placeholder="Description"
               value={spot ? spot.description : description}
               onChange={({ target: { value } }) => setDescription(value)}
            />
            {errors.description ? (
               <div className="error-message">{errors.description}</div>
            ) : null}
            <div style={{ border: "1px solid gray", marginTop: "1rem" }}></div>
            <h3>Create a title for your spot</h3>
            <p>
               Catch guests&apos; attention with a spot title that highlights
               what makes your place special.
            </p>
            <input
               type="text"
               placeholder="Name of your spot"
               value={spot ? spot.name : name}
               onChange={({ target: { value } }) => setName(value)}
            />
            {errors.name ? (
               <div className="error-message">{errors.name}</div>
            ) : null}
            <div style={{ border: "1px solid gray", marginTop: "1rem" }}></div>
            <h3>Set a base price for your spot</h3>
            <p>
               Competitive pricing can help your listing stand out and rank
               higher in search results.
            </p>
            <div>
               <span>$ </span>
               <input
                  type="number"
                  min="1"
                  value={spot ? spot.price : price}
                  placeholder="Price per night (USD)"
                  onChange={({ target: { value } }) => setPrice(Number(value))}
               />
            </div>
            {errors.price ? (
               <div className="error-message">{errors.price}</div>
            ) : null}
            <div style={{ border: "1px solid gray", marginTop: "1rem" }}></div>
            <h3>Liven up your spot with photos</h3>
            <p>Submit a link to at least one photo to publish your spot.</p>
            <input
               type="text"
               placeholder="Preview Image URL"
               value={spot ? spot.previewImage : previewImg}
               onChange={({ target: { value } }) => setPreviewImg(value)}
            />
            {errors.previewImg ? (
               <div className="error-message">{errors.previewImg}</div>
            ) : null}
            <div style={{ border: "1px solid gray", marginTop: "1rem" }}></div>
            <div className="button-box">
               <button type="submit" className="add-it">
                  {isNewSpot ? "Create Spot" : "Update Spot"}
               </button>
            </div>
         </form>
      </main>
   );
}
