import React from 'react';
import dbimage from '/dbimage.png';

// Dashboard component to display an overview of recent activities and metrics
const Dashboard = () => {
    return (
        <div className="container mx-auto p-4">
            {/* Placeholder for Hero component */}
            {/* <Hero /> */}
            <div className="text-white p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
                <p className="text-lg">
                    Welcome to your dashboard! Here you can find an overview of your recent activities, workout summaries, and performance metrics.
                </p>
            </div>
            {/* Display dashboard image */}
            <div><img src={dbimage} alt="Dashboard" /></div>
        </div>
    );
};

export default Dashboard;
