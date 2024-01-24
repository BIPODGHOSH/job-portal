import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center gap-4 my-10 px-10">
      <select className="w-64 py-3 pl-4 bg-zinc-100 font-semibold rounded-md">
        <option value="" disabled hidden>
          Job Role
        </option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Fullstack Developer">Fullstack Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="iOS Developer">iOS Developer</option>
      </select>

      <select className="w-64 py-3 pl-4 bg-zinc-100 font-semibold rounded-md">
        <option value="" disabled hidden>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>

      <select className="w-64 py-3 bg-zinc-100 font-semibold rounded-md pl-4">
        <option value="" disabled hidden>
          Location
        </option>
        <option value="Remote">Remote</option>
        <option value="On site">On site</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <select className="w-64 py-3 px-4 pl-4 bg-zinc-100 font-semibold rounded-md outline-none">
        <option value="" disabled hidden>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Junior">Junior</option>
        <option value="Mid-Senior">Mid-Senior</option>
        <option value="Senior">Senior</option>
      </select>

      <button className="w-64 py-3 bg-blue-500 font-semibold rounded-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
