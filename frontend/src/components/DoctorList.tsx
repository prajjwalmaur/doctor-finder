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

interface DoctorListProps {
  doctors: Doctor[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function DoctorList({ doctors, currentPage, totalPages, onPageChange }: DoctorListProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
                {doctor.imageUrl ? (
                  <img
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
                    <p className="text-gray-600">{doctor.specialization}</p>
                    <p className="text-gray-600">{doctor.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-semibold text-blue-600">
                      ₹{doctor.consultationFee}
                    </p>
                    <p className="text-gray-600">Consultation Fee</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-800 font-medium">{doctor.rating}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">{doctor.experience} years experience</span>
                  </div>
                  <div>
                    <span className="text-gray-600">{doctor.availability}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center gap-2">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-md disabled:opacity-50 text-gray-800"
            >
              Previous
            </button>
            <span className="px-4 py-2 text-gray-800">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-md disabled:opacity-50 text-gray-800"
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
} 