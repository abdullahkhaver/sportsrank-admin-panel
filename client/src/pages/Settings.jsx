import { useState } from "react";
import { motion } from "framer-motion";
import { FiSave, FiBell, FiLock, FiGlobe, FiMoon, FiSun } from "react-icons/fi";

const Settings = () => {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        pushNotifications: false,
        twoFactorAuth: true,
        language: "en",
        theme: "light",
    });

    const handleChange = (key, value) => {
        setSettings({ ...settings, [key]: value });
    };

    return (
        <div className="space-y-6">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
                <p className="text-gray-600 mt-2">
                    Manage your account preferences
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="card"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <FiBell className="text-blue-600" size={20} />
                            </div>
                            <h3 className="text-lg font-semibold">
                                Notifications
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    label: "Email Notifications",
                                    key: "emailNotifications",
                                },
                                {
                                    label: "Push Notifications",
                                    key: "pushNotifications",
                                },
                            ].map((item) => (
                                <div
                                    key={item.key}
                                    className="flex items-center justify-between"
                                >
                                    <span className="text-gray-700">
                                        {item.label}
                                    </span>
                                    <button
                                        onClick={() =>
                                            handleChange(
                                                item.key,
                                                !settings[item.key],
                                            )
                                        }
                                        className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                                            settings[item.key]
                                                ? "bg-primary-600"
                                                : "bg-gray-300"
                                        }`}
                                    >
                                        <div
                                            className={`w-5 h-5 bg-white rounded-full transform transition-transform duration-200 ${
                                                settings[item.key]
                                                    ? "translate-x-7"
                                                    : "translate-x-1"
                                            }`}
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="card"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <FiLock className="text-green-600" size={20} />
                            </div>
                            <h3 className="text-lg font-semibold">Security</h3>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">
                                        Two-Factor Authentication
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Add an extra layer of security
                                    </p>
                                </div>
                                <button
                                    onClick={() =>
                                        handleChange(
                                            "twoFactorAuth",
                                            !settings.twoFactorAuth,
                                        )
                                    }
                                    className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                                        settings.twoFactorAuth
                                            ? "bg-green-600"
                                            : "bg-gray-300"
                                    }`}
                                >
                                    <div
                                        className={`w-5 h-5 bg-white rounded-full transform transition-transform duration-200 ${
                                            settings.twoFactorAuth
                                                ? "translate-x-7"
                                                : "translate-x-1"
                                        }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                >
                    <div className="card">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <FiGlobe
                                    className="text-purple-600"
                                    size={20}
                                />
                            </div>
                            <h3 className="text-lg font-semibold">
                                Language & Region
                            </h3>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Language
                            </label>
                            <select
                                value={settings.language}
                                onChange={(e) =>
                                    handleChange("language", e.target.value)
                                }
                                className="input-field"
                            >
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                            </select>
                        </div>
                    </div>

                    <div className="card">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-orange-100 rounded-lg">
                                {settings.theme === "light" ? (
                                    <FiSun
                                        className="text-orange-600"
                                        size={20}
                                    />
                                ) : (
                                    <FiMoon
                                        className="text-orange-600"
                                        size={20}
                                    />
                                )}
                            </div>
                            <h3 className="text-lg font-semibold">Theme</h3>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => handleChange("theme", "light")}
                                className={`flex-1 p-4 rounded-lg border-2 transition-all duration-200 ${
                                    settings.theme === "light"
                                        ? "border-primary-500 bg-primary-50"
                                        : "border-gray-200 hover:border-gray-300"
                                }`}
                            >
                                <FiSun className="mx-auto mb-2" size={24} />
                                <p className="text-center font-medium">Light</p>
                            </button>

                            <button
                                onClick={() => handleChange("theme", "dark")}
                                className={`flex-1 p-4 rounded-lg border-2 transition-all duration-200 ${
                                    settings.theme === "dark"
                                        ? "border-primary-500 bg-primary-50"
                                        : "border-gray-200 hover:border-gray-300"
                                }`}
                            >
                                <FiMoon className="mx-auto mb-2" size={24} />
                                <p className="text-center font-medium">Dark</p>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-end"
            >
                <button className="btn-primary flex items-center gap-2 px-6 py-3">
                    <FiSave size={20} />
                    Save Changes
                </button>
            </motion.div>
        </div>
    );
};

export default Settings;
