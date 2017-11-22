import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/portal/Index'
import ArticleList from '@/portal/article/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/article/list',
      name: 'Article',
      component: ArticleList
    }
  ]
})
