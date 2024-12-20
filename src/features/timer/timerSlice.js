import { createSlice } from '@reduxjs/toolkit';

// Create a slice for managing timer state
const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        isRunning: false,
        time: 0,
        laps: []
    },
    reducers: {
        // Reducer to start the timer
        startTimer: (state) => {
            state.isRunning = true;
        },
        // Reducer to stop the timer
        stopTimer: (state) => {
            state.isRunning = false;
        },
        // Reducer to reset the timer and clear laps
        resetTimer: (state) => {
            state.isRunning = false;
            state.time = 0;
            state.laps = [];
        },
        // Reducer to update the time by incrementing it
        updateTime: (state) => {
            state.time += 1;
        },
        // Reducer to add the current time to the laps array
        addLap: (state) => {
            state.laps.push(state.time);
        }
    }
});

// Export actions for use in components
export const { startTimer, stopTimer, resetTimer, updateTime, addLap } = timerSlice.actions;
// Export the reducer for store configuration
export default timerSlice.reducer;