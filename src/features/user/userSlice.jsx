import { createSlice } from '@reduxjs/toolkit';

// Helper function to get email from local storage or default to 'user@example.com'
const getEmailFromLocalStorage = () => {
    return localStorage.getItem('email') || 'user@example.com'; // Default email if not found in local storage
};

// Create a slice for managing user state
const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: getEmailFromLocalStorage(), // Initialize email from local storage
        password: '', // Initial empty password
    },
    reducers: {
        // Reducer to update email
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        // Reducer to update password
        updatePassword: (state, action) => {
            state.password = action.payload;
        },
        // Reducer to delete profile (clear email and password)
        deleteProfile: (state) => {
            state.email = '';
            state.password = '';
        },
    },
});

// Export actions for use in components
export const { updateEmail, updatePassword, deleteProfile } = userSlice.actions;
// Export the reducer for store configuration
export default userSlice.reducer;

