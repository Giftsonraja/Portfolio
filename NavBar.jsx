import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './NavBar.css'; 
import logo from '../images/logo.png'; 
import MenuIcon from '../images/menu.png';
import Arrow from '../images/arrow.png';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleSelectChange = (event) => {
    const selectedRoute = event.target.value;
    if (selectedRoute) {
      navigate(selectedRoute);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img className="logoImg" src={logo} alt="Job logo" width="50" />
            <span className="ms-2 logoName">JobBox</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
          >
            <img src={MenuIcon} alt="Menu" width="30px" />
          </button>

          <div className="collapse navbar-collapse d-xl-flex justify-content-between">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <select className="form-select" onChange={handleSelectChange}>
                  
                  <option value="/">Home</option>
                  <option value="/home1">Home 1</option>
                  <option value="/home2">Home 2</option>
                  <option value="/home3">Home 3</option>
                </select>
              </li>
              <li className="nav-item dropdown">
                <select className="form-select" onChange={handleSelectChange}>
                  <option value="/findJob">Find a Job</option>
                  <option value="/allJobs">All Jobs</option>
                  <option value="/jobDetails">Job Details</option>
                </select>
              </li>
              <li className="nav-item dropdown">
                <select className="form-select" onChange={handleSelectChange}>
                  <option value="/recruiters">Recruiters</option>
                  <option value="/recruiterDetails">Recruiter Details</option>
                </select>
              </li>
              <li className="nav-item dropdown">
                <select className="form-select" onChange={handleSelectChange}>
                  <option value="/candidates">Candidates</option>
                  <option value="/candidateDetails">Candidate Details</option>
                </select>
              </li>
              <li className="nav-item dropdown">
                <select className="form-select" onChange={handleSelectChange}>
                  <option value="/blog">Blog</option>
                  <option value="/blogGrid">Blog Grid</option>
                  <option value="/blogSingle">Blog Single</option>
                </select>
              </li>
              <li className="nav-item dropdown">
                <select className="form-select" onChange={handleSelectChange}>
                  <option value="/pages">Pages</option>
                  <option value="/about">About</option>
                  <option value="/contact">Contact</option>
                  <option value="/pricingPlan">Pricing Plan</option>
                </select>
              </li>
            </ul>
            <div className="navbar-actions d-flex">
              <Link to="/register" className="btn btn-link">Register</Link>
              <Link to="/signin" className="btn signinbtn">Sign In</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>X</button>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/findJob">Find A Job</Link>
          </li>
          <li>
            <Link to="/recruiters">Recruiters</Link>
          </li>
          <li>
            <Link to="/candidates">Candidates</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
