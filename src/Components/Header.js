import React, { useState } from 'react';
import '../styles/components/header.css';
import { Link } from "react-router-dom";
import logo from '../images/rocket.svg';

export default function Header() {
    const [accountOpen, setAccountOpen] = useState(false);

    return (
        <header>
            <div className='header'>
                <div className='logo'>
                    {/* <Link to="/"> */}
                        <img src={logo} alt="FanBoost logo" />
                        <span>Fan<strong>Boost</strong></span>
                    {/* </Link> */}
                </div>
                <div className='nav-wrapper'>
                    <ul className='nav'>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/authors">Авторы</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                    </ul>
                </div>
                <button className='sign'><Link to="/sign">Зарегистрироваться</Link></button>
                {accountOpen && (
                    <div className='user-account'>
                        {/* Сюда можно добавить детали аккаунта пользователя */}
                    </div>
                )}
            </div>
        </header>
    );
}