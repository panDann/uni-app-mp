
<template>
  <view class='con' @click="$emit('click')">
    <view >
    <view  class="name">{{data.name}} </view>
    <view  class="address"><text class="iconfont address icondingwei" />&nbsp;{{data.address}}</view>
    </view>
    <text class="iconfont icon iconarrow-right" />
  </view>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: ()=>({
          name:'',
          address:''
      }),
    },
  },
};
</script>

<style lang='stylus' scoped>
@import './index.styl'
</style>
