<!--
 * @Description: 轮播图
 * @Author: HuGang
 * @Date: 2019-11-04 17:34:39
 * @LastEditTime: 2019-11-04 21:34:00
 -->
<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot"></span>
    </div>
  </div>
</template>

<script>
import BatterScroll from 'better-scroll'
import { addClass } from 'assets/utils/dom'

export default {
  data() {
    return {}
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted() {
    console.log(this.$refs.sliderGroup.children)
    console.log(this.$refs.slider.clientWidth)
    this.$nextTick(() => {
      this._setSliderWidth()
      this._initSlider()
    })
  },
  methods: {
    _setSliderWidth() {
      this.children = this.$refs.sliderGroup.children
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')

        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }

      if (this.loop) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSlider() {
      this.slider = new BatterScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        slide: {
          loop: this.loop,
          threshold: 0.3
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>