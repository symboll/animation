import { getAppName } from '../api/app'

const actions = {
  // updateAppName: ({ commit }) => {
  //   getAppName().then(res => {
  //     commit('SET_APP_NAME', {
  //       appName: res.data.appName
  //     })
  //   })
  // }
  async updateAppName ({ commit }) {
    try {
      const res = await getAppName()
      const { data: { appName } } = res
      commit('SET_APP_NAME', {
        appName
      })
    } catch (err) {
      console.log('err->', err)
    }
  }
}

export default actions
