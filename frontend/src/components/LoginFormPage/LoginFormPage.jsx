import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../store/session";
import "./LoginFormPage.css";

export default function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSumbit = async (e) => {
    e.preventDefault();
    setErrors({});
    const payload = {
      credential,
      password,
    };
    const data = await dispatch(login(payload));

    if (data.errors) {
      setErrors(data.errors);
    } else {
      return data;
    }
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
        <button>Log In</button>
      </form>
    </>
  );
}
