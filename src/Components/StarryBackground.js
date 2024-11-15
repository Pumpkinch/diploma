import React, { useEffect, useRef } from 'react';
import '../styles/components/login.css';

const StarryBackground = () => {
    const starContainerRef = useRef(null);

    useEffect(() => {
        // Функция для создания одной звезды с случайной позицией
        const createStar = () => {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 2}s`;  // задержка для каждой звезды
            starContainerRef.current.appendChild(star);

            // Удаление звезды через 2 секунды для новой анимации
            setTimeout(() => star.remove(), 2000);
        };

        // Создание нескольких звезд каждые 500 мс
        const interval = setInterval(() => {
            for (let i = 0; i < 10; i++) {  // количество звезд на каждой итерации
                createStar();
            }
        }, 500);

        return () => clearInterval(interval);  // Очистка при размонтировании компонента
    }, []);

    return <div ref={starContainerRef} className="starry-background"></div>;
};

export default StarryBackground;