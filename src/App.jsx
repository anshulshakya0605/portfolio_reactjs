
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='' element={<Navbar/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
