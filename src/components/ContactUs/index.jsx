import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-content">
        <h1>Contact Us</h1>
        <p><p>Detail-oriented Web Developer with extensive experience in manual and automated testing. Proven track record in developing and maintaining web applications, with prior geophysics experience in the oil and gas industry enhancing analytical skills. Adept at leveraging testing expertise to ensure high-quality deliverables. Seeking opportunities to apply testing and development skills in a dynamic environment.</p>
         </p>
       
        <div className="flexbox-container">
          {/* Flexbox Item 1: Image */}
          <div className="flexbox-item flexbox-item-1">
            <img src= "./img/usa.jpg" alt="Contact Image" className="flexbox-image" />
          </div>

          
          <div className="item2">
            <form>
              <div>
                <label>
                  Name:
                  <input type="text" name="name" />
                </label>
              </div>

              <div>
                <label>
                  Email:
                  <input type="email" name="email" />
                </label>
              </div>

              <div>
                <label>
                  Message:
                  <textarea name="message"></textarea>
                </label>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;


        
