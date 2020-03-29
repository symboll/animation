const state = {
  userName: 'Symbollee'
}
const getters = {
  userNameLast: (state) => {
    return state.userName.substring(-1, 1)
  }
}

const mutations = {
  SET_USER_NAME: (state, params) => {
    state.userName = params.userName
  }
}

const actions = {
  userAction ({ commit, state, rootState, dispatch }) {
    //
  }
}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
