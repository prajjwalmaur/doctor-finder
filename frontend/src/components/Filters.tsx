import { useState } from 'react';

interface FilterValues {
  specialization: string;
  location: string;
  minRating: string;
  maxFee: string;
  sortBy: string;
  sortOrder: string;
}

interface FiltersProps {
  filters: FilterValues;
  onFilterChange: (filters: Partial<FilterValues>) => void;
}

export default function Filters({ filters, onFilterChange }: FiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value } as Partial<FilterValues>);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 hover:text-blue-600"
        >
          {isOpen ? 'Hide' : 'Show'} Filters
        </button>
      </div>

      <div className={`space-y-4 ${isOpen ? 'block' : 'hidden md:block'}`}>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Specialization
          </label>
          <select
            name="specialization"
            value={filters.specialization}
            onChange={handleChange}
            className="w-full p-2 border rounded-md text-gray-800 bg-white"
          >
            <option value="">All Specializations</option>
            <option value="General Physician">General Physician</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatrician">Pediatrician</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleChange}
            placeholder="Enter location"
            className="w-full p-2 border rounded-md text-gray-800 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Minimum Rating
          </label>
          <select
            name="minRating"
            value={filters.minRating}
            onChange={handleChange}
            className="w-full p-2 border rounded-md text-gray-800 bg-white"
          >
            <option value="">Any Rating</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="2">2+ Stars</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Maximum Fee
          </label>
          <input
            type="number"
            name="maxFee"
            value={filters.maxFee}
            onChange={handleChange}
            placeholder="Enter maximum fee"
            className="w-full p-2 border rounded-md text-gray-800 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Sort By
          </label>
          <select
            name="sortBy"
            value={filters.sortBy}
            onChange={handleChange}
            className="w-full p-2 border rounded-md text-gray-800 bg-white"
          >
            <option value="rating">Rating</option>
            <option value="consultationFee">Fee</option>
            <option value="experience">Experience</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Sort Order
          </label>
          <select
            name="sortOrder"
            value={filters.sortOrder}
            onChange={handleChange}
            className="w-full p-2 border rounded-md text-gray-800 bg-white"
          >
            <option value="desc">High to Low</option>
            <option value="asc">Low to High</option>
          </select>
        </div>
      </div>
    </div>
  );
} 