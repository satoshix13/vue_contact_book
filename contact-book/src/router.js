import Vue from 'vue'
import Router from 'vue-router'
import ContactList from './views/ContactList.vue'
import ContactPage from './views/ContactPage.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: "/",
        name: "ContactList",
        component: ContactList,
      },
      {
        path: "/contactpage/:id",
        name: "ContactPage",
        component: ContactPage,
        props: true,
      }
    ]
})