import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add later: /work, /process, /studio, /contact */}
        </Routes>
      </main>
      <Footer />
    </>
  )
}
