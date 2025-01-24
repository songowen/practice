import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import UserRoom from './pages/UserRoom';
import SearchRooms from './pages/SearchRooms';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/userroom" element={<UserRoom />} />
        <Route path="/searchroom" element={<SearchRooms />} />


      </Routes>
    </Router>
  );
};

export default App;
