export default function (ctx, inject) {
  function formatDate(date) {
    console.log({ date })
    // weekday: 'long', => wednesday (if needed)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleString('en-US', options)
  }

  function getRecent(data) {
    return data.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date)
    })
  }
  function getTimesAgoStamp(date) {
    const seconds = Math.floor((new Date() - date) / 1000)
    let interval = seconds / 31536000
    if (interval > 1) {
      return Math.floor(interval) + ' years ago'
    }
    interval = seconds / 2592000
    if (interval > 1) {
      return Math.floor(interval) + ' months ago'
    }
    interval = seconds / 86400
    if (interval > 1) {
      return Math.floor(interval) + ' days ago'
    }
    interval = seconds / 3600
    if (interval > 1) {
      return Math.floor(interval) + ' hours ago'
    }
    interval = seconds / 60
    if (interval > 1) {
      return Math.floor(interval) + ' minutes ago'
    }
    return Math.floor(seconds) + ' seconds ago'
  }
  function timeSince(date, intervalId) {
    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 },
    ]
    const seconds = Math.floor(
      (Date.now() - (new Date(date).getTime() - 1000)) / 1000
    )
    const interval = intervals.find((i) => i.seconds <= Math.abs(seconds))
    /** !@todo BUGXIX: interval is not found */
    if (!interval) return 'just now'
    const count = Math.floor(seconds / interval.seconds)
    if (intervalId) clearInterval(intervalId)
    return interval.label === 'second'
      ? 'just now'
      : `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`
  }
  function titleize(slug) {
    const words = slug.split('-')
    return words
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
      })
      .join(' ')
  }

  inject('utilsFN', {
    formatDate,
    getRecent,
    titleize,
    getTimesAgoStamp,
    timeSince,
  })
}
