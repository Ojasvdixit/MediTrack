// HealthTips.js
import React from 'react';

const HealthTips = () => {
    const healthTips = [
        {
            title: 'Stay Hydrated',
            content: 'Drinking enough water each day is crucial for many reasons: to regulate body temperature, keep joints lubricated, prevent infections, deliver nutrients to cells, and keep organs functioning properly.',
            author: 'Dr. Sarah Jones',
            date: 'October 10, 2024',
        },
        {
            title: 'Get Regular Exercise',
            content: 'Physical activity improves your mood, boosts your energy, and helps prevent chronic diseases. Try brisk walking, jogging, or strength training exercises to stay fit.',
            author: 'Dr. Mark Smith',
            date: 'October 5, 2024',
        },
        {
            title: 'Eat a Balanced Diet',
            content: 'A balanced diet includes a variety of fruits, vegetables, whole grains, and lean proteins. Proper nutrition boosts immunity and reduces the risk of diseases.',
            author: 'Dr. Emily Brown',
            date: 'September 25, 2024',
        },
        {
            title: 'Prioritize Mental Health',
            content: 'Mental health is just as important as physical health. Practice mindfulness, manage stress, and consider seeking support when needed.',
            author: 'Dr. Alex Green',
            date: 'September 20, 2024',
        },
    ];

    return (
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Health Tips & Blogs</h2>
            <div className="space-y-8">
                {healthTips.map((tip, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-2xl font-semibold text-gray-700">{tip.title}</h3>
                        <p className="text-gray-600 mt-2">{tip.content}</p>
                        <div className="mt-4 text-sm text-gray-500 flex justify-between items-center">
                            <p>By <span className="font-medium text-gray-700">{tip.author}</span></p>
                            <p>{tip.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HealthTips;
