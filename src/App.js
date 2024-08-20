import React from 'react';
// import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery';
import Buttons from './components/Buttons';
import Home from './components/Home/Home';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [isRegistering, setIsRegistering] = useState(true);

  const switchToLogin = () => {
    setIsRegistering(false);
  };

  const switchToRegister = () => {
    setIsRegistering(true);
  };
  return (
    <>
      <NavBar/>
      <h1 id="homePageTitle">Welcome to My Portfolio</h1>
      <Gallery/>
      <Buttons/>
      {isRegistering ? (
        <Register switchToLogin={switchToLogin} />
      ) : (
        <Login switchToRegister={switchToRegister} />
      )}
      {/* <Home/> */}
      {/* <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
