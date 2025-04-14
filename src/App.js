import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Men from './components/men/Men';
import Women from './components/women/Women';
import Kids from './components/kids/Kids';
import Accessories from './components/accessories/Accessories';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div
        className="App"
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
