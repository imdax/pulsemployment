import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import JobBoard from "./Pages/Jobs/JobBoard";
import Register from "./Pages/Company/Register";
import Login from "./Pages/Company/Login";
import Dashboard from "./Pages/Company/Dashboard";
import JobDetails from "./Pages/JobDetails";
import HowItWorks from "./Pages/HowItWorks";
import Apply from "./Pages/Apply";
import ResultQualified from "./Pages/ResultQualified";
import ResultDisqualified from "./Pages/ResultDisqualified";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";
import DrRuwanProfile from "./Pages/DrRuwanProfile";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/jobs" element={<JobBoard />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/result-qualified" element={<ResultQualified />} />
            <Route path="/result-disqualified" element={<ResultDisqualified />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dr-ruwan-paul" element={<DrRuwanProfile />} />

            {/* Company Routes */}
            <Route path="/company/register" element={<Register />} />
            <Route path="/company/login" element={<Login />} />
            <Route path="/company/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
