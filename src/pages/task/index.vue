<template>
  <view>
    <DatePicker />
    <view class="white primary-margin font32 primary-shadow raduis4 primary-padding primary-bg">
      <view class="flex-row justify-between">
        <text>
          <text class="iconfont paddinglr1rem iconrenwu3" />当前任务进度
        </text>
        <text>3/34</text>
      </view>
    </view>
    <scroll-view
      :scroll-top="scrollTop"
      scroll-y="true"
      class="scroll-con"
      @scrolltoupper="upper"
      @scrolltolower="lower"
      @scroll="scroll"
    >
        <BoxShadow v-for="item in list" :key="item.title">
          <view class="flex-row justify-between">
            <view class="flex5">
              <view class="font32 weight500">{{item.title}}</view>
              <view class="font24 line45 color-999">{{item.school}}</view>
              <view class="font24 color-999">截止时间：{{item.timeline}}</view>
            </view>

            <view class="mini-btn flex1 grey-btn circle-btn" v-if="item.status">完成</view>
            <view class="mini-btn flex1 primary-btn circle-btn" v-else>未完成</view>
          </view>
        </BoxShadow>
    </scroll-view>
  </view>
</template>

<script>
import DatePicker from '@src/components/date-picker/index.vue';
import BoxShadow from '@src/components/box-shadow/index.vue';
import Progerss from '@src/components/progress/bar.vue';
import ListItem from '@src/components/list-item/index.vue';

export default {
  components: {
    DatePicker,
    Progerss,
    ListItem,
    BoxShadow,
  },
  data() {
    return {
      title: 'Hello',
       list: [
        {
          title: '经营者名称',
          school: '经营者名称',
          timeline: '2020/02/03',
          status: 0,
		},
		 {
          title: '经营者名称',
          school: '经营者名称',
          timeline: '2020/02/03',
          status: 1,
		},
		 {
          title: '经营者名称',
          school: '经营者名称',
          timeline: '2020/02/03',
          status: 1,
        },
      ],
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang='stylus' scoped>
.error-min-btn {
  background: #FFE5DD;
}

color #FD6737 {
  border: solid 2upx $error;
}

.time {
  color: #999;
}
</style>
