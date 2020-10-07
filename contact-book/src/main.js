import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false



Vue.use(Vuex)



const store = new Vuex.Store({
  state: {
    contacts:[]
  },
  getters:{
    getContacts(state){
      return state.contacts
    }
  },
  mutations: {
    addContact(state,newContact) {
      state.contacts.push(newContact)
    },
    deleteContact(state,index){
      state.contacts.splice(index,1)
    }
  }

})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
