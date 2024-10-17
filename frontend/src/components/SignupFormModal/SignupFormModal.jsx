import "./SignupForm.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { signup } from "../../store/session";
import { useModal } from "../../context/Modal";

export default function SignupFormModal() {
   const dispatch = useDispatch();
   const [username, setUsername] = useState("");
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [password, setPassword] = useState("");
   const [errors, setErrors] = useState({});
   const { closeModal } = useModal();

   const getErrors = (e) => {
      e.preventDefault();
      const errors = {};
      if (password !== confirmPassword)
         errors.password = "Provided passwords do not match.";
      if (!email.includes("@")) errors.email = "Provided email is invalid.";
      Object.values(errors).length === 0 ? handleSubmit() : setErrors(errors);
   };

   const handleSubmit = async () => {
      const payload = {
         firstName: firstName[0].toUpperCase() + firstName.slice(1),
         lastName: lastName[0].toUpperCase() + lastName.slice(1),
         email,
         username,
         password,
      };

      const data = await dispatch(signup(payload));

      if (!data.errors) {
         closeModal();
      }
      setErrors(data.errors);
   };

   return (
      <>
         <div className="headers">Sign up</div>
         <form onSubmit={getErrors} className="signup-form">
            {errors.email && <p className="errors message">{errors.email}</p>}
            {errors.username && (
               <p className="errors message">{errors.username}</p>
            )}
            {errors.password && (
               <p className="errors message">{errors.password}</p>
            )}

            <label>First Name</label>
            <input
               type="text"
               value={firstName}
               onChange={({ target: { value } }) => setFirstName(value)}
            />

            <label>Last Name</label>
            <input
               type="text"
               value={lastName}
               onChange={({ target: { value } }) => setLastName(value)}
            />

            <label>Email</label>
            <input
               type="text"
               value={email}
               onChange={({ target: { value } }) => setEmail(value)}
            />

            <label>Username</label>
            <input
               type="text"
               value={username}
               onChange={({ target: { value } }) => setUsername(value)}
            />

            <label>Password</label>
            <input
               type="password"
               value={password}
               onChange={({ target: { value } }) => setPassword(value)}
            />

            <label>Confirm Password</label>
            <input
               type="password"
               value={confirmPassword}
               onChange={({ target: { value } }) => setConfirmPassword(value)}
            />

            <button
               type="submit"
               className="signup-button"
               disabled={
                  !(
                     firstName &&
                     lastName &&
                     email &&
                     username.length > 3 &&
                     password.length > 5 &&
                     confirmPassword.length > 5
                  )
               }
            >
               Sign Up
            </button>
         </form>
      </>
   );
}
