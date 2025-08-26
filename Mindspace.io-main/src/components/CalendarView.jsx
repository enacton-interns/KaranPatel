import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const CalendarView = () => {
  const [value, setValue] = useState(new Date())
  const [entriesByDate, setEntriesByDate] = useState({})

  useEffect(() => {
    const stored = localStorage.getItem('journalEntries')
    if (stored) {
      const parsed = JSON.parse(stored)
      const grouped = {}
      parsed.forEach(entry => {
        grouped[entry.date] = grouped[entry.date] || []
        grouped[entry.date].push(entry)
      })
      setEntriesByDate(grouped)
    }
  }, [])

  const tileContent = ({ date, view }) => {
    const dateStr = date.toLocaleDateString()

    if (view === 'month' && entriesByDate[dateStr]) {
      return <div className='text-xs text-green-500 text-center'>📝</div>
    }
    return null
  }

  const showEntries = entriesByDate[value.toLocaleDateString()] || [] //Converts the selected Date object tostring &finds entries for that day.

  return (
    <section className='max-w-6xl mx-auto mt-10 p-6 bg-blue-900 text-white rounded shadow-md object-cover'>
      <h2 className='text-2xl font-semibold mb-4'>Calender View</h2>

      <div className='flex justify-center items-center'>
        <Calendar
          onChange={setValue}
          value={value}
          tileContent={tileContent}
          className='bg-white text-black rounded-lg shadow p-2  '
        />
      </div>

      {showEntries.length > 0 ? (
        <div className='mt-4'>
          <h3 className='text-lg font-semibold mb-4'>
            Entries On {value.toLocaleDateString()} :
          </h3>
          <ul className='space-y-4 space-x-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {showEntries.map((entry, index) => (
              <li key={index} className='p-3 bg-gray-800 rounded space-y-0'>
                <p>{entry.text}</p>
                <p>#{entry.tag}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className='mt-4 text-gray-400'>No entries for this date.</p>
      )}
    </section>
  )
}

export default CalendarView
