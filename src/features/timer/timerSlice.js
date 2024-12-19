import { createSlice } from '@reduxjs/toolkit';

const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        isRunning: false,
        time: 0,
        laps: []
    },
    reducers: {
        startTimer: (state) => {
            state.isRunning = true;
        },
        stopTimer: (state) => {
            state.isRunning = false;
        },
        resetTimer: (state) => {
            state.isRunning = false;
            state.time = 0;
            state.laps = [];
        },
        updateTime: (state) => {
            state.time += 1;
        },
        addLap: (state) => {
            state.laps.push(state.time);
        }
    }
});

export const { startTimer, stopTimer, resetTimer, updateTime, addLap } = timerSlice.actions;
export default timerSlice.reducer;