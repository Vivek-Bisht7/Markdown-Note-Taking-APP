import React from 'react'
import LandingPage from './pages/LandingPage'
import { Routes , Route} from 'react-router-dom'
import ShowPage from './pages/ShowPage'
import FilePage from './pages/FilePage'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/files" element={<ShowPage/>}/>
        <Route path="/files/:fileName" element={<FilePage/>}/>
      </Routes>
    </>
  )
}

export default App