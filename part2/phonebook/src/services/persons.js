import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject, {})
  return request
    .then(response => {
      return response.data
    })
    .catch(error => {
      throw error.response.data.error
    })
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request
    .then(response => response.data)
    .catch(error => {
      throw error.response.data.error
    })
}

const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request
}

const operations = { getAll, create, update, remove }

export default operations
