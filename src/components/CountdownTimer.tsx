import React, { useState, useEffect } from 'react'

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set target date to August 28th, 2025, 6:30 PM Mountain Standard Time
    // Create date in local time and convert to UTC properly
    const targetDate = new Date('2025-08-28T18:30:00') // 6:30 PM MST with timezone offset

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="countdown-container">
      <div className="countdown-display">
        <div className="time-unit">
          <span className="time-value">{timeLeft.days.toString().padStart(2, '0')}</span>
          <span className="time-label">Days</span>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <span className="time-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="time-label">Hours</span>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <span className="time-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="time-label">Minutes</span>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <span className="time-value">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="time-label">Seconds</span>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer
