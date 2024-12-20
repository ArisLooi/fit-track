import React from 'react';
import { useSelector } from 'react-redux';

const WorkoutHistory = () => {
    const history = useSelector((state) => state.exerciseHistory.history);
    console.log('Workout history:', history);
    return (
        <div className="container mx-auto p-4">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Workout History</h1>
                <p className="text-lg">
                    Review your workout history. See all your previous workouts, track your progress, and analyze your performance over time.
                </p>
                <div className="mt-6">
                    {history.length > 0 ? (
                        history.map((record, index) => (
                            <div key={index} className="bg-gray-700 text-white p-4 rounded-lg shadow-md mb-4">
                                <h3 className="text-2xl font-bold mb-2">{record.exercise}</h3>
                                <p>Type: {record.type}</p>
                                <p>Muscles: {record.muscles.join(', ')}</p>
                                <p>Completed on: {record.timestamp}</p>
                            </div>
                        ))
                    ) : (
                        <p>No workout history available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkoutHistory;

