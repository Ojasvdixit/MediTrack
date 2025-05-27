import { FaUserMd, FaCalendarAlt, FaClipboardList, FaCheckCircle } from 'react-icons/fa';

const BookingSteps = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">How to Book an Appointment</h2>
      <div className="flex flex-col md:flex-row justify-around items-center gap-10 px-5 md:px-0">
        
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="bg-blue-100 p-5 rounded-full mb-4">
            <FaUserMd className="text-blue-500 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Choose the Doctor</h3>
          <p className="text-gray-500 mt-2">Browse the list of available doctors and select one that fits your needs.</p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="bg-yellow-100 p-5 rounded-full mb-4">
            <FaCalendarAlt className="text-yellow-500 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Select Date and Time</h3>
          <p className="text-gray-500 mt-2">Pick a convenient date and time for your appointment.</p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="bg-red-100 p-5 rounded-full mb-4">
            <FaClipboardList className="text-red-500 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Enter Your Details</h3>
          <p className="text-gray-500 mt-2">Provide contact and necessary details to secure your appointment.</p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="bg-green-100 p-5 rounded-full mb-4">
            <FaCheckCircle className="text-green-500 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Confirm Appointment</h3>
          <p className="text-gray-500 mt-2">Review and confirm your booking for a hassle-free experience.</p>
        </div>

      </div>
    </div>
  );
};

export default BookingSteps;
