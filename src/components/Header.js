import React from "react";
import { FaAngleLeft } from "react-icons/fa6";

const Header = () => {
  return (
    <div className=" flex w-full  bg-teal-500 h-20">
      <div className=" ml-12 text-white flex justify-start items-center">
        <FaAngleLeft className=" text-xl" />
        <p className=" text-xl">View Audience</p>
      </div>
    </div>
  );
};

export default Header;
