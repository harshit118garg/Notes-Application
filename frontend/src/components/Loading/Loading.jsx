import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Loading.css";

const Loading = ({ size = 100 }) => {
  return (
    <div>
      <Spinner
        animation="border"
        style={{
          height: size,
          width: size,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      ;
    </div>
  );
};

export default Loading;
