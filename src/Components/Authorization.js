import React, { Component } from 'react';


export default class Authorization extends Component {
    render() {
        return (
            <main className="login-form-container">
                <div className="login-form">
                    <h2>Авторизация</h2>
                    <form>
                        <input type="email" placeholder="Эл. почта" />
                        <input type="password" placeholder="Пароль" />
                        {/* <div className="forgot-password">Забыли пароль?</div> */}
                        <button type="submit" className="login-button">Войти</button>
                        <div className="signup-link">
                            Вы не зарегистрированы? 
                            <a href="#" onClick={this.props.toggleForm}>Зарегистрироваться</a>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}