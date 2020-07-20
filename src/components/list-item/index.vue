
<template>
<view class="border-con" @click="$emit('click')">
   <view class="con" :class="border&&'border'">
    <slot name="left" />
    <slot name="center" />
    <view class="con">
      <slot name="right" />
      <text class="iconfont icon iconarrow-right" v-show="hasArrow" />
    </view>
  </view>
</view>
</template>
<script>
export default {
  props: {
    hasArrow: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang='stylus' scoped>
@import './index.styl'
</style>
