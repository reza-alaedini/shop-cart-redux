import React from "react";
import loading from "../../gif/Loader.gif";

const Loader = () => {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={loading} alt="loader" />
    </div>
  );
};

export default Loader;
