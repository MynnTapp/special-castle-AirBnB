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

   async function handleSubmit(e) {
      e.preventDefault();
      setErrors({});
      const payload = {
         firstName,
         lastName,
         email,
         username,
         password,
      };

      const data = await dispatch(signup(payload));

      data.errors ? setErrors(data.errors) : closeModal();
   }

   return (
      <>
         <h1>Sign up</h1>
         <form onSubmit={handleSubmit} className="signup">
            <label>
               First Name:
               <input
                  type="text"
                  value={firstName}
                  onChange={({ target: { value } }) => setFirstName(value)}
                  required
               />
            </label>
            {errors.firstName && <p>{errors.firstName}</p>}
            <label>
               Last Name:
               <input
                  type="text"
                  value={lastName}
                  onChange={({ target: { value } }) => setLastName(value)}
                  required
               />
            </label>
            {errors.lastName && <p>{errors.lastName}</p>}
            <label>
               Email:
               <input
                  type="text"
                  value={email}
                  onChange={({ target: { value } }) => setEmail(value)}
                  required
               />
            </label>
            {errors.email && <p>{errors.email}</p>}
            <label>
               Username:
               <input
                  type="text"
                  value={username}
                  onChange={({ target: { value } }) => setUsername(value)}
                  required
               />
            </label>
            {errors.username && <p>{errors.username}</p>}
            <label>
               Password:
               <input
                  type="password"
                  value={password}
                  onChange={({ target: { value } }) => setPassword(value)}
                  required
               />
            </label>
            {errors.password && <p>{errors.password}</p>}
            <label>
               Confirm Password:
               <input
                  type="password"
                  value={confirmPassword}
                  onChange={({ target: { value } }) =>
                     setConfirmPassword(value)
                  }
                  required
               />
            </label>
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            <button type="submit">Sign Up</button>
         </form>
      </>
   );
}
