import React from 'react'
import HeroSection from '../components/HeroSection' // Assuming already created
import FAQSection from '../components/FAQSection'

const HomePage = () => {
  return (
    <div className='bg-white dark:bg-gray-900 text-gray-800 dark:text-white'>
      <HeroSection />

      {/* About Section */}
      <section className='max-w-6xl mx-auto px-4 py-16'>
        <h2 className='text-3xl font-bold mb-4 text-center'>About Mindspace</h2>
        <p className='text-2xl mt-6 leading-relaxed text-center'>
          Mindspace is your personal wellness companion designed to help you
          journal your feelings, reflect on your moods, and grow with daily
          inspiration. Whether you're tracking your happiness or managing
          stress, Mindspace makes it easy.
        </p>
      </section>

      {/* Website Details Section */}
      <section className='max-w-6xl mx-auto px-4 py-16 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md'>
        <h2 className='text-3xl font-bold mb-6 text-center'>Features</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <h3 className='text-xl font-semibold mb-2'>📝 Daily Journaling</h3>
            <p>
              Log your thoughts and feelings in a safe, calming interface with
              mood tagging.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2'>📊 Mood Analytics</h3>
            <p>
              Visualize your mental wellness with professional mood statistics
              and chart analysis 
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2'>📅 Calendar View</h3>
            <p>
              See your mood entries over time and revisit how your days went.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2'>💡 Daily Inspiration</h3>
            <p>Receive motivational quotes every day to uplift your mindset.</p>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className='max-w-6xl mx-auto px-4 py-16'>
        <h2 className='text-3xl font-bold mb-6 text-center'>
          How to Use Mindspace
        </h2>
        <div className='grid md:grid-cols-2 gap-8 text-lg'>
          <div className='flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow'>
            <span className='text-2xl'>🔑</span>
            <p>Create your account or continue journaling anonymously.</p>
          </div>
          <div className='flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow'>
            <span className='text-2xl'>📝</span>
            <p>Head to the Journal tab and write your thoughts with a mood tag.</p>
          </div>
          <div className='flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow'>
            <span className='text-2xl'>📅</span>
            <p>Visit Calendar or Mood to explore your tracked progress.</p>
          </div>
          <div className='flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow'>
            <span className='text-2xl'>✨</span>
            <p>Get inspired with our daily motivational quotes.</p>
          </div>
        </div>
      </section>
      

      {/* FAQ Section */}
      
        <FAQSection />
      

      {/* Footer */}
      <footer className='bg-blue-900 dark:bg-gray-700 text-white py-6 text-center'>
        <p className='text-sm'>
          © {new Date().getFullYear()} Mindspace. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default HomePage
