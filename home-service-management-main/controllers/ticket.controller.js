import ServiceProvider from "../models/ServiceProvider.js";
import Ticket from "../models/Ticket.js";
import UserHistory from "../models/UserHistory.js";
import { isValidId, errorResponse, successResponse } from '../utils/validation.js';


export const ticket = async(req, res) => {
    try {
        const {serviceName, serviceSlot, serviceStatus, companyName} = req.body;
         const userId = req.user._id; 

        if(!userId || !isValidId(userId)) {
            return errorResponse(res, 401, 'Unauthorized - Invalid user ID');
        }

        // Validate required fields
        if (!serviceName || !serviceSlot || !serviceStatus || !companyName) {
            return errorResponse(res, 400, 'All fields are required: serviceName, serviceSlot, serviceStatus, companyName');
        }

        // Validate service status
        const validStatuses = ['active', 'completed', 'cancelled'];
        if (!validStatuses.includes(serviceStatus)) {
            return errorResponse(res, 400, 'Invalid service status. Must be one of: active, completed, cancelled');
        }

        // Find the service provider
        const provider = await ServiceProvider.findOne({ companyName });
        if (!provider) {
            return errorResponse(res, 404, 'Service provider not found');
        }

        const providerId = provider._id;

        // Check for existing ticket
        const existingTicket = await Ticket.findOne({userId, serviceProviderId: providerId})
        if (existingTicket) {
            return errorResponse(res, 400, 'You already have a ticket with this service provider');
        }

        // Create new ticket
        const newTicket = await Ticket.create({
            userId,
            serviceProviderId: providerId,
            serviceName,
            serviceSlot,
            serviceStatus,
            companyName,
            createAt: new Date(),
            closeAt: null
        });

        // Create history track
        const historyTrack = await UserHistory.create({
            ticketId: newTicket._id,
            userId,
            serviceProviderId: providerId,
            serviceName: [serviceName],
            ticketStatus: [serviceStatus],
            ticketCreatedAt: new Date()
        });

        return successResponse(res, 201, 'Ticket created successfully', {
            ticket: newTicket,
            history: historyTrack
        });
    } catch (error) {
        return errorResponse(res, 500, 'Error creating ticket', error);
    }
}


