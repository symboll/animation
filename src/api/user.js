import axios from './index'

export const getUsers = () => {
  return axios.request({
    url: '/users'
  })
}
