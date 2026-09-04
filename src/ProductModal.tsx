import { useEffect, useRef } from 'react'

type ProductModalProps = { onClose: () => void }

// Benefit lines use EFSA-authorised magnesium health-claim wording.
const benefits = [
  'contributes to normal muscle function',
  'contributes to normal nervous system function',
  'helps reduce tiredness and fatigue',
  'contributes to normal energy-yielding metabolism',
  'supports normal electrolyte balance',
  'contributes to the maintenance of normal bones & teeth',
]

const facts = ['240 capsules', 'vegan', '11 magnesium forms']

export default function ProductModal({ onClose }: ProductModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    // Lock background scroll while the dialog is open
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div
        className="modal-in relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white/80 ring-1 ring-white/15 backdrop-blur transition-colors hover:bg-black/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <span aria-hidden="true">✕</span>
        </button>

        {/* Product image */}
        <div className="flex items-center justify-center bg-gradient-to-b from-white to-neutral-200 p-8 md:w-1/2">
          <img
            src="/logo.png"
            alt="vit4ever Skinesium — 11-fold magnesium complex, 240 capsules"
            className="max-h-[240px] w-auto object-contain drop-shadow-xl md:max-h-[380px]"
          />
        </div>

        {/* Product info */}
        <div className="flex flex-col gap-4 overflow-y-auto p-6 md:w-1/2 md:p-8">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/70 ring-1 ring-white/10 transition-colors hover:text-white hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <span aria-hidden="true">←</span> back
          </button>
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">vit4ever · food supplement</p>
          <h2
            id="product-modal-title"
            className="hero-title text-2xl font-medium tracking-tight text-white md:text-[28px]"
          >
            skinesium — 11-fold magnesium complex
          </h2>

          <div className="flex flex-wrap gap-2">
            {facts.map((f) => (
              <span
                key={f}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
              >
                {f}
              </span>
            ))}
          </div>

          <p className="text-sm leading-relaxed text-white/70">
            A high-dose magnesium complex that unites eleven magnesium compounds — from citrate and
            bisglycinate to marine and elemental forms — for broad, everyday coverage in a single vegan
            capsule.
          </p>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.15em] text-white/45">why magnesium</p>
            <ul className="flex flex-col gap-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-white/80">
                  <span aria-hidden="true" className="mt-[3px] text-white/35">
                    —
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-1 text-[11px] leading-relaxed text-white/40">
            Food supplement. Take as directed on the label — do not exceed the recommended daily intake.
            A food supplement is not a substitute for a varied, balanced diet and a healthy lifestyle.
          </p>
        </div>
      </div>
    </div>
  )
}
