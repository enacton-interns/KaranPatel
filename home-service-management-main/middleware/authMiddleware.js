import Session from "../models/Session.js";
import User from "../models/User.js";

import { errorResponse } from '../utils/validation.js';

export const authMiddleware = async (req, res, next) => {
    try {
        const sessionId = req.cookies.sessionId;
        if (!sessionId) {
            return errorResponse(res, 401, 'No session found. Please login.');
        }

        const session = await Session.findOne({ sessionId });
        if (!session) {
            return errorResponse(res, 401, 'Invalid or expired session. Please login again.');
        }

        const user = await User.findById(session.userId);
        if (!user) {
            return errorResponse(res, 401, 'User not found. Please login again.');
        }

        // Attach the user object to the request
        req.user = user;
        next();
    } catch (error) {
        return errorResponse(res, 500, 'Authentication check failed', error);
    }

}
