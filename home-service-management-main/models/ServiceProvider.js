import mongoose from 'mongoose'

const serviceProviderSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true
    },
    serviceOption: {
      type: [String],
      required: true,
      enum: [
        'Cleaning',
        'Washing',
        'Plumbing',
        'Electricity',
        'Painting',
        'Carpentry',
        'Gardening',
        'Other'
      ]
    },
    serviceDescription: {
      type: String,
      required: true
    },
    serviceSlots: {
      type: [String],
      required: true,
      enum: ['Morning', 'Afternoon', 'Evening', 'Night']
    },
    serviceSkills: {
      type: String,
      required: true
    },
    serviceLocation: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
)

const ServiceProvider = mongoose.model('ServiceProvider', serviceProviderSchema)

export default ServiceProvider
