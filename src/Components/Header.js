import React from 'react';
import '../styles/components/header.css';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import logo from '../images/rocket.svg';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header>
      <div className='header-container'>
        <div className='logo'>
          <img src={logo} alt="FanBoost logo" />
          <span>Fan<strong>Boost</strong></span>
        </div>
        <ul className='nav'>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/authors">Авторы</Link></li>
          <li><Link to="/about">О нас</Link></li>
        </ul>
        {user ? (
          <div>
            <span>Привет, {user.name}!</span>
            <button onClick={logout}>Выйти</button>
            <Link to="/profile">Профиль</Link>
          </div>
        ) : (
          <button className='sign'><Link to="/sign">Зарегистрироваться</Link></button>
        )}
      </div>
    </header>
  );
}