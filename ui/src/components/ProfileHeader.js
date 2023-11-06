import React, { useEffect, useState } from "react";
import ProfileContainer from "./ProfileContainer";
import "./styles.css";
import {
  FaUserCircle,
  FaCaretDown,
  FaGripHorizontal,
  FaList,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContainer from "./AuthContainer";

function ProfileHeader(props) {
  const { values } = props;

  const API = "b01256167fc8496b976758167446950c";

  const [view, setView] = useState(true);
  const [count, setCount] = useState(0);

  const onHandleViewCount = () => {
    setCount(count + 1);
    if (count % 2 === 0) {
      setView(false);
    } else {
      setView(true);
    }
  };
  const navigate = useNavigate();

  const onDelete = () => {
    axios
      .delete("http://localhost:4040/api/auth/delete")
      .then((res) => navigate("/"))
      .catch((err) => console.log("err"));
  };

  return (
    <div className="header">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 className="title">
          NEWS{" "}
          <span
            style={{
              color: "#480303",
              fontFamily: "serif",
              fontStyle: "italic",
            }}
          >
            Now
          </span>
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "20px",
          }}
        >
          <FaCaretDown
            style={{
              color: "rgba(232, 18, 18, 0.963)",
              width: "30px",
              height: "30px",
            }}
          />
          {view ? (
            <FaGripHorizontal
              style={{ color: "rgba(232, 18, 18, 0.963)", padding: "10" }}
              onClick={onHandleViewCount}
            />
          ) : (
            <FaList
              style={{ color: "rgba(232, 18, 18, 0.963)", padding: "10" }}
              onClick={onHandleViewCount}
            />
          )}
          <FaUserCircle
            style={{
              color: "rgba(232, 18, 18, 0.963) ",
            }}
          />

          <p
            style={{
              color: "rgba(232, 18, 18, 0.963) ",

              fontWeight: "500",
            }}
          >
            My Profile
          </p>

          <button className="button" onClick={onDelete}>
            Logout
          </button>
        </div>
      </div>
      <ProfileContainer values={values} view={view} />
    </div>
  );
}

export default ProfileHeader;
