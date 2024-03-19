import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";

const Body = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" flex h-screen  ">
      <div className="py-10 px-20 bg-slate-200 h-full w-1/2">
        <button
          onClick={() => setOpen(!open)}
          className=" px-3 py-2 font-bold border-2 rounded-md  border-white bg-transparent text-white"
        >
          Save segment
        </button>
      </div>
      {open && (
        <div
          className={`-mt-[77px] w-1/2 ${open ? "bg-white" : "bg-slate-200"} `}
        >
          <div className=" mx-3 mt-[-2px] ">
            <h2 className="bg-teal-500 -mx-3 text-white text-xl h-20 flex items-center">
              <FaAngleLeft /> Saving Segment
            </h2>
            <p className=" mt-10"> Enter the Name of the Segment</p>
            <form className=" mt-4">
              <input
                type="text"
                placeholder=" Name of the segment"
                className=" border px-3 py-2 w-full "
              />
            </form>
            <p className=" my-3">
              To save your segment, you need to add the schemas to build the
              query
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
