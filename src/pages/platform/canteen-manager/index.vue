<template>
  <view>
    <view class="header">
      <view class="flex-row justify-between">
        <text class="name">{{baseInfo.name}}</text>
       
      </view>
      <view>
        <text class="iconfont icon icondingwei" />
        地址：{{baseInfo.address}}
      </view>
      <view>
        <text class="iconfont icon iconfuzeren" />
        负责人：{{baseInfo.charge}}
      </view>
      <view>
        <text class="iconfont icon icondianhua" />
        电话：{{baseInfo.phone}}
      </view>
    </view>
    <view class="margintb10 white-bg primary-padding flex-row justify-around">
      <view class="item">
        <view class="font48 primary-color">2121</view>
        <text class="font28">食堂人数</text>
      </view>
      <view class="bar" />
      <view class="item">
        <view class="font48 error">2121</view>
        <text class="font28">持证人数</text>
      </view>
      <view class="bar" />
      <view class="item">
        <view class="font48 success">2121</view>
        <text class="font28">异常人数</text>
      </view>
    </view>
     <ListItem >
        <text class="font32" slot="left">健康证管理</text>
      </ListItem>
      <ListItem >
        <text class="font32" slot="left">记录表管理</text>
      </ListItem>
  </view>
</template>

<script>
import CardNavigation from '@src/components/card-navigation/index.vue';
import ListItem from '@src/components/list-item/index.vue';

export default {
  components: {
    CardNavigation,
    ListItem
  },
  data() {
    return {
      baseInfo: {
        name: '3333',
        address: '333',
        charge: '222',
        phone: '212122121',
      },
      lsit: [],
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang='stylus' scoped>
@import './index'
.bar {
    height: 60upx;
    width: 3upx;
    background: #CCC;
  }
</style>
