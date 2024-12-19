import React from 'react';

const WorkoutHistory = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Workout History</h1>
                <p className="text-lg">
                    Review your workout history. See all your previous workouts, track your progress, and analyze your performance over time.
                </p>
            </div>
            <div className="mt-6">
                <div className="bg-gray-700 text-white p-4 rounded-lg shadow-lg mb-4">
                    <h2 className="text-2xl font-bold mb-2">Recent Workouts</h2>
                    <ul>
                        <li>Workout 1 - Date</li>
                        <li>Workout 2 - Date</li>
                        <li>Workout 3 - Date</li>
                    </ul>
                </div>
                <div className="bg-gray-700 text-white p-4 rounded-lg shadow-lg mb-4">
                    <h2 className="text-2xl font-bold mb-2">Progress Over Time</h2>
                    <p>Graphical or tabular representation of progress.</p>
                </div>
            </div>
        </div>
    );
};

export default WorkoutHistory;

