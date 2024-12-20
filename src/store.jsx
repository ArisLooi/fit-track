import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/features/auth/authSlice';
import workoutsReducer from '../src/features/workouts/workoutsSlice';
import timerReducer from '../src/features/timer/timerSlice';
import exerciseHistoryReducer from '../src/features/exerciseHistory/exerciseHistorySlice';
import userReducer from '../src/features/user/userSlice';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        workouts: workoutsReducer,
        timer: timerReducer,
        exerciseHistory: exerciseHistoryReducer,
        user: userReducer,
    }
});

export default store;