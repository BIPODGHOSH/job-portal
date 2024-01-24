import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const Jobcard = ({ jobs }) => {
  console.log(jobs);

  const skills = ["JavaScript", "ReactJS", "Html", "Css", "NodeJs"];
  const curDate = dayjs(Date.now());
  console.log(curDate);
  const dateDeff = curDate.diff("01-12-2024", "day");

  const handleApply = (url) => {
    // console.log(url);
    window.open(url, "_blank");
  };

  return (
    <>
      {jobs &&
        jobs.map((job, index) => (
          <div className="mx-40 mb-4" key={index}>
            <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-105">
              <div className="flex flex-col gap-2">
                <h1 className="">{job.jobTitle}</h1>
                <p className="">{job.jobLocation}</p>
                <p> {job.jobType}</p>
                <div className=" flex flex-row gap-2 mt-2">
                  {/* {skills.map((skill, i) => (
                    <p
                      className=" bg-blue-300 px-5 rounded-md font-semibold"
                      key={i}
                    >
                      {skill}
                    </p>
                  ))} */}
                  <div
                    dangerouslySetInnerHTML={{ __html: job.jobSkills }}
                    className=" w-10/12"
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
        ))}
    </>
  );
};

export default Jobcard;
