import React from 'react';
import '../Styles/JobSection.css'; 
import Left from '../../images/Leftimage.jpg';
import Right from '../../images/Rightimage.jpg'

const JobCategories = () => {
  return (
    <div className="job-section">
      {/* Hiring Banner */}
      <div className="hiring-banner">
        <img src={Left} alt="Leftside" className="banner-image" height="200px" width="250px" />
        
        <div className="banner-content">
          <div className="we">
            <h3>We are <span><h1>Hiring</h1></span></h3>
          </div>
          <div className='work'>
            <p>Let's Work Together & Explore Opportunities</p>
          </div>  
          <div>
            <button className="apply-button">Apply Now</button>
          </div>   
        </div>
        
        <img src={Right} alt="Rightside" className="banner-image" height="150px" width="200px" />
      </div>
      <div className="jobs-of-day">
        <h2 className="title">Jobs of the day</h2>
        <p>Search and connect with the right candidates faster</p>
        <div className="job-categories">
          <button className="job-category">Content Writer</button>
          <button className="job-category">Finance</button>
          <button className="job-category">Human Resource</button>
          <button className="job-category">Management</button>
          <button className="job-category">Market Research</button>
          <button className="job-category">Marketing & Sale</button>
          <button className="job-category">Retail & Products</button>
          <button className="job-category">Software</button>
        </div>
      </div>
    </div>
  );
};

export default JobCategories;