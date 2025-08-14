import React from 'react'
import LandingPage from './pages/LandingPage'
import { Routes , Route} from 'react-router-dom'
import ShowPage from './pages/ShowPage'
import FilePage from './pages/FilePage'
import Rendered_HTML from './pages/Rendered_HTML'
import Grammar_Check from './pages/Grammar_Check'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/files" element={<ShowPage/>}/>
        <Route path="/files/:fileName" element={<FilePage/>}/>
        <Route path="/files/HTML/:fileName" element={<Rendered_HTML/>}/>
        <Route path="/files/grammar/:fileName" element={<Grammar_Check/>}/>
      </Routes>
    </>
  )
}

export default App