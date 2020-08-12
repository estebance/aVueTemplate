import Vuex from 'vuex';

let store = {
  state: {
    userId: null
  },
  mutations: {
    defUserId(state, userId){
      state.userId = userId;
    }
  },
  actions: {
    fetchUser ({state, commit, dispatch}, payload) {
      console.log('payload')
    },
  },
  getters: {
    userId (state){
      return state.userId;
    },
  }
};

export default store;
