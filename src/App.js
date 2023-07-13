
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Booking from './components/Booking';

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
