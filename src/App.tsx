import { useState } from 'react'
import Hero from './Hero'
import OrderPage from './OrderPage'

export default function App() {
  const [page, setPage] = useState<'hero' | 'order'>('hero')

  function navigate(to: 'hero' | 'order') {
    window.scrollTo(0, 0)
    setPage(to)
  }

  return page === 'hero' ? (
    <Hero onOrder={() => navigate('order')} />
  ) : (
    <OrderPage onBack={() => navigate('hero')} />
  )
}
