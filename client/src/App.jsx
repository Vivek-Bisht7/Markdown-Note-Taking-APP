import React from 'react'
import LandingPage from './pages/LandingPage'
import { Routes , Route} from 'react-router-dom'
import ShowPage from './pages/showPage'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/files" element={<ShowPage/>}/>
      </Routes>
    </>
  )
}

export default App