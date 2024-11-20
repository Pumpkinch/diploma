import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from './Components/Header';
import Footer from './Components/Footer';
import { AuthProvider, useAuth } from './Context/AuthContext';
import { ProfileProvider } from './Context/ProfileContext';

import Home from './Pages/Home';
import Authors from './Pages/Authors';
import About from './Pages/About';
import Sign from './Pages/Sign';
import Profile from './Pages/Profile';

export default function App() {

    return (
        <ProfileProvider>
            <AuthProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/authors" element={<Authors />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/sign" element={<Sign />} />
                        <Route
                            path="/profile"
                            element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                    <Footer />
                </Router>
            </AuthProvider>
        </ProfileProvider>
    );
}
function ProtectedRoute({ children }) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/sign" />;
    }

    return children;
}