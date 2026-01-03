import { motion } from "framer-motion";
import { FiBell, FiSearch, FiUser } from "react-icons/fi";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
    const { user } = useAuth();

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white shadow-sm border-b border-gray-200 px-6 py-4"
        >
            <div className="flex items-center justify-between">
                <div className="flex-1 max-w-xl">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary-500 
                         focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="relative p-2 rounded-full hover:bg-gray-100">
                        <FiBell size={20} />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    <div className="flex items-center gap-3">
                        <div
                            className="w-8 h-8 bg-primary-100 rounded-full flex items-center 
                          justify-center text-primary-700"
                        >
                            <FiUser size={18} />
                        </div>
                        <div>
                            <p className="font-medium">{user?.email}</p>
                            <p className="text-sm text-gray-500 capitalize">
                                {user?.role}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
