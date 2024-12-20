import { createSlice } from '@reduxjs/toolkit';

// Create a slice for managing workouts state
const workoutsSlice = createSlice({
    name: 'workouts',
    initialState: {
        workouts: [], // Array to store workout objects
        currentWorkout: null, // Currently selected or active workout
        isLoading: false, // Loading state for async operations
        error: null // Error state for error handling
    },
    reducers: {
        // Reducer to set the current workout
        setCurrentWorkout: (state, action) => {
            state.currentWorkout = action.payload;
        },
        // Reducer to add a new workout to the list
        addWorkout: (state, action) => {
            state.workouts.push(action.payload);
        },
        // Reducer to update an existing workout in the list
        updateWorkout: (state, action) => {
            const index = state.workouts.findIndex(w => w.id === action.payload.id);
            if (index !== -1) {
                state.workouts[index] = action.payload;
            }
        },
        // Reducer to delete a workout from the list
        deleteWorkout: (state, action) => {
            state.workouts = state.workouts.filter(w => w.id !== action.payload);
        },
        // Reducer to set the entire workouts array
        setWorkouts: (state, action) => {
            state.workouts = action.payload;
        }
    }
});

// Export actions for use in components
export const { setCurrentWorkout, addWorkout, updateWorkout, deleteWorkout, setWorkouts } = workoutsSlice.actions;
// Export the reducer for store configuration
export default workoutsSlice.reducer;