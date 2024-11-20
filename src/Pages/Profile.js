import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import ProfileContent from '../Components/ProfileContent';
import '../styles/components/profileContent.css';

export default function Profile() {
    return (
        <div className='wrapper'>
            <ProfileContent />
        <h1>Редактировать профиль</h1>
        </div>
    );
}