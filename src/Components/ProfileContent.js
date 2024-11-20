import React, { useContext, useState } from 'react'; 
import { ProfileContext } from '../Context/ProfileContext';

const Profile = () => {
    const { profileData, setProfileData } = useContext(ProfileContext);

    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(profileData.name);
    const [newBio, setNewBio] = useState(profileData.bio);
    const [newPhoto, setNewPhoto] = useState(profileData.photo);

    const handleSave = () => {
        setProfileData({
            ...profileData,
            name: newName,
            bio: newBio,
            photo: newPhoto,
        });
        setEditing(false);
    };

    return (
        <div className={`profile ${editing ? 'editing' : 'viewing'}`}>
            <h2>Мой профиль</h2>

            <div className="profile-photo">
                <img src={newPhoto} alt="Profile" width="150" height="150" />
                {editing && (
                    <input
                        type="file"
                        onChange={(e) => setNewPhoto(URL.createObjectURL(e.target.files[0]))}
                    />
                )}
            </div>

            <div className="profile-info">
                <div className="profile-field">
                    <strong>Имя:</strong>
                    {editing ? (
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                    ) : (
                        <p>{profileData.name}</p>
                    )}
                </div>
                <div className="profile-field">
                    <strong>Описание:</strong>
                    {editing ? (
                        <textarea
                            value={newBio}
                            onChange={(e) => setNewBio(e.target.value)}
                        />
                    ) : (
                        <p>{profileData.bio}</p>
                    )}
                </div>
            </div>

            <div className="profile-buttons">
                {editing ? (
                    <>
                        <button onClick={handleSave}>Сохранить</button>
                        <button onClick={() => setEditing(false)}>Отмена</button>
                    </>
                ) : (
                    <button onClick={() => setEditing(true)}>Редактировать</button>
                )}
            </div>
        </div>
    );
};

export default Profile;