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
  port: process.env.PORT ? parseInt(process.env.PORT) : 5000,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/doctor-app'
};

const app = express();

// Middleware
app.use(cors({
  origin: 'https://doctor-finder-frontend.vercel.app',
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(config.mongodbUri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Routes
app.use('/api/doctors', doctorRoutes);

// Health check endpoint
app.get('/api/health', (req: express.Request, res: express.Response) => {
  res.status(200).json({ status: 'ok' });
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server only if not in Vercel environment
if (process.env.NODE_ENV !== 'production') {
  connectDB().then(() => {
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  });
}

// Export for Vercel
export default app;
