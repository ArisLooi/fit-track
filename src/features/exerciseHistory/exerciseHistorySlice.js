import { createSlice } from '@reduxjs/toolkit';

const exerciseHistorySlice = createSlice({
    name: 'exerciseHistory',
    initialState: {
        history: [],
    },
    reducers: {
        recordExercise: (state, action) => {
            state.history.push(action.payload);
        },
        clearHistory: (state) => {
            state.history = [];
        },
    },
});

export const { recordExercise, clearHistory } = exerciseHistorySlice.actions;
export default exerciseHistorySlice.reducer;
