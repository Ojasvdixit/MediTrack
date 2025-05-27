import React, { useState } from 'react';

const HealthTips = () => {
    const healthTips = [
        {
            title: 'Stay Hydrated',
            content: 'Drinking enough water each day is crucial for your health. It helps with digestion, keeps your skin clear, and aids in nutrient absorption.',
            author: 'Dr. Sarah Jones',
            date: 'October 10, 2024',
        },
        {
            title: 'Get Regular Exercise',
            content: 'Aim for at least 30 minutes of physical activity a day. Exercise strengthens your heart, improves your mood, and boosts energy levels.',
            author: 'Dr. Mark Smith',
            date: 'October 5, 2024',
        },
        {
            title: 'Practice Deep Breathing',
            content: 'Deep breathing exercises can reduce stress, improve oxygen flow, and enhance focus. Try taking a few minutes each day to breathe deeply and relax.',
            author: 'Dr. Lisa Chang',
            date: 'October 12, 2024',
        },
        {
            title: 'Build Healthy Relationships',
            content: 'Maintaining close relationships and a strong social support network has been shown to improve mental and physical health.',
            author: 'Dr. Amy Williams',
            date: 'September 14, 2024',
        },
        {
            title: 'Focus on Good Posture',
            content: 'Sitting or standing with correct posture helps prevent back pain and improves breathing. Check your posture regularly throughout the day.',
            author: 'Dr. Jennifer Blake',
            date: 'September 5, 2024',
        },
        {
            title: 'Practice Gratitude',
            content: 'Taking time to appreciate the positive things in life can improve your mental health and reduce stress levels. Start a daily gratitude journal.',
            author: 'Dr. Patrick Lee',
            date: 'August 20, 2024',
        },
        {
            title: 'Eat a Balanced Diet',
            content: 'A balanced diet provides the nutrients your body needs to function properly. Include a variety of fruits, vegetables, lean proteins, and whole grains.',
            author: 'Dr. Emily Chen',
            date: 'August 10, 2024',
        },
        {
            title: 'Get Enough Sleep',
            content: 'Aim for 7-9 hours of sleep each night. Quality sleep supports immune function, mood, and overall health.',
            author: 'Dr. Michael Brown',
            date: 'July 25, 2024',
        },
        {
            title: 'Protect Your Skin',
            content: 'Use sunscreen daily to protect against harmful UV rays and prevent skin aging and damage.',
            author: 'Dr. Rachel Cooper',
            date: 'July 15, 2024',
        },
        {
            title: 'Limit Sugar Intake',
            content: 'Reducing sugar intake can help prevent weight gain, reduce the risk of diabetes, and improve energy levels.',
            author: 'Dr. Thomas Edwards',
            date: 'June 30, 2024',
        },
        {
            title: 'Practice Mindfulness',
            content: 'Mindfulness meditation can reduce anxiety, improve emotional health, and boost overall happiness. Start with just a few minutes a day.',
            author: 'Dr. Sophia Green',
            date: 'June 12, 2024',
        },
        {
            title: 'Strength Train Regularly',
            content: 'Strength training builds muscle, improves bone density, and supports healthy weight management. Aim to strength train 2-3 times per week.',
            author: 'Dr. Richard Kim',
            date: 'May 20, 2024',
        },
        {
            title: 'Avoid Overeating',
            content: 'Eating until you’re full rather than stuffed can help with digestion and prevent weight gain. Listen to your body’s hunger cues.',
            author: 'Dr. Laura Brown',
            date: 'May 1, 2024',
        },
        {
            title: 'Take Regular Breaks',
            content: 'Whether working or studying, taking breaks every hour can help improve focus and reduce stress.',
            author: 'Dr. Anthony White',
            date: 'April 14, 2024',
        },
        {
            title: 'Keep a Healthy Sleep Routine',
            content: 'Going to bed and waking up at the same time each day helps regulate your body’s internal clock and improve sleep quality.',
            author: 'Dr. Katie Rodriguez',
            date: 'March 28, 2024',
        },
        {
            title: 'Boost Immunity with Vitamin C',
            content: 'Foods high in vitamin C, like oranges and bell peppers, support your immune system and overall health.',
            author: 'Dr. Allen Cooper',
            date: 'March 10, 2024',
        },
        {
            title: 'Limit Alcohol Intake',
            content: 'Moderate alcohol consumption to reduce health risks and promote well-being. Stick to recommended guidelines for a healthy lifestyle.',
            author: 'Dr. Henry Davis',
            date: 'February 25, 2024',
        }
    ];

    const [showAll, setShowAll] = useState(false);

    const displayedTips = showAll ? healthTips : healthTips.slice(0, 4);

    return (
        <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Health Tips & Blogs</h2>
            <div className="space-y-6">
                {displayedTips.map((tip, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-customRed">{tip.title}</h3>
                        <p className="text-gray-600 mt-2">{tip.content}</p>
                        <div className="text-sm text-gray-500 mt-2">By {tip.author} on {tip.date}</div>
                    </div>
                ))}
            </div>
            {!showAll && (
                <button
                    onClick={() => setShowAll(true)}
                    className="mt-6 bg-customRed text-white px-6 py-2 rounded-full hover:bg-red-600"
                >
                    Read More
                </button>
            )}
        </div>
    );
};

export default HealthTips;
