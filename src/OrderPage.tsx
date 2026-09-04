import { useState } from 'react'
import ProductModal from './ProductModal'

type OrderPageProps = { onBack: () => void }

// Visual category cards. Only "homeopathy" opens a product modal; the rest are presentational.
const categories = [
  { title: 'pharmacy & health', img: '/categories/pharmacy-health.png' },
  { title: 'homeopathy', img: '/categories/homeopathy.png' },
  { title: 'schuessler salts', img: '/categories/schuessler-salts.png' },
  { title: 'herbs & teas', img: '/categories/herbs-teas.png' },
  { title: 'cosmetics', img: '/categories/cosmetics.png' },
  { title: 'at home & outside', img: '/categories/at-home-outside.png' },
  { title: 'mom & baby', img: '/categories/mom-baby.png' },
  { title: 'her & him', img: '/categories/her-him.png' },
]

const cardBase =
  'card-in flex w-full flex-col items-center rounded-2xl bg-neutral-900/90 p-6 text-center ring-1 ring-white/10 backdrop-blur transition-shadow hover:ring-white/20'

export default function OrderPage({ onBack }: OrderPageProps) {
  const [showProduct, setShowProduct] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar — mirrors the hero navbar language */}
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 rounded-full bg-neutral-900/90 px-5 py-2.5 text-sm text-neutral-300 ring-1 ring-white/10 backdrop-blur transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <span aria-hidden="true">←</span> back
        </button>
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="AI Apotek" className="h-10 w-auto object-contain drop-shadow-lg" />
          <span className="text-sm font-normal tracking-tight text-white">AI Apotek</span>
        </div>
      </header>

      {/* Heading */}
      <div className="mx-auto max-w-6xl px-6 pb-6 pt-0">
        <h1 className="hero-title text-4xl font-medium tracking-tight md:text-5xl">shop by category</h1>
        <p className="mt-3 text-sm text-white/60 md:text-base">browse our pharmacy ranges</p>
      </div>

      {/* Category grid */}
      <main className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {categories.map((c, i) => {
            const style = { animationDelay: `${i * 0.06}s` }
            const inner = (
              <>
                <div className="h-28 w-28 overflow-hidden rounded-full ring-1 ring-white/10 md:h-32 md:w-32">
                  <img
                    src={c.img}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2 className="mt-5 text-lg font-medium text-white">{c.title}</h2>
                <p className="mt-1 text-sm text-white/50">view products →</p>
              </>
            )

            // Only the homeopathy card is interactive → opens the product modal.
            if (c.title === 'homeopathy') {
              return (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => setShowProduct(true)}
                  className={`${cardBase} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70`}
                  style={style}
                >
                  {inner}
                </button>
              )
            }

            return (
              <div key={c.title} className={cardBase} style={style}>
                {inner}
              </div>
            )
          })}
        </div>
      </main>

      {showProduct && <ProductModal onClose={() => setShowProduct(false)} />}
    </div>
  )
}
