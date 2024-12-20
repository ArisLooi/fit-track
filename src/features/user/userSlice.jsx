import { createSlice } from '@reduxjs/toolkit';

const getEmailFromLocalStorage = () => {
    return localStorage.getItem('email') || 'user@example.com'; // Default email if not found in local storage
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: getEmailFromLocalStorage(),
        password: '',
    },
    reducers: {
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        updatePassword: (state, action) => {
            state.password = action.payload;
        },
        deleteProfile: (state) => {
            state.email = '';
            state.password = '';
        },
    },
});

export const { updateEmail, updatePassword, deleteProfile } = userSlice.actions;
export default userSlice.reducer;

