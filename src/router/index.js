/*
 * @Description: 路由配置
 * @Author: HuGang
 * @Date: 2019-11-04 15:03:29
 * @LastEditTime: 2019-11-04 16:05:55
 */
import Vue from 'vue'
import Router from 'vue-router'

import Recommend from '@/views/Recommend'
import Singer from '@/views/Singer'
import Rank from '@/views/Rank'
import Search from '@/views/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
