import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Jobs from "./Pages/Jobs";
import JobDetails from "./Pages/JobDetails";
import HowItWorks from "./Pages/HowItWorks";
import Apply from "./Pages/Apply";
import ResultQualified from "./Pages/ResultQualified";
import ResultDisqualified from "./Pages/ResultDisqualified";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/result-qualified" element={<ResultQualified />} />
          <Route path="/result-disqualified" element={<ResultDisqualified />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
