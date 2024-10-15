import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

export default function Navigation({ isLoaded }) {
   const sessionUser = useSelector((state) => state.session.user);

   return (
      <ul className="nav-box">
         <li>
            <NavLink to="/">
               <img
                  src="../../../public/Pixel-Paradises-Icon.png"
                  className="logo-image"
               />
            </NavLink>
         </li>
         {isLoaded && (
            <li>
               {sessionUser ? (
                  <NavLink to="/spots/new">Create a New Spot</NavLink>
               ) : null}
               <ProfileButton user={sessionUser} />
            </li>
         )}
      </ul>
   );
}
