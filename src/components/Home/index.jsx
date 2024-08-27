import React from 'react';
import Gallery from '../Gallery';
import Buttons from '../Buttons';
import ContactUs from '../ContactUs';
import Footer from '../Footer'; 

const HomePage = () => {
  return (
    <div className="homePage">
      <h1 className="homePageTitle">Welcome to My Portfolio</h1>
      <Gallery />
      <Buttons />

      <div className="home-container">
        {/* Title in the middle of the page */}
        <h1 className="home-title">My Skills</h1>

        {/* Images and descriptions */}
        <div className="image-gallery">
          <div className="image-item">
            <img src="/img/js.jpg" alt="JavaScript" className="circle-image" />
            <p className="image-description">JavaScript</p>
          </div>
          <div className="image-item">
            <img src="/img/ji.jpg" alt="Jira" className="circle-image" />
            <p className="image-description">Jira</p>
          </div>
          <div className="image-item">
            <img src="/img/se.jpg" alt="Selenium" className="circle-image" />
            <p className="image-description">Selenium</p>
          </div>
        </div>
      </div>

   
      <Footer />
    </div>
  );
};

export default HomePage;
