import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Operations from './modules/operations'
import Chat from './modules/chat'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    Operations,
    Chat
  }
})
