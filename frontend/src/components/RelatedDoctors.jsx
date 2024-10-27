import React, { useContext, useEffect, useState } from 'react'  // Import necessary hooks
import { useNavigate } from 'react-router-dom'                  // To navigate to another route
import { AppContext } from '../context/AppContext'               // Import the AppContext to access global data

// The RelatedDoctors component receives `speciality` and `docId` as props.
const RelatedDoctors = ({ speciality, docId }) => {

    const navigate = useNavigate()  // useNavigate hook for programmatic navigation.
    const { doctors } = useContext(AppContext)  // Access the list of doctors from the context.

    // State to store the list of related doctors.
    const [relDoc, setRelDoc] = useState([])

    // useEffect to filter related doctors whenever `doctors`, `speciality`, or `docId` changes.
    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            // Filter doctors based on matching speciality and exclude the current doctor.
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)  // Store the filtered doctors in state.
        }
    }, [doctors, speciality, docId])  // Dependencies ensure it re-runs when any of these values change.

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-[#262626]'>
            {/* Section heading */}
            <h1 className='text-3xl font-medium'>Related Doctors</h1>
            <p className='sm:w-1/3 text-center text-sm'>
                Simply browse through our extensive list of trusted doctors.
            </p>

            {/* Grid container for displaying related doctors */}
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {relDoc.map((item, index) => (
                    // Each doctor card is clickable to navigate to their appointment page.
                    <div 
                        onClick={() => { 
                            navigate(`/appointment/${item._id}`); // Navigate to appointment page.
                            scrollTo(0, 0); // Scroll to the top of the page.
                        }} 
                        className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer 
                                   hover:translate-y-[-10px] transition-all duration-500' 
                        key={index}
                    >
                        {/* Doctor image */}
                        <img className='bg-[#EAEFFF]' src={item.image} alt="" />

                        {/* Doctor information */}
                        <div className='p-4'>
                            {/* Availability status */}
                            <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
                                <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-gray-500'}`}></p>
                                <p>{item.available ? 'Available' : 'Not Available'}</p>
                            </div>

                            {/* Doctor's name and speciality */}
                            <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                            <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Optional 'More' button (commented out) */}
            {/* 
            <button className='bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10'>
                more
            </button> 
            */}
        </div>
    )
}

export default RelatedDoctors  // Export the component for use in other parts of the application.
