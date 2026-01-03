import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/Auth/RegisterForm";
import { useAuth } from "../hooks/useAuth";
import { FiShield } from "react-icons/fi";

const Register = () => {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = async (email, password, role) => {
        setLoading(true);
        setError("");

        const result = await register(email, password, role);

        if (result.success) {
            navigate("/dashboard");
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
                            Join Our Platform
                        </h1>
                        <p className="text-lg text-gray-600">
                            Create an admin account to manage your application
                            with powerful tools.
                        </p>
                        <div className="space-y-4">
                            {[
                                "User Management",
                                "Analytics Dashboard",
                                "Role-based Access",
                                "Secure Infrastructure",
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
                    <RegisterForm onSubmit={handleRegister} loading={loading} />
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

export default Register;
