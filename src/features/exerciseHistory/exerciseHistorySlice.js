import { createSlice } from '@reduxjs/toolkit';

// Create a slice for managing exercise history
const exerciseHistorySlice = createSlice({
    name: 'exerciseHistory',
    initialState: {
        history: [],
    },
    reducers: {
        // Reducer to record a new exercise in the history
        recordExercise: (state, action) => {
            state.history.push(action.payload);
        },
        // Reducer to clear the exercise history
        clearHistory: (state) => {
            state.history = [];
        },
    },
});

// Export actions for use in components
export const { recordExercise, clearHistory } = exerciseHistorySlice.actions;
// Export the reducer for store configuration
export default exerciseHistorySlice.reducer;
