'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import DoctorList from '@/components/DoctorList';
import Filters from '@/components/Filters';

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  location: string;
  availability: string;
  consultationFee: number;
  imageUrl?: string;
}

export default function Home() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filters, setFilters] = useState({
    specialization: '',
    location: '',
    minRating: '',
    maxFee: '',
    sortBy: 'rating',
    sortOrder: 'desc',
    page: 1,
    limit: 10
  });
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchDoctors();
  }, [filters]);

  const fetchDoctors = async () => {
    try {
      const queryParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) queryParams.append(key, value.toString());
      });

      const response = await fetch(`https://doctor-finder-api.vercel.app/api/doctors/list?${queryParams}`);
      const data = await response.json();
      setDoctors(data.doctors);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters, page: 1 }));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Filters filters={filters} onFilterChange={handleFilterChange} />
          </div>
          <div className="md:col-span-3">
            <DoctorList 
              doctors={doctors} 
              currentPage={filters.page}
              totalPages={totalPages}
              onPageChange={(page) => handleFilterChange({ page })}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
