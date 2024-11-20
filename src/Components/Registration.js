import React, { Component } from 'react';


export default class Registration extends Component {
    render() {
        return (
            <main className="login-form-container">
                <div className="login-form">
                    <h2>Регистрация</h2>
                    <form>
                        <input type="text" placeholder="Ник" />
                        <input type="email" placeholder="Эл. почта" />
                        <input type="password" placeholder="Пароль" />
                        <input type="password" placeholder="Повторите пароль" />
                        <button type="submit" className="login-button">Зарегистрироваться</button>
                        <div className="signup-link">
                            Уже зарегистрированы?
                            <a href="#" onClick={this.props.toggleForm}>Войти</a>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}