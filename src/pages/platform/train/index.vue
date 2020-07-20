<template>
  <view>
    <Search />
    <DatePicker />

    <BoxShadow v-for="item in list" :key="item.name">
        <view>
          <text class="font32">{{item.name}}</text>
          <view class="font24 color-999 margintb10">食堂名称：{{item.canteen}}</view>
          <view class="font24 color-999 margintb10">负责人员：{{item.charge}}</view>
          <view class="font24 color-999 margintb10">开始时间：{{item.start}}</view>
          <view class="font24 color-999 margintb10">结束时间：{{item.end}}</view>
        </view>
        <view class="btn-con">
			
          <button class="primary-bg white font24   right">签到</button>
          <button class="primary-color font24  primary-border right">签到表</button>
        </view>

    </BoxShadow>
    <button class="white primary-bg primary-margin">
      <text class="iconfont iconxinzeng font32" />添加培训
    </button>
  </view>
</template>

<script>
import DatePicker from '@src/components/date-picker/index.vue';
import BoxShadow from '@src/components/box-shadow/index.vue';
import Search from '@src/components/search/index.vue';

export default {
  components: {
    DatePicker,
    BoxShadow,
    Search,
  },
  data() {
    return {
      title: 'Hello',
      list: [
        {
          name: '1111',
          canteen: '111',
          charge: '111',
          start: '2019-09-09',
          end: '2019-09-09',
        },
      ],
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang='stylus' scoped>
.right
	float right
	margin 10upx
.primary-border
	border 2upx solid $primaryColor
.btn-con
	overflow hidden
</style>
