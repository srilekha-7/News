import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

function Register(props) {
  //Checking input patterns
  const username_pattern = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  const [values, setValues] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
  });

  const [err, setErr] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let error = {};

    if (!username_pattern.test(values.username)) {
      error.username = "*invalid username";
      setErr(error);
    } else {
      error.username = "";
      setErr(error);
    }

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

    if (values.password2 !== values.password) {
      error.password2 = "*Invalid password";
      setErr(error);
      console.log(error);
    } else {
      error.password2 = "";
      setErr(error);
    }

    if (error.username === "" && error.email === "" && error.password === "") {
      axios
        .post("http://localhost:4040/api/auth/register", values)
        .then((res) => {
          if (res.data === "user already exists!!!") {
            alert("User already exists!!!");
          } else {
            navigate("/login");
          }
        })
        .catch((err) => console.log("err"));
    }
  };

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit}>
        <div className="auth-form">
          <h1
            style={{ color: " rgba(232, 18, 18, 0.963)", fontFamily: "serif" }}
          >
            {" "}
            Sign Up
          </h1>

          <label
            htmlFor="name"
            name="username"
            style={{ color: " rgba(232, 18, 18, 0.963)", fontWeight: "bold" }}
          >
            Username
          </label>
          <input
            required
            type="text"
            className="button"
            placeholder="username"
            value={values.username}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, username: e.target.value }))
            }
          />
          {err.username && (
            <p style={{ color: "red", fontSize: "13px", fontFamily: "serif" }}>
              {err.username}
            </p>
          )}
          <label
            htmlFor="email"
            name="email"
            style={{ color: " rgba(232, 18, 18, 0.963)", fontWeight: "bold" }}
          >
            Email
          </label>
          <input
            required
            type="email"
            className="button"
            placeholder="Email"
            value={values.email}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          {err.email && (
            <p style={{ color: "red", fontSize: "13px", fontFamily: "serif" }}>
              {err.email}
            </p>
          )}
          <label
            htmlFor="password"
            name="password"
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
          <label
            htmlFor="re-type password"
            name="password2"
            style={{ color: " rgba(232, 18, 18, 0.963)", fontWeight: "bold" }}
          >
            Re-type Password
          </label>
          <input
            required
            placeholder="password"
            type="password"
            className="button"
            value={values.password2}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, password2: e.target.value }))
            }
          />
          {err.password2 && (
            <p style={{ color: "red", fontSize: "13px", fontFamily: "serif" }}>
              {err.password2}
            </p>
          )}

          <button className="button" type="submit">
            Register
          </button>

          {/* {errMsg && <p style={{ color: "red" }}>{errMsg}</p>} */}
          <p
            style={{
              color: " rgba(232, 18, 18, 0.963)",
              fontWeight: "bold",
              padding: "30px",
            }}
          >
            Already have an account?
            <Link to="/login">
              <button className="button"> Sign In</button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
