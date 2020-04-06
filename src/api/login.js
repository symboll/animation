import axios from './index'

export const login = ({ userName, password }) => {
  return axios.request({
    url: '/login',
    method: 'post',
    data: {
      name: userName,
      password
    }
  })
}

export const authorization = () => {
  return axios.request({
    url: '/authorization'
  })
}
