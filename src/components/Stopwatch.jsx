import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, stopTimer, resetTimer, updateTime, addLap } from '../features/timer/timerSlice';

export default function Stopwatch() {
    const dispatch = useDispatch();
    const { isRunning, time, laps } = useSelector((state) => state.timer);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                dispatch(updateTime());
            }, 1000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning, dispatch]);

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleStart = () => {
        dispatch(startTimer());
    };

    const handleStop = () => {
        dispatch(stopTimer());
    };

    const handleReset = () => {
        dispatch(resetTimer());
    };

    const handleLap = () => {
        dispatch(addLap());
    };

    return (
        <div className="p-4 bg-slate-900 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="text-center mb-6">
                <h2 className="text-4xl font-bold font-mono text-blue-400">
                    {formatTime(time)}
                </h2>
            </div>

            <div className="flex justify-center gap-4 mb-6">
                {!isRunning ? (
                    <button
                        onClick={handleStart}
                        className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                        Start
                    </button>
                ) : (
                    <button
                        onClick={handleStop}
                        className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                        Stop
                    </button>
                )}

                <button
                    onClick={handleLap}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    disabled={!isRunning}
                >
                    Lap
                </button>

                <button
                    onClick={handleReset}
                    className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                    Reset
                </button>
            </div>

            {laps.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Laps</h3>
                    <div className="max-h-48 overflow-y-auto">
                        {laps.map((lapTime, index) => (
                            <div
                                key={index}
                                className="flex justify-between py-2 px-4 border-b border-slate-700"
                            >
                                <span>Lap {index + 1}</span>
                                <span className="font-mono">{formatTime(lapTime)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}