import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  /** Final value to reach */
  to: number
  /** Decimal places to render (e.g. 1 → 1.5) */
  decimals?: number
  /** Animation length in ms */
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

// easeOutExpo: fast surge, gentle settle — feels premium
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

/**
 * Animates a number from 0 up to `to` on mount (and on every refresh),
 * keeping any prefix/suffix around it.
 */
export default function CountUp({
  to,
  decimals = 0,
  duration = 1900,
  prefix = '',
  suffix = '',
  className,
}: CountUpProps) {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number>()

  useEffect(() => {
    // Honour reduced-motion: jump straight to the final value
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to)
      return
    }

    let start: number | null = null
    const tick = (now: number) => {
      if (start === null) start = now
      const progress = Math.min((now - start) / duration, 1)
      setValue(to * easeOutExpo(progress))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [to, duration])

  return (
    <span className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
