import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/features/auth/authSlice';
import workoutsReducer from '../src/features/workouts/workoutsSlice';
import timerReducer from '../src/features/timer/timerSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        workouts: workoutsReducer,
        timer: timerReducer
    }
});

export default store;