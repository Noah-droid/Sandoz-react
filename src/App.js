// App.js
import React from 'react';
import Home from './home'; // Import the Home component
// import Navbar from './navbar'; 
import CHMP from './chmp';
import Report from './report';
import Update from './update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import other components as needed

function App() {
    return (
      // <Navbar />

      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/chmp" element={<CHMP />} />
        <Route exact path="/report" element={<Report />} />
        <Route exact path="/update" element={<Update />} />
        {/* <Route path="/other" element={<OtherPage />} /> */}
      </Routes>
    </Router>
      
    );
}

export default App;
