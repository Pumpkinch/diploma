import React, { createContext, useState, useEffect } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    
    const [profileData, setProfileData] = useState({
        name: 'Pumpki',
        bio: 'Делюсь туториалами и проектами по программированию.',
        photo: 'defaultPhoto.jpg', // можно указать путь к фотографии
    });

    // Загружаем данные из localStorage при инициализации
    useEffect(() => {
        const storedProfileData = localStorage.getItem('profileData');
        if (storedProfileData) {
            setProfileData(JSON.parse(storedProfileData));
        }
    }, []);

    // Сохраняем данные в localStorage при изменении
    useEffect(() => {
        localStorage.setItem('profileData', JSON.stringify(profileData));
    }, [profileData]);

    return (
        <ProfileContext.Provider value={{ profileData, setProfileData }}>
            {children}
        </ProfileContext.Provider>
    );
};