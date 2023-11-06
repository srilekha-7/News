import React from "react";
import DetailsHeader from "../components/DetailsHeader";
import { useLocation } from "react-router-dom";
function DetailsPage(props) {
  const location = useLocation();
  const detailEl = location.state?.eachData;
  console.log(detailEl);
  return (
    <div>
      <DetailsHeader />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "flex-start",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
          }}
        >
          <div style={{ display: "flex" }}>
            <h2 style={{ color: "rgba(232, 18, 18, 0.963)" }}>
              {detailEl.source.name}|
            </h2>
            <p
              style={{
                color: "rgba(111, 109, 109, 0.963)",
                fontWeight: "bold",
                paddingTop: "2%",
              }}
            >
              {detailEl.author}
            </p>
          </div>
          <div>
            <a href={detailEl.url}>
              <button className="button">Full Article</button>
            </a>
          </div>
        </div>
        <h1 style={{ color: "rgba(232, 18, 18, 0.963)" }}>{detailEl.title}</h1>
        <img
          src={detailEl.urlToImage}
          alt=""
          style={{
            width: "100vh",
          }}
        />
        <p
          style={{
            fontWeight: "bold",
          }}
        >
          {detailEl.description}
        </p>
        <p>
          {detailEl.content} -{" "}
          <span
            style={{ color: "rgba(111, 109, 109, 0.963)", fontWeight: "bold" }}
          >
            {detailEl.publishedAt}
          </span>
        </p>
      </div>
    </div>
  );
}

export default DetailsPage;
