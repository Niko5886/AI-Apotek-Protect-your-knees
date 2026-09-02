type OrderPageProps = { onBack: () => void }

// Purely visual category cards — no real navigation, matching the reference grid.
const categories = [
  { title: 'Pharmacy & Health', emoji: '💊', bg: '#FFD400' },
  { title: 'Homeopathy', emoji: '🌿', bg: '#F3D9A0' },
  { title: 'Schuessler Salts', emoji: '🧂', bg: '#D9DEE3' },
  { title: 'Herbs & Teas', emoji: '🍵', bg: '#F6D2D2' },
  { title: 'Cosmetics', emoji: '💄', bg: '#AEE0F2' },
  { title: 'At Home & Outside', emoji: '🛁', bg: '#E7D9C3' },
  { title: 'Mom & Baby', emoji: '👶', bg: '#CFE6F0' },
  { title: 'Her & Him', emoji: '🧴', bg: '#E3E1DC' },
]

export default function OrderPage({ onBack }: OrderPageProps) {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top bar */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
        >
          <span aria-hidden="true">←</span> back
        </button>
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="vit4ever Skinesium" className="h-10 w-auto object-contain" />
          <span className="text-sm font-medium tracking-tight">AI Apotek</span>
        </div>
      </header>

      {/* Heading */}
      <div className="mx-auto max-w-6xl px-6 pb-4 pt-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">shop by category</h1>
        <p className="mt-2 text-neutral-500">browse our pharmacy ranges</p>
      </div>

      {/* Category grid */}
      <main className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {categories.map((c) => (
            <div
              key={c.title}
              className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-neutral-100"
            >
              <div
                className="flex h-28 w-28 items-center justify-center rounded-full md:h-32 md:w-32"
                style={{ backgroundColor: c.bg }}
              >
                <span className="text-5xl" aria-hidden="true">
                  {c.emoji}
                </span>
              </div>
              <h2 className="mt-5 text-lg font-medium text-neutral-900">{c.title}</h2>
              <p className="mt-1 text-sm text-neutral-500">view products →</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
