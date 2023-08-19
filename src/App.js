
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Home/Main';
import Nav from './components/Nav';
import Booking from './components/Booking/Booking';
import ConfirmedBooking from './components/Booking/ConfirmedBooking';
import UnderConstruction from './components/UnderConstruction/UnderConstriction';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Header />
        {/* <Nav /> */}
        <Routes>
          <Route path="/feast-flame" element={<Main />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
