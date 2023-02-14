import { userService } from "../services/user-service"

export const userStore = {
  state: {
    user: null,
  },
  getters: {
    user({ user }) {
      return user
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
  },
  actions: {
    async getUser({ commit }) {
      const user = await userService.getLoggedinUser()
      commit("setUser", user)
    },
    async logout({ commit }) {
      try {
        await userService.logout()
        commit("setUser", null)
      } catch (err) {
        console.log("Cannot logout", err)
        throw err
      }
    },
    async login({ commit }, currUser) {
      try {
        const user = await userService.login(currUser.username)
        commit("setUser", user)
        return user
      } catch (err) {
        console.log("Cannot login", err)
        throw err
      }
    },
  },
}
