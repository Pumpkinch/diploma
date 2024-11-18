import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        id: 1,
        email: 'test@example.com',
        password: '12345'
    });

    const login = (userData) => setUser(userData); // Вход
    const logout = () => setUser(null); // Выход

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);