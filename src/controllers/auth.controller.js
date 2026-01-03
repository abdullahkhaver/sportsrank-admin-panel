import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import AppError from "../utils/AppError.js";
import { successResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const signToken = (user) =>
    jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });

export const register = asyncHandler(async (req, res) => {
    const { email, password, role } = req.body;

    if (!email || !password) {
        throw new AppError("Email and password are required", 400);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new AppError("User already exists", 409);
    }

    const user = await User.create({
        email,
        password,
        role,
    });

    const token = signToken(user);

    return successResponse(res, {
        statusCode: 201,
        message: "User registered successfully",
        data: {
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
            },
            token,
        },
    });
});

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new AppError("Email and password are required", 400);
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        throw new AppError("Invalid email or password", 401);
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        throw new AppError("Invalid email or password", 401);
    }

    const token = signToken(user);
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
    });
    return successResponse(res, {
        message: "Login successful",
        data: {
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
            },
            token,
        },
    });
});

export const logout = asyncHandler(async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        expires: new Date(0),
    });

    return successResponse(res, {
        message: "Logout successful",
        data: null,
    });
});
