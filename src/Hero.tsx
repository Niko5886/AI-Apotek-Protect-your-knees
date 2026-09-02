import CountUp from './CountUp'

const navLinks = ['platform', 'solutions', 'company', 'support']

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Looping fullscreen background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
      />

      {/* Floating pill navbar */}
      <div className="absolute left-0 right-0 top-0 z-20 px-6 pt-6 md:px-10">
        <nav className="flex items-center justify-between gap-4">
          {/* Left pill: logo + brand */}
          <div className="flex items-center rounded-full bg-neutral-900/90 p-2 backdrop-blur">
            <img
              src="/logo.jpg"
              alt="vit4ever Skinesium"
              className="h-[53px] w-auto rounded-md object-contain"
            />
          </div>

          {/* Center pill: nav links (hidden on mobile) */}
          <div className="hidden items-center gap-1 rounded-full bg-neutral-900/90 px-3 py-2 backdrop-blur md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="rounded-full px-5 py-2 text-sm text-neutral-300 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right button */}
          <button
            type="button"
            className="rounded-full bg-white px-6 py-3 text-sm font-normal text-black transition-colors hover:bg-neutral-200"
          >
            get started
          </button>
        </nav>
      </div>

      {/* Foreground content (above the video) */}
      <div className="relative h-full w-full">
        {/* Giant staggered headline */}
        <h1 className="hero-title absolute left-4 top-[18%] text-[11.2vw] font-medium text-white md:left-10 md:text-[10.4vw]">
          protect
        </h1>
        <h1 className="hero-title absolute right-4 top-[38%] text-[11.2vw] font-medium text-white md:right-10 md:text-[10.4vw]">
          your
        </h1>
        <h1 className="hero-title absolute left-[18%] top-[58%] text-[11.2vw] font-medium text-white md:left-[28%] md:text-[10.4vw]">
          knees
        </h1>

        {/* Bottom gradient overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />

        {/* Stat — bottom left */}
        <div className="absolute bottom-20 left-6 md:bottom-24 md:left-20">
          <div className="flex items-center gap-3">
            <CountUp
              to={1.5}
              decimals={1}
              prefix="+"
              suffix="K"
              className="text-4xl font-medium tabular-nums tracking-tight text-white md:text-5xl"
            />
            <span className="hidden h-px w-24 rotate-[-20deg] bg-white/40 md:block" />
          </div>
          <p className="mt-1 text-xs text-white/70 md:text-sm">skiers protected</p>
        </div>

        {/* Stat — bottom right */}
        <div className="absolute bottom-16 right-6 md:bottom-20 md:right-20">
          <div className="flex items-center justify-end gap-3">
            <span className="hidden h-px w-24 rotate-[-20deg] bg-white/40 md:block" />
            <CountUp
              to={300}
              decimals={0}
              suffix="K+"
              className="text-4xl font-medium tabular-nums tracking-tight text-white md:text-5xl"
            />
          </div>
          <p className="mt-1 text-right text-xs text-white/70 md:text-sm">sales</p>
        </div>
      </div>
    </section>
  )
}
