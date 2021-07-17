import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(dateTime) {
      return dateTime ? moment(dateTime).fromNow() : '-'
    }

  }
}

export const momentFilter = {
  filters: {
    timeFilter(dateTime) {
      return dateTime ? moment(dateTime).calendar() : ''
    }
  }
}
