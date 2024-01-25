import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [selectedJobRole, setSelectedJobRole] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");

  const handleSearch = () => {
    // Pass the selected values to the parent component (Home)
    onSearch({
      jobRole: selectedJobRole,
      // jobType: selectedJobType,
      location: selectedLocation,
      // experience: selectedExperience,
    });
  };

  return (
    <div className="flex justify-center gap-0.5 sm:gap-4 my-10 px-10 w-full">
      <select
        className=" w-20 sm:w-64 py-3 pl-0 px-0 sm:px-4 sm:pl-4 bg-zinc-100 font-semibold rounded-md text-xs sm:text-sm"
        onChange={(e) => setSelectedJobRole(e.target.value)}
      >
        <option value="" disabled hidden selected>
          Job Role
        </option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Front End Engineer">Frontend Developer</option>
        <option value="BackEnd Engineer">Backend Developer</option>
        <option value="Full Stack Engineer">Fullstack Developer</option>
        <option value="iOS Developer">iOS Developer</option>
      </select>

      <select
        className="w-20 sm:w-64 py-3 pl-0 px-0 sm:px-4 sm:pl-4 bg-zinc-100 font-semibold rounded-md text-xs sm:text-sm"
        onChange={(e) => setSelectedJobType(e.target.value)}
      >
        <option value="" disabled hidden selected>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>

      <select
        className="w-20 sm:w-64 py-3 pl-0 px-0 sm:px-4 sm:pl-4 bg-zinc-100 font-semibold rounded-md text-xs sm:text-sm"
        onChange={(e) => setSelectedLocation(e.target.value)}
      >
        <option value="" disabled hidden selected>
          Location
        </option>
        <option value="remote">Remote</option>
        <option value="On-site">On site</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <select
        className="w-20 sm:w-64 py-3 pl-0 px-0 sm:px-4 sm:pl-4 bg-zinc-100 font-semibold rounded-md outline-none text-xs sm:text-sm"
        onChange={(e) => setSelectedExperience(e.target.value)}
      >
        <option value="" disabled hidden selected>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Junior">Junior</option>
        <option value="Mid-Senior">Mid-Senior</option>
        <option value="Senior">Senior</option>
      </select>

      <button
        className=" w-full sm:w-64 py-3 bg-blue-500 font-semibold rounded-md sm:text-lg text-xs"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
