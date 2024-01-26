import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Jobcard from "./Jobcard";
import dayjs from "dayjs";
import Loader from "./Loader";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState();

  const url = "https://api.lever.co/v0/postings/leverdemo?mode=json";

  // State to store the selected filters
  const [filters, setFilters] = useState({
    jobRole: "",
    jobType: "",
    location: "",
    experience: "",
  });

  useEffect(() => {
    function jobPostings() {
      setLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const modifiedData = data
            .filter((job) => job.categories.department === "Engineering")
            .map((job) => {
              let workplace = "";
              if (job.workplaceType === "unspecified") {
                workplace = "On-site";
              } else {
                workplace = job.workplaceType;
              }

              return {
                jobTitle: job.text,
                jobLocation: job.categories.location,
                jobType: workplace,
                jobDesc: job.descriptionPlain,
                jobApplyUrl: job.applyUrl,
                jobPostingDate: dayjs(job.createdAt).format("MM-DD-YYYY"),
                jobSkills: job.lists[0]?.content,
                jobExperience: job.experience,
              };
            });

          // Apply filters to the job data
          const filteredJobs = modifiedData.filter((job) => {
            return (
              (!filters.jobRole || job.jobTitle === filters.jobRole) &&
              // (!filters.jobType || job.jobType === filters.jobType) &&
              (!filters.location || job.jobType === filters.location) &&
              (!filters.experience || job.jobExperience === filters.experience)
            );
          });

          setJobs(filteredJobs);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching job data:", error);
        });
    }

    jobPostings();
  }, [filters]); // Trigger the effect when filters change

  const handleSearch = (selectedFilters) => {
    setFilters(selectedFilters);
  };

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex justify-center">
        {loading ? (
          <center>
            <Loader />
          </center>
        ) : (
          <div className=" w-10/12">
            {jobs.length > 0 && <Jobcard jobs={jobs} />}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
