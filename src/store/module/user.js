import { login, authorization } from '@/api/login'
import { getUsers } from '@/api/user'
import { setToken } from '@/lib/util'
const state = {
  name: '',
  userId: ''
}
const getters = {

}

const mutations = {
  SET_LOGINER_INFO: (state, params) => {
    state.name = params.name
    state.userId = params.id
  }
}

const actions = {
  // action(ctx, payload) {
  //  ctx 是上下文， payload 是参数载荷
  //  { commit, state, rootState, dispatch } = ctx
  // }
  async login ({ commit }, { userName, password }) {
    try {
      const res = await login({ userName, password })
      if (res.code === 200) {
        setToken(res.token)
        return Promise.resolve()
      } else {
        return Promise.reject(new Error('登录出错了!'))
      }
    } catch (err) {
      return Promise.reject(err)
    }
  },
  async authorization ({ commit }) {
    try {
      const res = await authorization()
      setToken(res.token)
      return Promise.resolve()
    } catch (err) {
      return Promise.reject(err)
    }
  },
  async getusers ({ commit }) {
    try {
      const res = await getUsers()
      console.log('res-->', res)
    } catch (err) {
      return Promise.reject(err)
    }
  }
}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
