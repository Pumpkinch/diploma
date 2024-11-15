import React from 'react';
import heroImage from '../images/index-hero.jpg';


const Hero = () => {
    const heroStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: `url(${heroImage}) no-repeat center center/cover`,
        zIndex: -1
    };

    const mainTextStyles = {
        position: 'absolute',
        textAlign: 'center',
        top: '35%',
        width: '100%',
        fontSize: '30px',
        fontWeight: '600',
    };

    const subTextStyles = {
        position: 'absolute',
        textAlign: 'center',
        left: '50%',
        transform: 'translateX(-50%)',
        top: '41%',
        width: '70%',
        fontSize: '20px',
        fontWeight: '400'
    };

    const buttonStyles = {
        position: 'absolute',
        top: '54%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '10px 100px',
        fontSize: '20px',
        backgroundColor: '#E67E22',
        color: '#fff',
        border: '3px solid white',
        borderRadius: '35px',
        cursor: 'pointer'
    };

    return (
        <div style={heroStyles}>
            <div style={mainTextStyles}>Ваш мир творчества</div>
            <div style={subTextStyles}>
                Откройте эксклюзивный контент или создавайте свои проекты, вдохновляя и собирая сообщество преданных подписчиков.
            </div>
            <button style={buttonStyles}>Начать</button>
        </div>
    );
};

export default Hero;