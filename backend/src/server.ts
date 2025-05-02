import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import doctorRoutes from './routes/doctor.routes';

// Configuration
interface Config {
  port: number;
  mongodbUri: string;
}

const config: Config = {
  port: 5000,
  mongodbUri: 'mongodb://localhost:27017/doctor-app'
};

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(config.mongodbUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error: Error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/doctors', doctorRoutes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
}); 