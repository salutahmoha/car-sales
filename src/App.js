import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Pages/Home';
import Trucks from './Components/Pages/Trucks';
import Buses from './Components/Pages/Buses';
import Others from './Components/Pages/Others';
import Contact from './Components/Pages/Contact';
import Truckdetails from './Components/Pages/truck_details';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trucks" element={<Trucks />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/others" element={<Others />} />
          <Route path="/footer" element={<Contact />} />
          <Route path="/truck_details" element={<Truckdetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
