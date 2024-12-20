import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';

// NavigationBar component for the application's top navigation
const NavigationBar = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [isOpen, setIsOpen] = useState(false);

    // Function to handle user logout
    const handleLogout = () => {
        dispatch(logout());
    };

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link to="/">Fitness Tracker</Link>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.707 17.293a1 1 0 010 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 00-1.414-1.414L12 10.586 7.707 6.293a1 1 0 00-1.414 1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 101.414 1.414l5.293-5.293 5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293 5.293z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 5h18a1 1 0 010 2H3a1 1 0 110-2zm0 6h18a1 1 0 010 2H3a1 1 0 110-2zm0 6h18a1 1 0 010 2H3a1 1 0 110-2z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} lg:items-center lg:space-x-4`}>
                    {!isAuthenticated ? (
                        <>
                            <Link
                                to="/login"
                                className="block mt-4 lg:inline-block lg:mt-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="block mt-4 lg:inline-block lg:mt-0 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
                                Dashboard
                            </Link>
                            <Link to="/generator" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
                                Workout Generator
                            </Link>
                            <Link to="/history" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
                                Workout History
                            </Link>
                            <Link to="/profile" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
                                Profile
                            </Link>


                            <button
                                onClick={handleLogout}
                                className="block mt-4 lg:inline-block lg:mt-0 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
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

