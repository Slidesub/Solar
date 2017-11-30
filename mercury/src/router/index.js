import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/portal/Index'
import ArticleList from '@/portal/article/List'
import ArticleEdit from '@/portal/article/Edit'

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
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/article/edit',
      name: 'ArticleEdit',
      component: ArticleEdit
    }
  ]
})

