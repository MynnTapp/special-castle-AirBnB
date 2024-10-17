import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/session";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

export default function LoginFormModal() {
   const dispatch = useDispatch();
   const [credential, setCredential] = useState("");
   const [password, setPassword] = useState("");
   const [errors, setErrors] = useState({});
   const { closeModal } = useModal();

   const handleSumbit = async (e) => {
      e.preventDefault();
      setErrors({});
      const payload = {
         credential,
         password,
      };
      const data = await dispatch(login(payload));
      data.message === "Invalid credentials"
         ? setErrors({ invalid: "The provided credentials were invalid." })
         : closeModal();
   };

   const signIn = async (e) => {
      e.preventDefault();
      const payload = {
         credential: "Demo-lition",
         password: "password",
      };
      await dispatch(login(payload));
      closeModal();
   };

   return (
      <>
         <div className="headers">Log In</div>
         <form onSubmit={handleSumbit} className="login-form">
            <p className="error-message">
               {errors.invalid ? errors.invalid : ""}
            </p>

            <label>Username or Email</label>
            <input
               type="text"
               value={credential}
               onChange={({ target: { value } }) => setCredential(value)}
               required
            />

            <label>Password</label>
            <input
               type="password"
               value={password}
               onChange={({ target: { value } }) => setPassword(value)}
               required
            />

            <button
               disabled={password.length < 6 || credential.length < 4}
               className="login-button"
            >
               Log In
            </button>
         </form>
         <a href="" onClick={signIn} className="demo-user">
            Log in as Demo User
         </a>
      </>
   );
}
