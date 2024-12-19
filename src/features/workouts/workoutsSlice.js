import { createSlice } from '@reduxjs/toolkit';

const workoutsSlice = createSlice({
    name: 'workouts',
    initialState: {
        workouts: [],
        currentWorkout: null,
        isLoading: false,
        error: null
    },
    reducers: {
        setCurrentWorkout: (state, action) => {
            state.currentWorkout = action.payload;
        },
        addWorkout: (state, action) => {
            state.workouts.push(action.payload);
        },
        updateWorkout: (state, action) => {
            const index = state.workouts.findIndex(w => w.id === action.payload.id);
            if (index !== -1) {
                state.workouts[index] = action.payload;
            }
        },
        deleteWorkout: (state, action) => {
            state.workouts = state.workouts.filter(w => w.id !== action.payload);
        },
        setWorkouts: (state, action) => {
            state.workouts = action.payload;
        }
    }
});

export const { setCurrentWorkout, addWorkout, updateWorkout, deleteWorkout, setWorkouts } = workoutsSlice.actions;
export default workoutsSlice.reducer;