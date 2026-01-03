import { motion } from "framer-motion";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const StatsCard = ({ title, value, change, icon: Icon, color = "blue" }) => {
    const colors = {
        blue: "bg-blue-50 text-blue-600",
        green: "bg-green-50 text-green-600",
        purple: "bg-purple-50 text-purple-600",
        orange: "bg-orange-50 text-orange-600",
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="card hover:shadow-xl transition-shadow duration-300"
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <h3 className="text-3xl font-bold mt-2">{value}</h3>
                    <div className="flex items-center gap-2 mt-3">
                        {change >= 0 ? (
                            <FiTrendingUp className="text-green-500" />
                        ) : (
                            <FiTrendingDown className="text-red-500" />
                        )}
                        <span
                            className={`text-sm font-medium ${change >= 0 ? "text-green-600" : "text-red-600"}`}
                        >
                            {change >= 0 ? "+" : ""}
                            {change}%
                        </span>
                        <span className="text-sm text-gray-500">
                            from last month
                        </span>
                    </div>
                </div>
                <div className={`p-3 rounded-lg ${colors[color]}`}>
                    <Icon size={24} />
                </div>
            </div>
        </motion.div>
    );
};

export default StatsCard;
