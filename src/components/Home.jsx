import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Jobcard from "./Jobcard";
import dayjs from "dayjs";

function Home() {
  const [jobs, setJob] = useState([]);

  const url = "https://api.lever.co/v0/postings/leverdemo?mode=json";
  useEffect(() => {
    function jobPostings() {
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
              };
            });

          setJob(modifiedData);
        })
        .catch((error) => {
          console.error("Error fetching job data:", error);
        });
    }

    jobPostings();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <SearchBar />
      </div>
      <div className="">
        <Jobcard jobs={jobs} />
      </div>
    </>
  );
}

export default Home;
