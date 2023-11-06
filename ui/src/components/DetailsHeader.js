import React from "react";

function DetailsHeader(props) {
  return (
    <div>
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
        </div>
      </div>
    </div>
  );
}

export default DetailsHeader;
