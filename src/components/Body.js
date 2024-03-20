import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";

const Body = () => {
  const [open, setOpen] = useState(true);
  const segmentOptions = [
    {
      Label: "First Name",
      Value: "first_name",
    },
    {
      Label: "Last Name",
      Value: "last_name",
    },
    {
      Label: "Gender",
      Value: "gender",
    },
    {
      Label: "Age",
      Value: "age",
    },
    {
      Label: "Account Name",
      Value: "account_name",
    },
    {
      Label: "City",
      Value: "city",
    },
    {
      Label: "State",
      Value: "state",
    },
  ];
  const [segmentName, setSegmentName] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [newOption, setNewOption] = useState("");
  const [availableOptions, setAvailableOptions] = useState(segmentOptions);

  const handleSegmentSave = () => {
    console.log(segmentName + ":" + segmentName);
    //console.log(selectedOptions);

    setSegmentName("");
    setSelectedOptions([]);
    setAvailableOptions(segmentOptions);
  };
  const handleNewOptionAdd = () => {
    if (newOption) {
      setSelectedOptions([...selectedOptions, newOption]);
      setAvailableOptions(
        availableOptions.filter((option) => option.Value !== newOption)
      );
      setNewOption("");
    }
  };
  const handleOptionChange = (e) => {
    setNewOption(e.target.value);
    setSegmentName(e.target.value);
  };

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
          <div className=" relative mx-3 mt-[-2px] ">
            <h2 className="bg-teal-500 -mx-3 text-white text-xl h-20 flex items-center">
              <FaAngleLeft /> Saving Segment
            </h2>
            <p className=" mt-10"> Enter the Name of the Segment</p>
            <form className=" mt-4">
              <input
                type="text"
                placeholder=" Name of the segment"
                className=" border px-3 py-2 w-full "
                //value={segmentName}
              />
            </form>
            <p className=" my-3">
              To save your segment, you need to add the schemas to build the
              query
            </p>
            <div className="">
              <div className="">
                <select
                  className=" border px-2 py-2"
                  value={newOption}
                  onChange={handleOptionChange}
                >
                  <option value="">Add schema to segment</option>
                  {availableOptions.map((option) => (
                    <option key={option.Value} value={option.Label}>
                      {option.Label}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleNewOptionAdd}
                  className=" ml-4 text-teal-800 font-semibold underline"
                >
                  + Add schema to segment
                </button>
              </div>

              {selectedOptions.map((option, index) => (
                <select
                  className=" border my-5 p-2 mx-1"
                  key={index}
                  value={option}
                >
                  <option value={option}>{option}</option>
                </select>
              ))}
            </div>

            <div className="absolute bottom-[-200px] left-0 flex space-x-5 w-full bg-gray-100 ">
              <button
                onClick={handleSegmentSave}
                className=" bg-teal-600 rounded-md text-white px-2 py-2"
              >
                Save new Segment
              </button>
              <button className=" px-2 py-2 bg-white rounded-md text-red-500 font-medium">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
