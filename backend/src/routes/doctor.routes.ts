import express from 'express';
import Doctor from '../models/doctor.model';

const router = express.Router();

// Add a new doctor
router.post('/add', async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// List doctors with filters and pagination
router.get('/list', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      specialization,
      location,
      minRating,
      maxFee,
      sortBy = 'rating',
      sortOrder = 'desc'
    } = req.query;

    const query: any = {};
    
    if (specialization) query.specialization = specialization;
    if (location) query.location = location;
    if (minRating) query.rating = { $gte: Number(minRating) };
    if (maxFee) query.consultationFee = { $lte: Number(maxFee) };

    const sortOptions: any = {};
    sortOptions[sortBy as string] = sortOrder === 'desc' ? -1 : 1;

    const doctors = await Doctor.find(query)
      .sort(sortOptions)
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    const total = await Doctor.countDocuments(query);

    res.json({
      doctors,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / Number(limit))
    });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router; 