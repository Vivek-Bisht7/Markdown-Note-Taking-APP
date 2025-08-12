import React from 'react'
import LandingPage from './pages/LandingPage'
import { Routes , Route} from 'react-router-dom'
import ShowPage from './pages/ShowPage'
import FilePage from './pages/FilePage'
import Rendered_HTML from './pages/Rendered_HTML'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/files" element={<ShowPage/>}/>
        <Route path="/files/:fileName" element={<FilePage/>}/>
        <Route path="/files/HTML/:fileName" element={<Rendered_HTML/>}/>
      </Routes>
    </>
  )
}

export default App