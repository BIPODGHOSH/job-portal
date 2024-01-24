import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" h-20 flex items-center w-full text-white">
      <Link to="/">
        <div className=" text-3xl font-bold pl-20">SpeedJob</div>
      </Link>
    </div>
  );
};

export default Navbar;
