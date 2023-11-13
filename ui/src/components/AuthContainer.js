import axios from "axios";
import React, { useState, useEffect } from "react";

import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
function AuthContainer(props) {
  const { url, view, values } = props;
  const [primaryData, setPrimaryData] = useState([]);

  useEffect(() => {
    const fetchingData = fetch(url)
      .then((res) => res.json())
      .then((data) => setPrimaryData(data.articles));
  }, [url]);
  // console.log(primaryData);

  const onHandleFavArticles = (eachData, values) => {
    console.log(values);
    eachData.umail = values.email;
    console.log(eachData);
    axios
      .post("http://localhost:4040/api/article/post", eachData)
      .then((res) => {
        console.log(res);
        if (res.data === "Already added to saved articles") {
          alert("Already added to saved articles");
        } else {
          alert("Successfully added to saved articles");
        }
      })
      .catch((err) => console.log("err"));
  };
  return (
    <div>
      {view ? (
        <div className="article-container">
          {primaryData.map((eachData) => (
            <div key={eachData.title} className="article-card">
              <img src={eachData.urlToImage} className="image" alt="" />
              <h2
                style={{
                  color: "rgba(41, 2, 2, 0.963)",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                {eachData.title}
              </h2>
              <p
                style={{
                  flex: "display",
                  justifyContent: "flex-start",
                  color: "#aaa6a6",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  {eachData.publishedAt}
                  <Link to="/details" state={{ eachData: eachData }}>
                    {" "}
                    <button className="button">Read More</button>
                  </Link>
                  <button
                    onClick={() => onHandleFavArticles(eachData, values)}
                    style={{
                      backgroundColor: "#ffff",
                      border: "none",
                      outline: "none",
                    }}
                  >
                    {" "}
                    <FaHeart
                      style={{
                        color: "rgba(232, 18, 18, 0.963)",
                        height: "30px",
                        width: "20px",
                      }}
                    />
                  </button>
                </div>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="article-container">
          {primaryData.map((eachData) => (
            <div key={eachData.title} className="article-card2">
              <img src={eachData.urlToImage} className="image2" alt="" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "20px",
                }}
              >
                <h2
                  style={{
                    color: "rgba(41, 2, 2, 0.963)",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  {eachData.title}
                </h2>
                <p
                  style={{
                    flex: "display",
                    justifyContent: "flex-start",
                    color: "#aaa6a6",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    {eachData.publishedAt}
                    <Link to="/details" state={{ eachData: eachData }}>
                      {" "}
                      <button className="button">Read More</button>
                    </Link>

                    <button
                      onClick={() => onHandleFavArticles(eachData, values)}
                      style={{
                        backgroundColor: "#ffff",
                        border: "none",
                        outline: "none",
                      }}
                    >
                      {" "}
                      <FaHeart
                        style={{
                          color: "rgba(232, 18, 18, 0.963)",
                          height: "30px",
                          width: "20px",
                        }}
                      />
                    </button>
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AuthContainer;
