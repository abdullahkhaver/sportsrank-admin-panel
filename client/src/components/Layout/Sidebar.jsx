import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FiHome,
    FiUsers,
    FiSettings,
    FiBarChart2,
    FiLogOut,
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { logout } = useAuth();

    const menuItems = [
        { path: "/dashboard", icon: FiHome, label: "Dashboard" },
        { path: "/users", icon: FiUsers, label: "Users" },
        { path: "/analytics", icon: FiBarChart2, label: "Analytics" },
        { path: "/settings", icon: FiSettings, label: "Settings" },
    ];

    return (
        <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`bg-white shadow-xl h-screen fixed left-0 top-0 z-40 
                  border-r border-gray-200 transition-all duration-300 
                  ${collapsed ? "w-20" : "w-64"}`}
        >
            <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                    {!collapsed && (
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-2xl font-bold text-primary-700"
                        >
                            AdminPanel
                        </motion.h1>
                    )}
                    {/* <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
          </button> */}
                </div>

                <nav className="space-y-2">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={item.path}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${
                      isActive
                          ? "bg-primary-50 text-primary-700 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                  }`
                                }
                            >
                                <item.icon size={20} />
                                {!collapsed && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </NavLink>
                        </motion.div>
                    ))}
                </nav>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-6 left-0 right-0 px-6"
                >
                    <button
                        onClick={logout}
                        className="cursor-pointer flex items-center gap-3 w-full px-4 py-3 text-red-600 
                       hover:bg-red-50 rounded-lg transition-colors"
                    >
                        <FiLogOut size={20} />
                        {!collapsed && <span>Logout</span>}
                    </button>
                </motion.div>
            </div>
        </motion.aside>
    );
};

export default Sidebar;
