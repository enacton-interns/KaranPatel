import React from 'react'
import QuoteBox from '../components/QuoteBox'
import MoodTracker from '../components/MoodTracker'
import CalendarView from '../components/CalendarView'


const DashboardPage = () => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6'>
      <h1 className='text-3xl font-bold text-white mb-6 text-center'>
        Wellness Dashboard
      </h1>

      {/* Quote of the Day */}
      <div className='mb-8'>
        <QuoteBox />
      </div>

      {/* Chart Section */}
      <div className='mb-8'>
        <MoodTracker />
      </div>

      {/* Calendar View */}
      <div className='mb-8'>
        <CalendarView />
      </div>
    </section>
  )
}

export default DashboardPage
