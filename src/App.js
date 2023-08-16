import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import './styles/App.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
