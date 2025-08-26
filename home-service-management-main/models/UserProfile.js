import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    customerRating: {
        type: Number,
        min: 1,
        max: 5,
    },
    reviewFrom: {
        type: String,
    }
}, { timestamps: true });

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

export default UserProfile;
