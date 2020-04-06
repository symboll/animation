import axios from 'axios'
import { baseURL } from '../config'
import { getToken } from '@/lib/util'
import store from '@/store'
class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return config
  }
  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      if (!Object.keys(this.queue).length) {
        store.commit('SET_SPINING', {
          spining: true
        })
      }
      this.queue[url] = true
      config.headers['token'] = getToken()
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      Reflect.deleteProperty(this.queue, url)
      store.commit('SET_SPINING', {
        spining: false
      })
      const { data } = res
      return data
    }, error => {
      Reflect.deleteProperty(this.queue, url)
      store.commit('SET_SPINING', {
        spining: false
      })
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
