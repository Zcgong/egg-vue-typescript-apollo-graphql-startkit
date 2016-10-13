import * as Vue from 'vue'
import Apollo from '../apollo'
import { login } from '../../service/auth'

const apollo = Apollo.apollo
const gql = Apollo.gql

export default {
  state: {
    user: {}
  },
  actions: {
    SIGN_IN: ({ commit }, { user, pwd }) => {
      return login(user, pwd)
        .then(data => {
          commit('SET_USER', data)
          return data
        })
    }
  },
  mutations: {
    SET_USER: (state, data) => {
      state.user = data
    }
  }
}
