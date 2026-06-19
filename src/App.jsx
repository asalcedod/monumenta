import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Process from './pages/Process'
import Studio from './pages/Studio'
import Work from './pages/Work'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/process" element={<Process />} />
          <Route path="/studio"  element={<Studio />} />
          <Route path="/work"  element={<Work />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
