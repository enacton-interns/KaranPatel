import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    serviceProviderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceProvider',
        required: true,
    },
    serviceName: {
        type: String,
        required: true,
    },
    serviceSlot: {
        type: String,
        required: true,
    },
    serviceStatus: {
        type: String,
        enum: ['active', 'completed', 'cancelled'],
        default: 'active',
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    closeAt: {
        type: Date,
    }
}, { timestamps: true });

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
        