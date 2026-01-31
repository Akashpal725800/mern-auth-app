import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:3001/api/users/login",
        { email, password }
      );

      console.log(result.data);

      // ✅ backend se { message, token } aa raha hai
      if (result.data.token) {
        alert("Successful login");

        // token save
        localStorage.setItem("token", result.data.token);

        navigate("/home");
      } else {
        alert(result.data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-4 rounded w-25">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label><strong>Email</strong></label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* ✅ Button text fixed */}
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>

        {/* ✅ Correct link */}
        <p className="mt-3">Don't have an account?</p>
        <Link
          to="/register"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
