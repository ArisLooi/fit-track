import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginSuccess } from '../features/auth/authSlice';

// Register component for user registration
export default function Register() {
    // Initialize form data state with email, password, and confirmPassword
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            // Here you would typically make an API call to your backend
            // For demo purposes, we'll simulate a successful registration
            const response = { user: { email: formData.email }, token: 'demo-token' };
            localStorage.setItem('token', response.token);
            dispatch(loginSuccess(response));
            navigate('/');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8 bg-slate-900 p-8 rounded-lg">
                <div>
                    <h2 className="text-center text-3xl font-bold tracking-tight">
                        Create your account
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
                        <div>
                            <input
                                type="password"
                                required
                                className="w-full rounded border border-gray-700 bg-slate-800 px-3 py-2"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-center">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-400 hover:text-blue-500">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}