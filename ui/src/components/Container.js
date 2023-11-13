import React, { useState, useEffect } from "react";

import Popup from "reactjs-popup";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Container(props) {
  const { url, view } = props;
  const [primaryData, setPrimaryData] = useState([]);

  useEffect(() => {
    const fetchingData = fetch(url)
      .then((res) => res.json())
      .then((data) => setPrimaryData(data.articles));
  }, [url]);
  // console.log(primaryData);
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

                  <Popup
                    trigger={
                      <button
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
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="popup">
                        <p>
                          Hello News Reader!! Please register to the NEWS Now to
                          enjoy more services
                        </p>
                        <div>
                          <button className="button">Log In</button>
                          <button className="button">Register</button>
                        </div>
                      </div>
                    )}
                  </Popup>
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

                    <Popup
                      trigger={
                        <button
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
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="popup">
                          <p>
                            Hello News Reader!! Please register to the NEWS Now
                            to enjoy more services
                          </p>
                          <div>
                            <button className="button">Log In</button>
                            <button className="button">Register</button>
                          </div>
                        </div>
                      )}
                    </Popup>
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

export default Container;
