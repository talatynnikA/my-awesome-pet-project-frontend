import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Header from './pages/Header';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </Router>
    );
};

export default App;
