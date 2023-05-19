export const state = () => ({
    users: []
  })
  
  export const mutations = {
    setUsers(state, newUsers) {
      state.users = newUsers
    }
  }
  
  export const getters = {
    getUsers(state) {
      return state.users
    }
  }
  
  export const actions = {
    changeUsers({ commit }, newUsers) {
      commit('setUsers', newUsers)
    }
  }