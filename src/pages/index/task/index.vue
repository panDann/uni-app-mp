<template>
  <scroll-view
    :scroll-top="scrollTop"
    scroll-y="true"
    class="scroll-con"
    @scrolltoupper="upper"
    @scrolltolower="lower"
    @scroll="scroll"
  >
    <view class="font32" v-for="item in list" :key="item.title">
      <view class="font32 margintb20 text-center color-666">{{item.time}}</view>
      <BoxShadow>
        <view class="flex-row justify-between">
          <view class="flex5">
            <view class="font32 weight500">{{item.title}}</view>
            <view class="font24 line45 color-999">{{item.school}}</view>
            <view class="font24 color-999">截止时间：{{item.timeline}}</view>
          </view>

          <view class="mini-btn flex1 success-btn circle-btn" v-if="item.status">完成</view>
          <view class="mini-btn flex1 primary-btn circle-btn" v-else>未完成</view>
        </view>
      </BoxShadow>
    </view>
  </scroll-view>
</template>

<script>
// import CardNavigation from '@src/components/card-navigation/index.vue'

import BoxShadow from '@src/components/box-shadow/index.vue';
export default {
  components: {
    BoxShadow,
  },
  data() {
    return {
      list: [
        {
          time: '2月3日',
          title: '经营者名称',
          school: '经营者名称',
          timeline: '2020/02/03',
          status: 0,
		},
		 {
          time: '2月3日',
          title: '经营者名称',
          school: '经营者名称',
          timeline: '2020/02/03',
          status: 1,
		},
		 {
          time: '2月3日',
          title: '经营者名称',
          school: '经营者名称',
          timeline: '2020/02/03',
          status: 1,
        },
      ],
    };
  },
};
</script>

<style lang='stylus' scoped></style>
