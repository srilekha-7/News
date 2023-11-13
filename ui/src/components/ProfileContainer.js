import React, { useEffect, useState } from "react";
import axios from "axios";
function ProfileContainer(props) {
  const { values, view } = props;
  const [savedArticles, setSavedArticles] = useState([]);
  const [requiredArticles, setRequiredArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4040/api/article/get/")
      .then((response) => {
        let filteredData = "";
        const responseData = response.data;
        filteredData = responseData.filter(
          (eachArticle) => eachArticle.umail === values.email
        );
        setSavedArticles(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    // console.log(savedArticles.map((eachArticle) => eachArticle.umail));

    // console.log(filteredData);
  }, []);

  console.log(savedArticles);

  return (
    <div>
      {view ? (
        <div className="article-container">
          {savedArticles.map((eachData) => (
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
                  <a href={eachData.link}>
                    <button className="button">Full Article</button>
                  </a>
                </div>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="article-container">
          {savedArticles.map((eachData) => (
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
                    <a href={eachData.link}>
                      <button className="button">Full Article</button>
                    </a>
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

export default ProfileContainer;
