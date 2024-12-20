import React, { useState, useEffect } from 'react';
import Stopwatch from './Stopwatch';
import { useDispatch } from 'react-redux';
import { recordExercise } from '../features/exerciseHistory/exerciseHistorySlice';

export default function ExerciseCard(props) {
    const { exercise, i } = props;
    const dispatch = useDispatch();

    const [setsCompleted, setSetsComplete] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!isRunning && interval !== null) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const handleSetIncrement = () => {
        const updatedSets = (setsCompleted + 1) % 6;
        setSetsComplete(updatedSets);
        if (updatedSets > 0) {
            dispatch(recordExercise({
                exercise: exercise.name,
                type: exercise.type,
                muscles: exercise.muscles,
                timestamp: new Date().toLocaleString(),
            }));
            console.log('Exercise recorded:', exercise.name);
        }
    };

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        setLaps([]);
    };

    const handleLap = () => {
        setLaps([...laps, time]);
    };

    return (
        <div className='p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4'>
                <h4 className='text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400'>
                    0{i + 1}
                </h4>
                <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center'>{exercise.name.replaceAll("_", " ")}</h2>
                <p className='text-sm text-slate-400 capitalize'>{exercise.type}</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-slate-400 text-sm'>Muscle Groups</h3>
                <p className='capitalize'>{exercise.muscles.join(' & ')}</p>
            </div>
            <div className='flex flex-col bg-slate-950 rounded gap-2 '>
                {exercise.description.split('___').map((val, index) => (
                    <div key={index} className='text-sm'>
                        {val}
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2'>
                {['reps', 'rest', 'tempo'].map(info => (
                    <div key={info} className='flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full'>
                        <h3 className='capitalize text-slate-400 text-sm'>{info === 'reps' ? `${exercise.unit}` : info}</h3>
                        <p className='font-medium'>{exercise[info]}</p>
                    </div>
                ))}
                <button onClick={handleSetIncrement} className='flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600 w-full duration-200'>
                    <h3 className='text-slate-400 text-sm capitalize'>Sets completed</h3>
                    <p className='font-medium'>{setsCompleted} / 5</p>
                </button>
            </div>

            <div className="mt-4">
                <Stopwatch
                    isRunning={isRunning}
                    time={time}
                    laps={laps}
                    onStart={handleStart}
                    onStop={handleStop}
                    onReset={handleReset}
                    onLap={handleLap}
                    formatTime={formatTime}
                />
            </div>
        </div>
    );
}
