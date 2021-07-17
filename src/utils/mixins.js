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
      moment.locale("zh-tw")
      return dateTime ? moment(dateTime).calendar() : ''
    }
  }
}
