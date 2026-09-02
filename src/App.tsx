import { useState } from 'react'
import Hero from './Hero'
import OrderPage from './OrderPage'

export default function App() {
  const [page, setPage] = useState<'hero' | 'order'>('hero')

  return page === 'hero' ? (
    <Hero onOrder={() => setPage('order')} />
  ) : (
    <OrderPage onBack={() => setPage('hero')} />
  )
}
