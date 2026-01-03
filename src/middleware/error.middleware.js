import { errorResponse } from "../utils/apiResponse.js";

export const errorHandler = (err, req, res, next) => {
    console.error(err);

    return errorResponse(res, {
        statusCode: err.statusCode || 500,
        message: err.isOperational ? err.message : "Internal Server Error",
    });
};
