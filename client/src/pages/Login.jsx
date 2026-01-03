import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";
import { useAuth } from "../hooks/useAuth";
import { FiShield } from "react-icons/fi";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (email, password) => {
        setLoading(true);
        setError("");

        const result = await login(email, password);

        if (result.success) {
            const redirectTo =
                localStorage.getItem("redirectAfterLogin") || "/dashboard";
            localStorage.removeItem("redirectAfterLogin");
            navigate(redirectTo);
        } else {
            setError(result.message);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center p-4">
            <div className="absolute top-6 left-6 flex items-center gap-2">
                <FiShield className="text-primary-600" size={28} />
                <span className="text-xl font-bold text-primary-700">
                    AdminPanel
                </span>
            </div>

            <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:block"
                >
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold text-gray-800">
                            Modern Admin Dashboard
                        </h1>
                        <p className="text-lg text-gray-600">
                            Manage your application with our intuitive admin
                            panel. Real-time analytics, user management, and
                            more.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Real-time Analytics",
                                "User Management",
                                "Secure Authentication",
                                "Responsive Design",
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span className="text-gray-700">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <LoginForm onSubmit={handleLogin} loading={loading} />
                    {error && (
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm"
                        >
                            {error}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
