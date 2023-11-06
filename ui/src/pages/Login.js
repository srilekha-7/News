import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Styles.css";
import axios from "axios";

function Login(props) {
  //Checking input patterns
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  const [values, setValues] = useState({ email: "", password: "" });
  const [err, setErr] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let error = {};
    if (!email_pattern.test(values.email)) {
      error.email = "*invalid email address";
      setErr(error);
    } else {
      error.email = "";
      setErr(error);
    }

    if (!password_pattern.test(values.password)) {
      error.password = "*Invalid password";
      setErr(error);
      console.log(error);
    } else {
      error.password = "";
      setErr(error);
    }
    if (error.email === "" && error.password === "") {
      axios
        .post("http://localhost:4040/api/auth/login", values)
        .then((res) => {
          if (res.data === "success") {
            navigate("/home", { state: { values } });
          } else {
            alert("No record exist!! Please Register");
          }
        })
        .catch((err) => console.log("err"));
    }
  };

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit}>
        <div className="auth-form">
          <h2
            style={{ color: " rgba(232, 18, 18, 0.963)", fontFamily: "serif" }}
          >
            Log In
          </h2>

          <label
            htmlFor="email"
            name="email"
            type="email"
            style={{ color: " rgba(232, 18, 18, 0.963)", fontWeight: "bold" }}
          >
            E-mail
          </label>
          <input
            required
            type="email"
            value={values.email}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
            className="button"
            placeholder="email"
          />
          {err && (
            <p style={{ color: "red", fontSize: "13px", fontFamily: "serif" }}>
              {err.email}
            </p>
          )}
          <label
            htmlFor="password"
            name="password"
            type="password"
            style={{ color: " rgba(232, 18, 18, 0.963)", fontWeight: "bold" }}
          >
            Password
          </label>
          <input
            required
            placeholder="password"
            type="password"
            className="button"
            value={values.password}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          {err.password && (
            <p style={{ color: "red", fontSize: "13px", fontFamily: "serif" }}>
              {err.password}
            </p>
          )}
          <button className="button" type="submit">
            Login
          </button>

          <p
            style={{
              color: " rgba(232, 18, 18, 0.963)",
              fontWeight: "bold",
              padding: "30px",
            }}
          >
            New User?
            <Link to="/register">
              <button className="button">Register</button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
