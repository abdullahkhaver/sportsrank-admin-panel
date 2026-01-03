import { motion } from "framer-motion";
import { FiUsers, FiActivity, FiDollarSign, FiPackage } from "react-icons/fi";
import StatsCard from "../components/Dashboard/StatsCard";

const Dashboard = () => {
    const stats = [
        {
            title: "Total Users",
            value: "2,847",
            change: 12.5,
            icon: FiUsers,
            color: "blue",
        },
        {
            title: "Active Sessions",
            value: "1,234",
            change: 8.2,
            icon: FiActivity,
            color: "green",
        },
        {
            title: "Revenue",
            value: "$24,580",
            change: 15.3,
            icon: FiDollarSign,
            color: "purple",
        },
        {
            title: "Products",
            value: "856",
            change: -2.1,
            icon: FiPackage,
            color: "orange",
        },
    ];

    return (
        <div className="space-y-6">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <h1 className="text-3xl font-bold text-gray-800">
                    Dashboard Overview
                </h1>
                <p className="text-gray-600 mt-2">
                    Welcome back! Here's what's happening with your platform.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.title}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <StatsCard {...stat} />
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="card"
                >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Recent Activity
                    </h3>
                    <div className="space-y-4">
                        {[
                            {
                                user: "John Doe",
                                action: "created new account",
                                time: "2 min ago",
                            },
                            {
                                user: "Jane Smith",
                                action: "updated profile",
                                time: "15 min ago",
                            },
                            {
                                user: "Bob Johnson",
                                action: "made a purchase",
                                time: "1 hour ago",
                            },
                            {
                                user: "Alice Brown",
                                action: "submitted ticket",
                                time: "2 hours ago",
                            },
                        ].map((activity, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                        <FiUsers
                                            className="text-primary-600"
                                            size={16}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium">
                                            {activity.user}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {activity.action}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-500">
                                    {activity.time}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="card"
                >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Quick Actions
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            {
                                label: "Add User",
                                icon: "👤",
                                color: "bg-blue-100 text-blue-600",
                            },
                            {
                                label: "Settings",
                                icon: "⚙️",
                                color: "bg-purple-100 text-purple-600",
                            },
                            {
                                label: "Analytics",
                                icon: "📊",
                                color: "bg-green-100 text-green-600",
                            },
                            {
                                label: "Reports",
                                icon: "📈",
                                color: "bg-orange-100 text-orange-600",
                            },
                        ].map((action, index) => (
                            <button
                                key={index}
                                className="p-4 rounded-lg border border-gray-200 hover:border-primary-300 
                         hover:bg-primary-50 transition-all duration-200 text-left"
                            >
                                <div
                                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-3 ${action.color}`}
                                >
                                    {action.icon}
                                </div>
                                <span className="font-medium">
                                    {action.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
