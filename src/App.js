import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './Components/Header'; // Импортируем Header
import Footer from './Components/Footer';

// Импорт страниц
import Home from './Pages/Home';
import Authors from './Pages/Authors';
import About from './Pages/About';
import Sign from './Pages/Sign';

export default function App() {
    return (
        <Router>
            {/* Помещаем Header вне Routes, чтобы он отображался на всех страницах */}
            <Header />


            {/* Здесь маршруты для страниц */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/authors" element={<Authors />} />
                <Route path="/about" element={<About />} />
                <Route path="/sign" element={<Sign />} />
            </Routes>
            <Footer />
        </Router>
    );
}