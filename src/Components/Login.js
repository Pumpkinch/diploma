import React, { useState } from 'react';
import Authorization from './Authorization';
import Registration from './Registration';
import '../styles/components/login.css'; // Подключаем стили для форм



const Login = () => {
    const [showLogin, setShowLogin] = useState(true); // Начнем с формы авторизации

    const toggleForm = () => {
        setShowLogin(!showLogin);
    };

    return (
        
        <div className="sign-page">
            <div className="form-container">
                {showLogin ? (
                    <Authorization toggleForm={toggleForm} />
                ) : (
                    <Registration toggleForm={toggleForm} />
                )}
            </div>
        </div>
    );
};

export default Login;