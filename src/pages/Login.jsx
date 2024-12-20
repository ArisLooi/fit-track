import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginStart, loginSuccess, loginFailure } from '../features/auth/authSlice';

// Login component for user authentication
export default function Login() {
    // Initialize form data state with email and password
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginStart());

        try {
            // Replace with your actual API call
            const response = { user: { email: formData.email }, token: 'demo-token' };
            localStorage.setItem('email', response.user.email); // Save email to local storage
            localStorage.setItem('token', response.token);      // Save token to local storage
            dispatch(loginSuccess(response));
            navigate('/');
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8 bg-slate-900 p-8 rounded-lg">
                <div>
                    <h2 className="text-center text-3xl font-bold tracking-tight">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4 rounded-md shadow-sm">
                        <div>
                            <input
                                type="email"
                                required
                                className="w-full rounded border border-gray-700 bg-slate-800 px-3 py-2"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                required
                                className="w-full rounded border border-gray-700 bg-slate-800 px-3 py-2"
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
                            Sign in
                        </button>
                    </div>
                </form>
                <p className="text-center">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-400 hover:text-blue-500">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}
