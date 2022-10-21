import moment from 'moment'

export const getTimeWithOffset = (offset) => {
  const currentTime = new Date()
  const utcOffset = currentTime.getTimezoneOffset() / 60
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  )
}
export const formatDate = (date) => moment(date).format('LTS')
