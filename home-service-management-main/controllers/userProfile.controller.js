import UserProfile from "../models/UserProfile.js";
import { validateUserProfile, isValidId, errorResponse, successResponse } from '../utils/validation.js';

export const createUserProfile = async (req, res) => {
    try {
       const userId = req.user._id; // Assuming userId is available in req.user from authMiddleware
        //const { userId } = req.user; // Assuming userId is available in req.user from authMiddleware <- this is incorrect
        if (!userId || !isValidId(userId)) {
            return errorResponse(res, 401, 'Unauthorized - Invalid user ID');
        }

        const validation = validateUserProfile(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 400, validation.error);
        }

        const { fullName, address, contact, customerRating, reviewFrom } = req.body;

        // Check if profile already exists
        const existingProfile = await UserProfile.findOne({ userId });
        if (existingProfile) {
            return errorResponse(res, 400, 'User profile already exists');
        }

        const userProfile = await UserProfile.create({
            userId,
            fullName,
            address,
            contact,
            customerRating,
            reviewFrom
        });

        return successResponse(res, 201, 'User profile created successfully', { profile: userProfile });
    } catch (error) {
        return errorResponse(res, 500, 'Error creating user profile', error);
    }

}