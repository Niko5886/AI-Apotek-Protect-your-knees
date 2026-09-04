import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Hero from './Hero'
import OrderPage from './OrderPage'

// Reset scroll to top whenever the route changes.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="*" element={<Hero />} />
      </Routes>
    </>
  )
}
