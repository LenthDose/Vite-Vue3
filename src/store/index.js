import { createStore } from "vuex";

const store = createStore({
  state () {
    return {
      user_id: '',
      user_nick: '',
      create_time: ''
    }
  },
  mutations: {
    SET_USER_ID: (state, user_id) => {
        state.user_id = user_id
    },
    SET_USER_NAME: (state, user_nick) => {
      state.user_nick = user_nick
    },
    SET_CREATE_TIME: (state, create_time) => {
      state.create_time = create_time
    }
  },

  actions: {
    setId({commit}, user_id){
        commit('SET_USER_ID',user_id)
    },
    setName({commit}, user_nick){
      commit('SET_USER_NAME',user_nick)
    },
    setTime({commit}, create_time){
      commit('SET_CREATE_TIME',create_time)
    }
  }
})

export default store

