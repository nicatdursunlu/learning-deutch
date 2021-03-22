import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home';
import Books from "@/views/Books";
import Words from "@/views/Words";
import Signin from "@/views/Signin";
import Profile from "@/views/Profile";
import Signup from "@/views/Signup";
import Book from "@/views/Book";

import store from '../store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: Book,
    props: true
  },
  {
    path: '/words',
    name: 'Words',
    component: Words
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: AuthGuard
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

function AuthGuard(from, to, next) {
  if(store.getters.isUserAuthenticated) {
    next()
  }
  else
  {
    next('signin')
  }
}
