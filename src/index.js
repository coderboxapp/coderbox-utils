import moment from 'moment'
import { indexOf } from 'lodash'
import {
  transformPosition,
  transformEducation,
  transformJob
} from 'transform'

export const hasPermission = (user, perm) => {
  if (!user || !user.permissions) {
    return false
  }

  return indexOf(user.permissions, perm) > -1
}

export const toYears = (dateRange) => {
  let years = moment(dateRange.end || new Date()).diff(dateRange.start, 'years', false)
  let months = moment(dateRange.end || new Date()).diff(dateRange.start, 'months', false) - 12 * years
  let result = ''

  if (years > 0) {
    result += `${years} year(s) `
  }

  if (months > 0) {
    result += `${months} month(s)`
  }

  return result
}

export const transform = item => {
  switch (item.type) {
    case 'position':
      return transformPosition(item)
    case 'education':
      return transformEducation(item)
    case 'job':
      return transformJob(item)
    default:
      return item
  }
}
