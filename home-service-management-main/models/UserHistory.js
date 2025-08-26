import mongoose from 'mongoose';

const userHistorySchema = new mongoose.Schema({
    ticketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket',
        required: true,
    },
    serviceProviderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceProvider',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    serviceName: {
        type: [String],
        ref: 'Ticket',
        required: true,
    },
    
    ticketStatus: {
        type: [String],
       required: true,
    },
    ticketCreatedAt: {
        type: Date,
        default: Date.now,
    },
});

const UserHistory = mongoose.model('UserHistory', userHistorySchema);

export default UserHistory;
