import { useDispatch } from "react-redux";
import { signout } from "../../store/session";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import OpenModalMenuItem from "./OpenModalMenuItem";
import "./ProfileButton.css";

export default function ProfileButton({ user }) {
   const dispatch = useDispatch();
   const [showMenu, setShowMenu] = useState(false);
   const ulRef = useRef();

   function logout(e) {
      e.preventDefault();
      dispatch(signout());
      closeMenu();
   }

   function toggleMenu(e) {
      e.stopPropagation();
      setShowMenu(!showMenu);
   }

   useEffect(() => {
      if (!showMenu) return;

      function closeMenu(e) {
         if (ulRef.current && !ulRef.current.contains(e.target)) {
            setShowMenu(false);
         }
      }

      document.addEventListener("click", closeMenu);

      return () => document.removeEventListener("click", closeMenu);
   }, [showMenu]);

   const closeMenu = () => setShowMenu(false);

   const ulClassname = "profile-dropdown" + (showMenu ? "" : " hidden");
   return (
      <>
         <button onClick={toggleMenu}>
            <FaUserCircle />
         </button>
         <ul className={ulClassname} ref={ulRef}>
            {user ? (
               <>
                  <li>{user.username}</li>
                  <li>
                     {user.firstName} {user.lastName}
                  </li>
                  <li>{user.email}</li>
                  <li>
                     <button onClick={logout}>Log Out</button>
                  </li>
               </>
            ) : (
               <>
                  <OpenModalMenuItem
                     itemText="Log In"
                     onItemClick={closeMenu}
                     modalComponent={<LoginFormModal />}
                  />
                  <OpenModalMenuItem
                     itemText="Sign Up"
                     onItemClick={closeMenu}
                     modalComponent={<SignupFormModal />}
                  />
               </>
            )}
         </ul>
      </>
   );
}
