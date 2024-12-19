import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';

const NavigationBar = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link to="/">Fitness Tracker</Link>
                </div>
                <div className="flex space-x-4">
                    {!isAuthenticated ? (
                        <>
                            <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Login
                            </Link>
                            <Link to="/register" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/" className="text-gray-300 hover:text-white">Dashboard</Link>
                            <Link to="/history" className="text-gray-300 hover:text-white">Workout History</Link>
                            <Link to="/profile" className="text-gray-300 hover:text-white">Profile</Link>
                            <Link to="/generator" className="text-gray-300 hover:text-white">Generator</Link>
                            <Link to="/workout" className="text-gray-300 hover:text-white">Workout</Link>
                            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;

