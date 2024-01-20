import React from "react";

const SearchBar = () => {
  return (
    <div className=" flex justify-center gap-4 my-10 px-10">
      <select className="w-64 py-3 pl-4 bg-zinc-100 font-semibold rounded-md">
        <option value="" className="" disabled selected hidden>
          Jobe Role
        </option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Fullstack Developer">Fullstack Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="ios Developer">ios Developer</option>
      </select>

      <select className="w-64 py-3 pl-4 bg-zinc-100 font-semibold rounded-md">
        <option value="" className="" disabled selected hidden>
          Job Type
        </option>
        <option value="Full Time" className="">
          Full Time
        </option>
        <option value="Part Time" className="">
          Part Time
        </option>
        <option value="Contract" className="">
          Contract
        </option>

        <option value="Internship" className="">
          Internship
        </option>
      </select>

      <select className="w-64 py-3 bg-zinc-100 font-semibold rounded-md pl-4">
        <option value="" className="" disabled selected hidden>
          Location
        </option>

        <option value="Remote" className="">
          Remote
        </option>
        <option value="On site" className="">
          On site
        </option>
        <option value="Hybrid" className="">
          Hybrid
        </option>
      </select>

      <select className="w-64 py-3 px-4 pl-4 bg-zinc-100 font-semibold rounded-md outline-none">
        <option value="" className="" disabled selected hidden>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Junior">Junior</option>
        <option value="Mid-Seneor">Mid-Seneor</option>
        <option value="Seneor">Seneor</option>
      </select>

      <button className="w-64 py-3 bg-blue-500 font-semibold rounded-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
