"use client"

import { useState, useEffect } from "react"

export function useCounter(isInView: boolean, target: number, duration = 800) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    let startTime: number | null = null

    function animateCounter(timestamp: number) {
      if (!startTime) startTime = timestamp

      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      const current = Math.floor(percentage * target)
      setCount(current)

      if (percentage < 1) {
        requestAnimationFrame(animateCounter)
      }
    }

    requestAnimationFrame(animateCounter)
  }, [isInView, target, duration])

  return count
}
