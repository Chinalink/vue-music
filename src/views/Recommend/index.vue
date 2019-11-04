<!--
 * @Description: 推荐页面
 * @Author: HuGang
 * @Date: 2019-11-04 15:55:10
 * @LastEditTime: 2019-11-04 21:16:39
 -->
<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="bannerList.length" class="slider-wrapper">
        <slider>
          <div v-for="banner in bannerList" :key="banner.id">
            <a :href="banner.linkUrl">
              <img :src="banner.picUrl">
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'

import Slider from 'components/Slider'

export default {
  data () {
    return {
      bannerList: []
    }
  },
  components: {
    Slider
  },
  created() {
    this._getRecommend()
  },
  methods: {
    async _getRecommend() {
      let res = await getRecommend()
      if (res.code === ERR_OK) {
        this.bannerList = res.data.slider
      }
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>