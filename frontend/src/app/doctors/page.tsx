'use client';

import { useEffect, useState } from 'react';
import { Doctor } from '@/types/doctor';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('https://doctor-finder-api.vercel.app/api/doctors/list?sortBy=rating&sortOrder=desc&page=1&limit=10', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch doctors');
        }

        const data = await response.json();
        setDoctors(data.doctors || []);
      } catch (err) {
        console.error('Error fetching doctors:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching doctors');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-4">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
            <p className="text-gray-600 mb-2">{doctor.specialty}</p>
            <p className="text-gray-600 mb-2">Rating: {doctor.rating}</p>
            <p className="text-gray-600">{doctor.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 