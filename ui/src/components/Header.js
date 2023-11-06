import React, { useState } from "react";
import Container from "./Container";
import "./styles.css";
import { FaGripHorizontal, FaList, FaCaretDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Header(props) {
  const categories = [
    { id: "general", title: "General" },
    { id: "business", title: "Business" },
    { id: "entertainment", title: "Entertainment" },
    { id: "health", title: "Health" },
    { id: "science", title: "Science" },
    { id: "sports", title: "Sports" },
    { id: "technology", title: "Technology" },
  ];
  const API = "b01256167fc8496b976758167446950c";
  const [category, setCategory] = useState(false);
  const [view, setView] = useState(true);
  const [count, setCount] = useState(0);
  const [url, setUrl] = useState(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API}`
  );

  const onHandleCategory = (id) => {
    setCategory(true);

    if (category) {
      setUrl(
        `https://newsapi.org/v2/top-headlines?country=in&category=${id}&apiKey=${API}`
      );
    } else {
      setUrl(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API}`);
    }
  };
  const onHandleViewCount = () => {
    setCount(count + 1);
    if (count % 2 === 0) {
      setView(false);
    } else {
      setView(true);
    }
  };
  const navigate = useNavigate();

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
              style={{ color: "rgba(232, 18, 18, 0.963)" }}
              onClick={onHandleViewCount}
            />
          ) : (
            <FaList
              style={{ color: "rgba(232, 18, 18, 0.963)" }}
              onClick={onHandleViewCount}
            />
          )}
          <Link to="/login">
            <button className="button">Log In</button>
          </Link>
          <Link to="/register">
            <button className="button">Register</button>
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {categories.map((eachCategory) => (
          <div>
            <p
              key={eachCategory.id}
              className="categories"
              onClick={() => onHandleCategory(eachCategory.id)}
            >
              #{eachCategory.title}
            </p>
          </div>
        ))}
      </div>
      <Container url={url} view={view} />
    </div>
  );
}

export default Header;
