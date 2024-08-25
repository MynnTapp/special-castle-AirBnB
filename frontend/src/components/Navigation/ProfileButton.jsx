import { useDispatch } from "react-redux";
import { signout } from "../../store/session";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import "./ProfileButton.css";

export default function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { username, firstName, lastName, email } = user;
  const ulRef = useRef();

  function logout(e) {
    e.preventDefault();
    dispatch(signout());
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

  const ulClassname = "profile-dropdown" + (showMenu ? "" : " hidden");
  return (
    <>
      <button onClick={toggleMenu}>
        <FaUserCircle />
      </button>
      <ul className={ulClassname} ref={ulRef}>
        <li>{username}</li>
        <li>
          {firstName} {lastName}
        </li>
        <li>{email}</li>
        <li>
          <button onClick={logout}>Log Out</button>
        </li>
      </ul>
    </>
  );
}
