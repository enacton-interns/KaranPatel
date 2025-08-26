import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import JournalPage from './pages/JournalPage'

import CalendarPage from './pages/CalendarPage'
import ChartTrackerPage from './pages/ChartTrackerPage'
import HomePage from './pages/HomePage'

function App () {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/journal' element={<JournalPage />} />
        <Route path='/chart-tracker' element={<ChartTrackerPage />} />
        <Route path='/calendar' element={<CalendarPage />} />
      </Routes>
    </>
  )
}

export default App
/* */
