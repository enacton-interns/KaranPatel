import ServiceProvider from "../models/ServiceProvider.js";
import { validateServiceProvider, isValidId, errorResponse, successResponse } from '../utils/validation.js';

// POST /api/service-providers/create
// Create a new service provider
export const createProvider = async(req, res) => {
    try {
        const {
            companyName,
            serviceOption,
            serviceDescription,
            serviceSlots,
            serviceSkills,
            serviceLocation
        } = req.body;

        const validation = validateServiceProvider(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 400, validation.error);
        }

        const existingServiceProvider = await ServiceProvider.findOne({ companyName });
        if (existingServiceProvider) {
            return errorResponse(res, 400, 'Service provider already exists');
        }

        const newServiceProvider = await ServiceProvider.create({
            companyName,
            serviceOption,
            serviceDescription,
            serviceSlots,
            serviceSkills,
            serviceLocation
        });
        
        return successResponse(res, 201, 'Service provider created successfully', { provider: newServiceProvider });
    } catch (error) {
        return errorResponse(res, 500, 'Error creating service provider', error);
    }
};

// get all service provider
export const getAllProvider = async (req, res) => {
    try {
        const providers = await ServiceProvider.find();
        return successResponse(res, 200, 'Service providers fetched successfully', { providers });
    } catch (error) {
        return errorResponse(res, 500, 'Error fetching service providers', error);
    }
};


//get single service provider by id
export const getProviderById = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!isValidId(id)) {
            return errorResponse(res, 400, 'Invalid provider ID');
        }

        const provider = await ServiceProvider.findById(id);
        if (!provider) {
            return errorResponse(res, 404, 'Service provider not found');
        }

        return successResponse(res, 200, 'Service provider fetched successfully', { provider });
    } catch (error) {
        return errorResponse(res, 500, 'Error fetching service provider', error);
    }
}

//Update Provider details
export const updateProvider = async(req,res) => {
    try {
        const { id } = req.params;

        if (!isValidId(id)) {
            return errorResponse(res, 400, 'Invalid provider ID');
        }

        const validation = validateServiceProvider(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 400, validation.error);
        }

        const updated = await ServiceProvider.findByIdAndUpdate(id, req.body, { new: true });
        if(!updated) {
            return errorResponse(res, 404, 'Service provider not found');
        }

        return successResponse(res, 200, 'Service provider updated successfully', { provider: updated });
    } catch (error) {
        return errorResponse(res, 500, 'Error updating service provider', error);
    }
}

//Delete a service Provider

export const deleteProvider = async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidId(id)) {
            return errorResponse(res, 400, 'Invalid provider ID');
        }

        const deleteProvider = await ServiceProvider.findByIdAndDelete(id);
        if(!deleteProvider) {
            return errorResponse(res, 404, 'Service provider not found');
        }

        return successResponse(res, 200, 'Service provider deleted successfully');
    } catch (error) {
        return errorResponse(res, 500, 'Error deleting service provider', error);
    }
}