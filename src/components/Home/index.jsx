
import React from 'react'
import Gallery from '../Gallery';
import Buttons from '../Buttons';
import ContactUs from '../ContactUs';

export default () => {
  return (
    <div>
      <h1 className="homePageTitle">Welcome to My Portfolio</h1>
      <Gallery/>
      <Buttons/>
      <ContactUs/>
    </div>
  )
}

