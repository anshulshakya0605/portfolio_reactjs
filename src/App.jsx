
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Home from './Components/Home/Home'

function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
