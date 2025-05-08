export interface Doctor {
  _id?: string;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  location: string;
  availability: string;
  consultationFee: number;
  imageUrl?: string;
  languages?: string[];
  education?: string[];
  description?: string;
  // Add other doctor properties as needed
} 