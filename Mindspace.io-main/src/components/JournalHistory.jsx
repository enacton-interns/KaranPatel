import React, { useState, useEffect } from 'react'

const JournalHistory = () => {
  const [entries, setEntries] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)
  const [editText, setEditText] = useState('')
  const [editTag, setEditTag] = useState('grateful')

  //Load from localStorage on component mount
  useEffect(() => {
    const storedEntries = localStorage.getItem('journalEntries')
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries))
    }
  }, [])

  //Handle delete entry
  const handleDelete = (index) => {
    const updated = [...entries]
    updated.splice(index, 1)
    setEntries(updated);
    localStorage.setItem('journalEntries', JSON.stringify(updated));
  }

  //Handle edit entry
  const handleEdit =  (index) => {
    setEditingIndex(index)
    setEditText(entries[index].text);
    setEditTag(entries[index].tag);

  }

  //save edited entry to localStorage
  const handleSaveEdit = () => {
    const updated  = [...entries]
    updated[editingIndex] = {
      ...updated[editingIndex],
      text: editText,
      tag: editTag,
    };

    setEntries(updated);
    localStorage.setItem('journalEntries', JSON.stringify(updated));
    setEditingIndex(null);
    setEditText('');
    setEditTag('grateful'); 
    alert('Entry updated successfully!');

  }

  return (
    <section className='max-w-6xl mx-auto p-6 mt-10  bg-blue-800 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg'>
      <h2 className='text-2xl font-semibold text-white mb-5'>
        Journal History
      </h2>

      {entries.length === 0 ? (
        <p className='font-semibold text-gray-300'>No Entries Found.</p>
      ) : (
        <ul className='space-y-4 space-x-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {entries.map((entry, index) => (
            <li
              key={index}
              className='p-4  border-gray-300 bg-gray-800 rounded shadow-sm'
            >
              <p className='text-sm text-white '>{entry.date}</p>

              {editingIndex === index ? (
                <>
                  <textarea
                    value={editText}
                    onChange={e => setEditText(e.target.value)}
                    className='w-full h-24 p-2 mt-2 border border-gray-300 dark:border-gray-600 resize-none dark:bg-gray-700 text-black rounded'
                  />

                  <select
                    value={editTag}
                    onChange={e => setEditTag(e.target.value)}
                    className='p-2 mt-2 border rounded bg-cyan-700'
                  >
                    <option value='grateful'>Grateful</option>
                    <option value='stressed'>Stressed</option>
                    <option value='happy'>Happy</option>
                    <option value='sad'>Sad</option>
                    <option value='excited'>Excited</option>
                  </select>

                  <div className='mt-3 flex gap-3'>
                    <button
                      onClick={handleSaveEdit}
                      className='bg-green-600 px-4 py-1 rounded text-white'
                    >
                      save
                    </button>
                    <button
                      onClick={() => setEditingIndex(null)}
                      className='bg-gray-500 px-4 py-1 rounded text-white'
                    >
                      cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className='text-white whitespace-pre-wrap mt-2'> {entry.text}</p>
                  <span className='text-sm text-blue-300 font-medium'>#{entry.tag}</span>

                  <div className='mt-3 flex gap-2 justify-between mb-0 position-fixed'>
                       <button onClick={() => handleEdit(index)} className='bg-yellow-500 px-4 py-1 rounded text-white'>Edit</button>
                       <button onClick={() => handleDelete(index)} className='bg-red-600 px-4 py-1 rounded text-white'>Delete</button>
                  </div>

                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default JournalHistory
