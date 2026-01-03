import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";

export const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer "))
        throw new AppError("No token provided", 401);

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // { id, role }
        next();
    } catch {
        throw new AppError("Invalid token", 401);
    }
};
