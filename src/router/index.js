import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import notes from '@/components/notes/notes'
import createnote from '@/components/notes/createnote'
import profile from '@/components/user/profile'
import signin from '@/components/user/signin'
import signup from '@/components/user/signup'
import note from '@/components/notes/note'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/notes',
      name: 'notes',
      component: notes
    },
    {
      path: '/notes/new',
      name: 'createnote',
      component: createnote
    },
    {
      path: '/notes/:id',
      name: 'note',
      props: true,
      component: note
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    }
  ],
  mode: 'history'
})
