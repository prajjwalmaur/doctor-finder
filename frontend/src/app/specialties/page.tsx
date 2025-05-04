'use client';

import { useState, useEffect } from 'react';

interface Specialty {
  id: string;
  name: string;
  description: string;
}

export default function SpecialtiesPage() {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This would typically fetch from your API
    const mockSpecialties: Specialty[] = [
      {
        id: '1',
        name: 'Cardiology',
        description: 'Specialists in heart and cardiovascular system conditions'
      },
      {
        id: '2',
        name: 'Dermatology',
        description: 'Experts in skin, hair, and nail conditions'
      },
      {
        id: '3',
        name: 'Pediatrics',
        description: 'Healthcare for infants, children, and adolescents'
      },
      {
        id: '4',
        name: 'Orthopedics',
        description: 'Specialists in musculoskeletal system conditions'
      }
    ];

    setSpecialties(mockSpecialties);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Medical Specialties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((specialty) => (
          <div key={specialty.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{specialty.name}</h2>
            <p className="text-gray-600">{specialty.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 