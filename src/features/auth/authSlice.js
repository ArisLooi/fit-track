import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the authentication slice
const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    error: null
};

// Create the authentication slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Action to handle the start of the login process
        loginStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        // Action to handle successful login
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        // Action to handle login failure
        loginFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        // Action to handle logout
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        }
    }
});

// Export actions for use in components
export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
// Export the reducer for store configuration
export default authSlice.reducer;