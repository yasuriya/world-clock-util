import React, { useEffect, useState } from 'react'
import { getTimeWithOffset, formatDate } from './timeFormatter'

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(getTimeWithOffset(offset))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTimeWithOffset(offset))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [time])
  console.log(formatDate(time))
  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{formatDate(time)}</div>
    </div>
  )
}

export default Clock
