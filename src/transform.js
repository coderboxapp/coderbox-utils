
const noImage = 'https://s3-eu-west-1.amazonaws.com/coderbox/logos/nologo.jpg'

export const transformPosition = p => {
  let item = {}

  item.id = p._id
  item.title = p.title.name
  item.subtitle = p.company.name
  item.image = p.company.logo || noImage
  item.description = p.responsabilities || ''
  item.tags = p.technologies
  item.dateRange = p.timePeriod

  return item
}

export const transformEducation = e => {
  let item = {}

  item.id = e._id
  item.title = e.institution.name
  item.subtitle = e.degree
  item.image = e.institution.logo || noImage
  item.tags = e.technologies
  item.dateRange = e.timePeriod
  item.description = ''

  return item
}

export const transformJob = job => {
  let item = {}

  item.id = job._id
  item.title = job.title
  item.subtitle = job.location ? job.location.formatted_address : 'No office location'
  item.image = job.company.logo || noImage
  item.description = job.description
  item.tags = job.technologies
  item.dateRange = {
    start: job.createdAt
  }

  return item
}

export default item => {
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
