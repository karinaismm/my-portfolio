import React from 'react'

export default function index() {
  return (
   
      <>
      <div class="form-container">
    <h1 class="form-title" id="form-title">Registration Form</h1>
  
    <form id="registrationForm">
      <label for="firstName" class="form-label">First Name:</label>
      <input type="text" id="firstName" name="firstName" class="form-input" required/>
  
      <label for="lastName" class="form-label">Last Name:</label>
      <input type="text" id="lastName" name="lastName" class="form-input" required/>
  
      <label for="email" class="form-label">Email:</label>
      <input type="email" id="email" name="email" class="form-input" required/>
  
      <label for="password" class="form-label">New Password:</label>
      <input type="password" id="password" name="password" class="form-input" required/>
  
      <label for="confirmPassword" class="form-label">Confirm Password:</label>
      <input type="password" id="confirmPassword" name="confirmPassword" class="form-input" required/>
  
      <button type="submit" class="form-button">Register</button>
      <span class="form-switch-link" onclick="switchToLogin()">Already registered? Log in here</span>
    </form>
  </div>
  
      </>
  )
}
