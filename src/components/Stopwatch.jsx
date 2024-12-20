import React, { useEffect } from 'react';

const Stopwatch = ({ isRunning, time, laps, onStart, onStop, onReset, onLap, formatTime }) => {
    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(onTick, 1000);
        } else if (!isRunning && interval !== null) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);

        function onTick() {
            onStart();
        }
    }, [isRunning, onStart]);

    return (
        <div className="p-4 bg-slate-900 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="text-center mb-6">
                <h2 className="text-4xl font-bold font-mono text-blue-400">
                    {formatTime(time)}
                </h2>
            </div>

            <div className="flex justify-center gap-4 mb-6">
                {!isRunning ? (
                    <button onClick={onStart} className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                        Start
                    </button>
                ) : (
                    <button onClick={onStop} className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                        Stop
                    </button>
                )}

                <button onClick={onLap} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors" disabled={!isRunning}>
                    Lap
                </button>

                <button onClick={onReset} className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                    Reset
                </button>
            </div>

            {laps.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Laps</h3>
                    <div className="max-h-48 overflow-y-auto">
                        {laps.map((lapTime, index) => (
                            <div key={index} className="flex justify-between py-2 px-4 border-b border-slate-700">
                                <span>Lap {index + 1}</span>
                                <span className="font-mono">{formatTime(lapTime)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stopwatch;
