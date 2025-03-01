import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';
import Footer from './components/Footer';
import Container from './components/Container';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Categories from './components/Categories';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Accessories from './components/Accessories';

function App() {
  return (
    <Router>
      <div 
      className="App"
      >
        <Header />
        {/* <nav>
          <Link to="/">Home</Link> <br></br>
          <Link to="/categories">Categories</Link>
        </nav> */}
        
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />

          <Route path="/categories" element={<Categories />} />
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
