'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import DoctorList from '@/components/DoctorList';
import Filters from '@/components/Filters';
import { Doctor } from '@/types/doctor';

const fallbackDoctors: Doctor[] = [
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
  }
];

export default function Home() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
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
  }, [filters.page, filters.limit]);

  useEffect(() => {
    applyFilters();
  }, [doctors, filters]);

  const applyFilters = () => {
    let result = [...doctors];

    // Apply specialization filter
    if (filters.specialization) {
      result = result.filter(doctor => 
        doctor.specialization.toLowerCase() === filters.specialization.toLowerCase()
      );
    }

    // Apply location filter
    if (filters.location) {
      result = result.filter(doctor => 
        doctor.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Apply minimum rating filter
    if (filters.minRating) {
      result = result.filter(doctor => 
        doctor.rating >= parseFloat(filters.minRating)
      );
    }

    // Apply maximum fee filter
    if (filters.maxFee) {
      result = result.filter(doctor => 
        doctor.consultationFee <= parseFloat(filters.maxFee)
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      const order = filters.sortOrder === 'asc' ? 1 : -1;
      if (filters.sortBy === 'rating') {
        return (a.rating - b.rating) * order;
      } else if (filters.sortBy === 'consultationFee') {
        return (a.consultationFee - b.consultationFee) * order;
      } else if (filters.sortBy === 'experience') {
        return (a.experience - b.experience) * order;
      }
      return 0;
    });

    // Apply pagination
    const startIndex = (filters.page - 1) * filters.limit;
    const endIndex = startIndex + filters.limit;
    const paginatedResult = result.slice(startIndex, endIndex);

    setFilteredDoctors(paginatedResult);
    setTotalPages(Math.ceil(result.length / filters.limit));
  };

  const fetchDoctors = async () => {
    try {
      const queryParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) queryParams.append(key, value.toString());
      });

      const response = await fetch(`https://doctor-finder-api.vercel.app/api/doctors/list?${queryParams}`);
      if (!response.ok) {
        throw new Error('Failed to fetch doctors');
      }
      const data = await response.json();
      setDoctors(data.doctors);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      // Use fallback data on error
      setDoctors(fallbackDoctors);
      setTotalPages(Math.ceil(fallbackDoctors.length / filters.limit));
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
              doctors={filteredDoctors} 
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
