import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Components/Home'
import Home1 from './Components/Home1'
import Home2 from './Components/Home2'
import Home3 from './Components/Home3'
import FindJob from "./Components/FindJob";
import Recruiters from "./Components/Recruiters";
import Candidates from "./Components/Candidates";
import Blog from "./Components/Blog";
import Pages from "./Components/Pages";
import AllJob from "./Components/Alljob";
import Jobdetails from "./Components/Jobdetails";
import Recruitersdetails from "./Components/Recruiterdetails";
import Candidatedetails from "./Components/Candidatedetails";
import Bloggrid from "./Components/Bloggrid";
import Blogsingle from "./Components/Blogsingle";
import About from "./Components/About";
import Contact from "./Components/Contactus";
import Pricingplan from "./Components/Pricingplan";
import JobCategories from "./Components/JobCategories";
import JobSection from "./Components/JobSection";
// import HeroSection from "./HeroSection";
// import SearchBar from "./SearchBar";
import './App.css';
function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home1" element={<Home1/>}/>
          <Route path="/home2" element={<Home2/>}/>
          <Route path="/home3" element={<Home3/>}/>
          <Route path="/findJob" element={<FindJob />} />
          <Route path="/recruiters" element={<Recruiters />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/alljobs" element={<AllJob />} />
          <Route path="/jobdetails" element={<Jobdetails />} />
          <Route path="/recruiterdetails" element={<Recruitersdetails />} />
          <Route path="/candidatedetails" element={<Candidatedetails />} />
          <Route path="/bloggrid" element={<Bloggrid />} />
          <Route path="/blogsingle" element={<Blogsingle />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/pricingplan" element={<Pricingplan />} />
        </Routes>
    </Router>
  );
}
export default App;