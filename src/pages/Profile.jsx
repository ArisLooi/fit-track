import React from 'react';

const Profile = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Profile</h1>
                <p className="text-lg mb-4">
                    Manage your profile information. Update your personal details, change your password, and customize your preferences.
                </p>
                <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4">
                    <h2 className="text-2xl font-bold mb-2">Personal Details</h2>
                    <p>Edit your name, email, and other personal information.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4">
                    <h2 className="text-2xl font-bold mb-2">Change Password</h2>
                    <p>Update your password for account security.</p>
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

