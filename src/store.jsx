import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/features/auth/authSlice';
import timerReducer from '../src/features/timer/timerSlice';
import exerciseHistoryReducer from '../src/features/exerciseHistory/exerciseHistorySlice';
import userReducer from '../src/features/user/userSlice';


export const store = configureStore({
    reducer: {
        auth: authReducer, // Reducer for authentication state

        timer: timerReducer, // Reducer for timer state
        exerciseHistory: exerciseHistoryReducer, // Reducer for exercise history state
        user: userReducer, // Reducer for user data state
    }
});

export default store;