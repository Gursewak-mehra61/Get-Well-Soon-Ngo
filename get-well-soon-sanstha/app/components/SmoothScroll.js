'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    // Wait for Lenis to be available from CDN
    const init = () => {
      const Lenis = window.Lenis
      if (!Lenis) {
        setTimeout(init, 50)
        return
      }
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
        infinite: false,
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }
    init()
  }, [])

  return null
}


