import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import JobDetails from "./components/JobDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobdetails" element={<JobDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
