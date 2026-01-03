import { errorResponse } from "../utils/apiResponse.js";

export const notFound = (req, res, next) => {
    return errorResponse(res, {
        statusCode: 404,
        message: `Route ${req.originalUrl} not found`,
    });
};
