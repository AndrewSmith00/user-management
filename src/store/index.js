import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
  },

  getters: {
    GET_BY_ID: (state) => (id) => {
      return state.users.find(item => item.id == id)
    }
  },

  mutations: {
    SET_USERS: (state, users) => {
      state.users = users;
    },

    ADD_USER: (state, user) => {
      state.users.push(user);
    },

    DELETE_BY_ID: (state, userId) => {
      const index = state.users.findIndexOf(item => item.id == userId);

      state.users.splice(index, 1);
    }
  },
  actions: {
    GET_USERS: async ({commit}) => {
      let response = await axios.get('/users');
      commit('SET_USERS', response.data);
    },

    POST_USER: async ({commit, state}, user) => {
      let length = state.users.length
      let id = 1;

      if (length != 0) {
        id = state.users[length-1].id + 1;
      }

      user.id = id;

      await axios.post('/users', user);
      commit('ADD_USER', user);
    },

    DELETE_USER: async ({commit}, {userId}) => {
      await axios.delete(`/${userId}`)
      commit('DELETE_BY_ID', userId);
    },

    CHANGE_USER: async ({commit}, user) => {
      await axios.put('/users', user);
      commit('CHANGE_BY_ID', user);
    }
  },
})
