import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <center>
      <CirclesWithBar
        height="100"
        width="100"
        color="#d71e90"
        outerCircleColor="#d61f7b"
        innerCircleColor="#d19f2a"
        barColor="#18d215"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </center>
  );
};

export default Loader;
