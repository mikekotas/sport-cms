import { useState, useEffect } from 'react'

export default function StatsCounter({ count, label, color }) {
  const [displayCount, setDisplayCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = count
    const duration = 1000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setDisplayCount(end)
        clearInterval(timer)
      } else {
        setDisplayCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [count])

  return (
    <div className={`text-5xl font-bold text-center text-neon-${color} neon-text animate-pulse-neon`}>
      {displayCount}
    </div>
  )
}
