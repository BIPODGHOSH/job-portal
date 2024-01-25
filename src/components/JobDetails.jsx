import React from "react";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import Navbar from "./Navbar";

const JobDetails = () => {
  const location = useLocation();
  const curDate = dayjs(Date.now());

  const job = location.state;
  // console.log(job);
  return (
    <>
      <Navbar />
      <div className="mx-2 sm:mx-40 my-16">
        <div className="flex flex-col gap-24 justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg">
          <div className="flex flex-col gap-2">
            <h1 className="">{job.jobTitle}</h1>
            <p className="">{job.jobLocation}</p>
            <p> {job.jobType}</p>
            <div className="">{job.jobDesc}</div>
            <div className=" flex flex-col gap-2 mt-2">
              {/* {skills.map((skill, i) => (
                    <p
                      className=" bg-blue-300 px-5 rounded-md font-semibold"
                      key={i}
                    >
                      {skill}
                    </p>
                  ))} */}
              <h1 className=" font-bold text-3xl">You should know about</h1>
              <div
                dangerouslySetInnerHTML={{ __html: job.jobSkills }}
                className=""
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <p className="">
              Posted {curDate.diff(job.jobPostingDate, "day")} days ago
            </p>
            <button
              className=" border border-blue-700 px-5 py-1 rounded-md text-blue-700"
              onClick={() => handleApply(job.jobApplyUrl)}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
