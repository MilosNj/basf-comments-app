import { useState, useEffect } from 'react'

const useFormattedDate = () => {
  const [formattedDate, setFormattedDate] = useState<string>('')

  useEffect(() => {
    const updateFormattedDate = () => {
      const date = new Date()
      const daysOfWeek = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]

      const day = daysOfWeek[date.getDay() - 1]
      const dayOfMonth = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      const formattedDateStr = `${day}, ${dayOfMonth}.${month}.${year}`
      setFormattedDate(formattedDateStr)
    }

    updateFormattedDate()

    const interval = setInterval(updateFormattedDate, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return formattedDate
}

export default useFormattedDate
