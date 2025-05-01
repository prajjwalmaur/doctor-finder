import mongoose from 'mongoose';
import Doctor from '../models/doctor.model';
import dotenv from 'dotenv';

dotenv.config();

const doctors = [
  {
    name: "Dr. Sarah Yadav",
    specialization: "General Physician",
    experience: 12,
    rating: 4.8,
    location: "Delhi",
    availability: "Mon-Fri, 9AM-5PM",
    consultationFee: 1500,
    languages: ["English", "Hindi"],
    education: ["MD, Harvard Medical School", "Board Certified in Internal Medicine"],
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Experienced general physician with expertise in preventive care and chronic disease management."
  },
  {
    name: "Dr. Miran Chaudhary",
    specialization: "Cardiologist",
    experience: 15,
    rating: 3.9,
    location: "Mumbai",
    availability: "Mon-Sat, 8AM-6PM",
    consultationFee: 1800,
    languages: ["English", "Hindi"],
    education: ["MD, Stanford University", "Fellowship in Internal Medicine"],
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Dedicated physician with a focus on patient-centered care and evidence-based medicine."
  },
  {
    name: "Dr. Anjali Sharma",
    specialization: "Dermatologist",
    experience: 8,
    rating: 2.7,
    location: "Hyderabad",
    availability: "Mon-Fri, 10AM-7PM",
    consultationFee: 1200,
    languages: ["English", "Hindi"],
    education: ["MD, University of Chicago", "Residency in Internal Medicine"],
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Compassionate physician specializing in preventive care and wellness."
  },
  {
    name: "Dr. Ankit Singh",
    specialization: "Pediatrician",
    experience: 20,
    rating: 4.9,
    location: "Chennai",
    availability: "Mon-Fri, 8AM-4PM",
    consultationFee: 2000,
    languages: ["English"],
    education: ["MD, Johns Hopkins University", "Board Certified in Internal Medicine"],
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Senior physician with extensive experience in managing complex medical conditions."
  },
  {
    name: "Dr. Priya Patel",
    specialization: "General Physician",
    experience: 10,
    rating: 4.6,
    location: "Kolkata",
    availability: "Mon-Sat, 9AM-5PM",
    consultationFee: 1400,
    languages: ["English", "Hindi"],
    education: ["MD, University of Texas", "Residency in Internal Medicine"],
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Comprehensive care provider with expertise in preventive medicine and health promotion."
  },
  {
    name: "Dr. Ravi Kumar",
    specialization: "General Physician",
    experience: 10,
    rating: 3.6,
    location: "Delhi",
    availability: "Mon-Fri, 8AM-4PM",
    consultationFee: 1400,
    languages: ["English", "Hindi"],
    education: ["MD, University of Texas", "Residency in Internal Medicine"],
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Comprehensive care provider with expertise in preventive medicine and health promotion." 
  },

];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/doctor-app');
    console.log('Connected to MongoDB');

    // Clear existing doctors
    await Doctor.deleteMany({});
    console.log('Cleared existing doctors');

    // Insert new doctors
    await Doctor.insertMany(doctors);
    console.log('Successfully seeded doctors');

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 