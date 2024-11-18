import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';

export default function Profile() {
    const { user, login } = useAuth();
    const [profileData, setProfileData] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({ ...prev, [name]: value }));
    };

    const saveProfile = () => {
        // Здесь можно добавить сохранение на сервер
        login(profileData); // Обновляем контекст
        alert('Профиль обновлен!');
    };

    return (
        <div>
            <h1>Редактировать профиль</h1>
            <input name="name" value={profileData.name} onChange={handleChange} placeholder="Имя" />
            <input name="email" value={profileData.email} onChange={handleChange} placeholder="Email" />
            <button onClick={saveProfile}>Сохранить</button>
        </div>
    );
}