import { useState } from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import JournalEditor from './components/JournalEditor'
import MoodTracker from './components/MoodTracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <Navbar />
      <HeroSection />
      <main className="p-6 space-y-10">
        <JournalEditor />
        <MoodTracker />
        
      </main>
    </div>
  )
}

export default App
