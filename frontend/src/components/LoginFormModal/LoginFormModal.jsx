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
      console.log(data);
      data.errors ? setErrors(data.errors) : closeModal();
   };

   return (
      <>
         <h1>Log In</h1>
         <form onSubmit={handleSumbit}>
            <label>
               Username or Email
               <input
                  type="text"
                  value={credential}
                  onChange={({ target: { value } }) => setCredential(value)}
                  required
               />
            </label>
            <label>
               Password
               <input
                  type="password"
                  value={password}
                  onChange={({ target: { value } }) => setPassword(value)}
                  required
               />
            </label>
            {errors.credential && (
               <p className="error-message">{errors.credential}</p>
            )}
            <button disabled={password.length < 6 || credential.length < 4}>
               Log In
            </button>
         </form>
      </>
   );
}
