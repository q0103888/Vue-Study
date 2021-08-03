import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Book from '../components/Book.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/books/:bookId',
    name: 'Book',
    component: Book
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
