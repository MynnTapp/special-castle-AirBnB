import "./SignupFormPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { signup } from "../../store/session";

export default function SignupFormPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (user) return <Navigate to="/" replace={true} />;

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

    if (data.errors) {
      setErrors(data.errors);
    }
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
            onChange={({ target: { value } }) => setConfirmPassword(value)}
            required
          />
        </label>
        {confirmPassword !== password && (
          <p>Confirm Password field must be the same as the Password field</p>
        )}
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
