import axios from 'axios'

export default () => {
  // noinspection JSAnnotator
  return axios.create({
    baseURL: 'http://localhost:8087/'
  })
}
