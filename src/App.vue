<!--
 * @Description: App
 * @Author: HuGang
 * @Date: 2019-11-04 13:28:07
 * @LastEditTime: 2019-11-04 16:27:00
 -->
<template>
  <div id="app">
    <common-header></common-header>
    <common-tab></common-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from 'components/Header'
import Tab from 'components/Tab'

export default {
  name: 'App',
  components: {
    'common-header': Header,
    'common-tab': Tab
  }
}
</script>
