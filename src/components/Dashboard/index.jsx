import React from 'react';
import "../../../styles/index.css";

const Dashboard = () => {
return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">User Dashboard</h1>
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="form-input"
          value={userData.firstName}
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="form-input"
          value={userData.lastName}
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="userEmail">Email:</label>
        <input
          type="email"
          id="userEmail"
          name="userEmail"
          className="form-input"
          value={userData.userEmail}
          onChange={handleChange}
          disabled
        />

        <label className="form-label" htmlFor="userAbout">About:</label>
        <textarea
          id="userAbout"
          name="userAbout"
          className="form-input"
          value={userData.userAbout}
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="social">Social Links:</label>
        <input
          type="text"
          id="social"
          name="social"
          className="form-input"
          value={userData.social.join(', ')}
          onChange={(e) => setUserData({ ...userData, social: e.target.value.split(', ') })}
        />

        <label className="form-label" htmlFor="userProjects">Projects:</label>
        <textarea
          id="userProjects"
          name="userProjects"
          className="form-input"
          value={userData.userProjects.join('\n')}
          onChange={(e) => setUserData({ ...userData, userProjects: e.target.value.split('\n') })}
        />

        <button type="submit" className="form-button">Update Information</button>
      </form>
    </div>
  );
};

export default Dashboard;

