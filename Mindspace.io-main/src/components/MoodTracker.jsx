import React, { useState, useEffect } from 'react';

const Moods = [
    { emoji: "😃", label: "Happy" },
    { emoji: "😊", label: "Content" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "😔", label: "Sad" },
    { emoji: "😢", label: "Stressed" },
];



const MoodTracker = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const today = new Date().toLocaleDateString();

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('dailyMoods')) || {};
        if (saved[today]) {
            setSelectedMood(saved[today]);
        }
    }, [today]);

    const handleMoodClick = (mood) => {
        setSelectedMood(mood);
        const saved = JSON.parse(localStorage.getItem('dailyMoods')) || {};
        saved[today] = mood.label;
        localStorage.setItem('dailyMoods', JSON.stringify(saved));

    };

    return (
        <section className='max-w-4xl mx-auto p-4 mt-10 bg-blue-800 dark:from-gray-900 dark:to-gray-800  rounded-xl shadow-lg'>
            <h2 className=' text-2xl text-semibold mb-4 text-white dark:text-white'>How are you feeling today?</h2>

            <div className='flex space-x-4 justify-center'>
                {Moods.map((mood, index) => (
                    <button
                        key={mood.label}
                        onClick={() => handleMoodClick(mood)}
                        className={`p-4 rounded-full text-3xl transition-colors ${selectedMood === mood.label ? 'bg-blue-600 text-white dark:bg-blue-700 dark:text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-blue-500 hover:text-white'}`}
                    >{mood.emoji}</button>
                ))}
            </div>

            {selectedMood && (
                <p className="m-5 text-center text-white dark:text-white font-semibold text-xl">
                    You selected : <strong>{selectedMood.label}</strong>
                </p>
            )}

        </section>
    )
}

export default MoodTracker
