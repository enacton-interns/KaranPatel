import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import User from '../models/User.js';
import Session from '../models/Session.js';
import { isValidEmail, isValidPassword, errorResponse, successResponse } from '../utils/validation.js';


// POST  /api/users/register

export const registerUser = async(req,res) => {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return errorResponse(res, 400, 'Email and password are required');
        }

        if (!isValidEmail(email)) {
            return errorResponse(res, 400, 'Invalid email format');
        }

        if (!isValidPassword(password)) {
            return errorResponse(res, 400, 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number');
        }
    
        const existingUser = await User.findOne({email})
        if(existingUser) {
            return errorResponse(res, 400, 'Email already registered');
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const newUser = await User.create({
            email,
            password: hashedPassword
        });
    
        return successResponse(res, 201, 'User registered successfully', { userId: newUser._id });
    } catch (error) {
        return errorResponse(res, 500, 'Registration failed', error);
    }
};



// POST  /api/users/login

export const loginUser = async (req,res) => {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return errorResponse(res, 400, 'Email and password are required');
        }

        if (!isValidEmail(email)) {
            return errorResponse(res, 400, 'Invalid email format');
        }
  
        const user = await User.findOne({email});
        if(!user) {
            return errorResponse(res, 404, 'User not found');
        }
      
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return errorResponse(res, 401, 'Invalid credentials');
        }
  
        const sessionId = uuidv4();
   
        await Session.create({
            sessionId,
            userId: user._id
        });
  
        res.cookie('sessionId', sessionId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 60 * 60 * 1000 // 1 hour
        });
  
        return successResponse(res, 200, 'Login successful');
    } catch (error) {
        return errorResponse(res, 500, 'Login failed', error);
    }
}


// POST /api/users/logout

export const logoutUser = async (req,res) => {
    try {
        const sessionId = req.cookies.sessionId;
        if (!sessionId) {
            return errorResponse(res, 401, 'Not authenticated');
        }

        await Session.deleteOne({ sessionId });
        res.clearCookie('sessionId');

        return successResponse(res, 200, 'Logged out successfully');
    } catch (error) {
        return errorResponse(res, 500, 'Logout failed', error);
    }
}



// GET /api/users/me

export const getCurrentUser = async(req,res) => {
    try {
        const sessionId = req.cookies.sessionId;
        if(!sessionId) {
            return errorResponse(res, 401, 'Not authenticated');
        }

        const session = await Session.findOne({sessionId});
        if(!session) {
            return errorResponse(res, 401, 'Session not found');
        }

        const user = await User.findById(session.userId);
        if(!user) {
            return errorResponse(res, 404, 'User not found');
        }

        return successResponse(res, 200, 'User fetched successfully', {
            email: user.email,
            userId: user._id
        });
    } catch (error) {
        return errorResponse(res, 500, 'Failed to fetch user', error);
    }
}