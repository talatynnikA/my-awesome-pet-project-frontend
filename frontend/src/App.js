import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  //  Routes instead of Switch
import Home from './pages/Home';
import Contacts from './pages/Contacts';

function App() {
    return (
        <Router>
            <div>
                <Routes>  {/* Changed from Switch to Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
