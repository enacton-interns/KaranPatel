import { isValidObjectId } from 'mongoose';

// Email validation
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Password validation (minimum 8 characters, at least one uppercase, one lowercase, one number)
export const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\S]{8,}$/;
    return passwordRegex.test(password);
};

// MongoDB ObjectId validation
export const isValidId = (id) => {
    return isValidObjectId(id);
};

// Required fields validation
export const validateRequiredFields = (obj, requiredFields) => {
    const missingFields = [];
    for (const field of requiredFields) {
        if (!obj[field]) {
            missingFields.push(field);
        }
    }
    return missingFields;
};

// Service provider validation
export const validateServiceProvider = (data) => {
    const requiredFields = [
        'companyName',
        'serviceOption',
        'serviceDescription',
        'serviceSlots',
        'serviceSkills',
        'serviceLocation'
    ];
    
    const missingFields = validateRequiredFields(data, requiredFields);
    if (missingFields.length > 0) {
        return {
            isValid: false,
            error: `Missing required fields: ${missingFields.join(', ')}`
        };
    }

    return { isValid: true };
};

// User profile validation
export const validateUserProfile = (data) => {
    const requiredFields = ['fullName', 'contact', 'address'];
    
    const missingFields = validateRequiredFields(data, requiredFields);
    if (missingFields.length > 0) {
        return {
            isValid: false,
            error: `Missing required fields: ${missingFields.join(', ')}`
        };
    }

    return { isValid: true };
};

// Error response helper
export const errorResponse = (res, statusCode, message, error = null) => {
    return res.status(statusCode).json({
        success: false,
        message,
        ...(error && { error: error.message || error })
    });
};

// Success response helper
export const successResponse = (res, statusCode, message, data = null) => {
    return res.status(statusCode).json({
        success: true,
        message,
        ...(data && { data })
    });
};