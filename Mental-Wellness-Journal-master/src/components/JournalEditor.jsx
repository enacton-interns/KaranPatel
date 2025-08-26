import React, { useState, useEffect } from 'react';

const JournalEditor = () => {
    const [text, setText] = useState("");
    const [tag, setTag] = useState("Grateful");
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('journalEntries');
        if (stored) {
            setEntries(JSON.parse(stored));
        }
    }, []);

   
    //Save entry to localStorage
    const handleSave  = () => {
        const newEntry = {
            text: text,
            tag: tag,
            date: new Date().toLocaleDateString(),
        };
    

    const updated = [...entries, newEntry];
    setEntries(updated);
    localStorage.setItem('journalEntries', JSON.stringify(updated));
    setText(''); // Clear the text area after saving
    alert('Entry saved successfully!');

    };

    return (
        <section className='bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 py-20 max-w-6xl mx-auto p-4 mt-10 rounded-xl shadow-lg '>
            <h2 className='text-bold text-2xl mb-4 text-blue-700 dark:text-white text-center font-semibold'>Write Your Journal</h2>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your journal entry..."
                className="w-full h-64 p-4  mt-4 border border-gray-300 dark:border-gray-600 resize-none dark:bg-gray-700 dark:text-white  rounded"
            />

            <div className='mt-4 flex items-center justify-between'>
                <select
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    className="p-2 border rounded dark:bg-gray-700 dark:text-white"
                >
                    <option value="Grateful">Grateful</option>
                    <option value="Stressed">Stressed</option>
                    <option value="Happy">Happy</option>
                    <option value="Sad">Sad</option>
                    <option value="Excited">Excited</option>
                </select>

                <button
                    onClick={handleSave}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Save Entry
                </button>

            </div>

        </section>
    )
}

export default JournalEditor
