<template>
  <scroll-view
    :scroll-top="scrollTop"
    scroll-y="true"
    class="scroll-con"
    @scrolltoupper="upper"
    @scrolltolower="lower"
    @scroll="scroll"
  >
    <BoxShadow v-for="item in list" :key="item.title" @click="leapTo">
      <view class="flex-row justify-between">
        <view class="font32 weight500">{{item.title}}</view>
        <view class="font24 color-999">{{item.time}}</view>
      </view>
      <view class="content weight400 color-999 font28">{{item.content}}</view>
    </BoxShadow>
  </scroll-view>
</template>

<script>
import BoxShadow from '@src/components/box-shadow/index.vue';
import {platformSecurityDetailPath} from '@src/consts/paths'
export default {
  components: {
    BoxShadow,
  },
  data() {
    return {
      title: 'Hello',
      list: [
        {
          title: '1111',
          time: '2019-09-09',
          content:'文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
        },
      ],
    };
  },
  onLoad() {},
  methods: {
    onDate(date) {

	},
	leapTo(){
		uni.navigateTo({url:platformSecurityDetailPath})
	}
  },
};
</script>

<style lang='stylus' scoped>
.content {
  white-space nowrap
  text-overflow ellipsis
  overflow hidden
}
</style>
