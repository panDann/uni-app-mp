<template>
  <view>
    <DatePicker backType='month' />
      <BoxShadow v-for="item in list" :key="item.project">
    <view class="font28 primary-padding color-333 line-h">
        <view class="flex-row justify-between">自查项目：{{item.project}}</view>
        <view class="flex-row justify-between">食安专员：{{item.person}}</view>
        <view class="flex-row justify-between">联系电话：{{item.phone}}</view>
        <view class="flex-row justify-between">自查时间： 12:32{{item.time}}</view>
        <view class>
          自查拍照：
          <ImagePicker :urls="item.imgs" />
        </view>
    </view>
      </BoxShadow>
  </view>
</template>

<script>
import DatePicker from '@src/components/date-picker/index.vue';
import ImagePicker from '@src/components/image-picker/index.vue';
import BoxShadow from '@src/components/box-shadow/index.vue';

export default {
  components: {
    DatePicker,
    BoxShadow,
    ImagePicker,
  },
  data() {
    return {
      title: 'Hello',
      list: [
        {
          project: '111',
          person: '111',
          phone: '111',
          time: '111',
          imgs: [],
        },
        {
          project: '111',
          person: '111',
          phone: '111',
          time: '111',
          imgs: [],
        },
        {
          project: '111',
          person: '111',
          phone: '111',
          time: '111',
          imgs: [],
        },
      ],
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang='stylus' scoped>
.line-h
	line-height 46upx
</style>
