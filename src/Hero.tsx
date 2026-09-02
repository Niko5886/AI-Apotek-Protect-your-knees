import CountUp from './CountUp'

const navLinks = ['medications', 'discounts', 'company', 'support']

const focusDark =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black'
const focusLight =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white'

type HeroProps = { onOrder: () => void }

export default function Hero({ onOrder }: HeroProps) {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      {/* Looping fullscreen background video (decorative) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
      />

      {/* Floating pill navbar */}
      <div className="absolute left-0 right-0 top-0 z-20 px-6 pt-0 md:px-10">
        <nav className="flex items-start justify-between gap-4">
          {/* Left: logo + brand */}
          <div className="flex items-start gap-2">
            <img
              src="/logo.png"
              alt="AI Apotek"
              className="h-16 w-auto object-contain drop-shadow-lg md:h-[141px]"
            />
            <span className="pt-2 text-sm font-normal tracking-tight text-white drop-shadow">
              AI Apotek
            </span>
          </div>

          {/* Center pill: nav links (hidden on mobile) */}
          <div className="hidden items-center gap-1 rounded-full bg-neutral-900/90 px-3 py-2 ring-1 ring-white/10 backdrop-blur md:flex">
            {navLinks.map((link) => (
              <button
                key={link}
                type="button"
                className={`rounded-full px-5 py-2 text-sm text-neutral-300 transition-colors hover:text-white ${focusDark}`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Right button */}
          <button
            type="button"
            onClick={onOrder}
            className={`rounded-full bg-white px-6 py-3 text-sm font-normal text-black transition-colors hover:bg-neutral-200 ${focusLight}`}
          >
            Order
          </button>
        </nav>
      </div>

      {/* Foreground content (above the video) */}
      <div className="relative h-full w-full">
        {/* Giant staggered headline — one semantic heading, three positioned words */}
        <h1 className="contents">
          <span
            className="hero-title reveal-word absolute left-4 top-[23%] text-[7.47vw] font-medium text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] md:left-10 md:text-[6.93vw]"
            style={{ animationDelay: '0s' }}
          >
            protect
          </span>
          <span
            className="hero-title reveal-word absolute right-4 top-[38%] text-[7.47vw] font-medium text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] md:right-10 md:text-[6.93vw]"
            style={{ animationDelay: '0.45s' }}
          >
            your
          </span>
          <span
            className="hero-title reveal-word absolute left-[13%] top-[62%] text-[7.47vw] font-medium text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] md:left-[22%] md:text-[6.93vw]"
            style={{ animationDelay: '0.9s' }}
          >
            knees
          </span>
        </h1>

        {/* Bottom gradient overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-b from-transparent to-black" />

        {/* Stat — bottom left */}
        <div className="absolute bottom-20 left-6 md:bottom-24 md:left-20">
          <div className="flex items-center gap-3">
            <CountUp
              to={1.5}
              decimals={1}
              prefix="+"
              suffix="K"
              className="text-4xl font-medium tabular-nums tracking-tight text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.5)] md:text-5xl"
            />
            <span className="hidden h-px w-24 rotate-[-20deg] bg-white/40 md:block" />
          </div>
          <p className="mt-1 text-xs text-white/80 md:text-sm">skiers protected</p>
        </div>

        {/* Stat — bottom right */}
        <div className="absolute bottom-16 right-6 md:bottom-20 md:right-20">
          <div className="flex items-center justify-end gap-3">
            <span className="hidden h-px w-24 rotate-[-20deg] bg-white/40 md:block" />
            <CountUp
              to={300}
              decimals={0}
              suffix="K+"
              className="text-4xl font-medium tabular-nums tracking-tight text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.5)] md:text-5xl"
            />
          </div>
          <p className="mt-1 text-right text-xs text-white/80 md:text-sm">sales</p>
        </div>

        {/* Signature credit — subtle, bottom-right */}
        <div className="pointer-events-none absolute bottom-3 right-5 z-20 select-none text-[10px] font-light uppercase tracking-[0.25em] text-white/35">
          powered by <span className="font-normal text-white/60">N.Stoyanov</span>
        </div>
      </div>
    </main>
  )
}
