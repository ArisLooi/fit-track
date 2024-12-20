import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateEmail, updatePassword, deleteProfile } from '../features/user/userSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const [email, setEmail] = useState(user.email);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        if (savedEmail) {
            setEmail(savedEmail);
        }
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleEmailUpdate = (e) => {
        e.preventDefault();
        dispatch(updateEmail(email));
        localStorage.setItem('email', email);  // Save the updated email in local storage
    };

    const handlePasswordChange = (e) => {
        setCurrentPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handlePasswordUpdate = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        dispatch(updatePassword(newPassword));
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    const handleDeleteProfile = () => {
        if (window.confirm("Are you sure you want to delete your profile? This action cannot be undone.")) {
            dispatch(deleteProfile());
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            navigate('/login');  // Navigate to login page immediately
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Profile</h1>
                <p className="text-lg mb-4">Manage your profile information. Update your personal details, change your password, and customize your preferences.</p>

                <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4">
                    <h2 className="text-2xl font-bold mb-2">Personal Details</h2>
                    <form onSubmit={handleEmailUpdate}>
                        <label className="block mb-2">Current Email: {email}</label>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full p-2 rounded bg-gray-600 text-white mb-4"
                            required
                        />
                        <button type="submit" className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition-colors">Update Email</button>
                    </form>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4">
                    <h2 className="text-2xl font-bold mb-2">Change Password</h2>
                    <form onSubmit={handlePasswordUpdate}>
                        <label className="block mb-2">Current Password</label>
                        <input
                            type="password"
                            value={currentPassword}
                            onChange={handlePasswordChange}
                            className="w-full p-2 rounded bg-gray-600 text-white mb-4"
                            required
                        />
                        <label className="block mb-2">New Password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            className="w-full p-2 rounded bg-gray-600 text-white mb-4"
                            required
                        />
                        <label className="block mb-2">Confirm New Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            className="w-full p-2 rounded bg-gray-600 text-white mb-4"
                            required
                        />
                        <button type="submit" className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition-colors">Change Password</button>
                    </form>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4">
                    <h2 className="text-2xl font-bold mb-2">Delete Profile</h2>
                    <button onClick={handleDeleteProfile} className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 transition-colors">Delete Profile</button>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2">Preferences</h2>
                    <p>Customize your account preferences and settings.</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
