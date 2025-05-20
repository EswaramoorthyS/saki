import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sarees from './components/women/sarees/Sarees';
import Materials from './components/women/materials/Materials';
import Kurti from './components/women/kurti/Kurti';
import Western from './components/women/western/Western';
import Accessories from './components/accessories/Accessories';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Home from './components/home/Home';
import Bestsellers from './components/best_sellers/Bestsellers';

function App() {
  return (
    <Router>
      <div
        className="App"
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/best-seller" element={<Bestsellers />} />
          <Route path="/home" element={<Home />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/kurti" element={<Kurti />} />
          <Route path="/western" element={<Western />} />
          <Route path="/sarees" element={<Sarees />} />
          <Route path="/materials" element={<Materials />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
