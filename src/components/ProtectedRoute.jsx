import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// ProtectedRoute component to guard routes that require authentication
export const ProtectedRoute = ({ children }) => {
    // Get isAuthenticated state from the Redux store
    const { isAuthenticated } = useSelector((state) => state.auth);

    // If not authenticated, redirect to login page
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // If authenticated, render the child components
    return children;
};
