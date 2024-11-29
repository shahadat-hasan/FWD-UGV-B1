import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import './index.css'
import './App.css'

function App() {
    return (
        <Router>
      

       
            <Navbar />
            <div className="container mx-auto mt-8">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profile/:id" element={<Profile />} />
                </Routes>
            </div>
         
        </Router>
    );
}

export default App;
