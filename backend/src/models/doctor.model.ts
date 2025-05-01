import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true },
  rating: { type: Number, required: true },
  location: { type: String, required: true },
  availability: { type: String, required: true },
  consultationFee: { type: Number, required: true },
  languages: [{ type: String }],
  education: [{ type: String }],
  imageUrl: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Doctor', doctorSchema); 