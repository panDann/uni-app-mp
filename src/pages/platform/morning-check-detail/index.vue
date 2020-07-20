<template>
  <view>
    <!-- <view class="list-con"> -->
    <view class="white-bg primary-padding flex-row justify-between">
      <view class="flex-row justify-between">
        <image class="avator" :src="msg.img" />
        <view>
          <view class="name ">{{msg.name}}</view>
          <view class="phone">{{msg.phone}}</view>
        </view>
      </view>
      <text class="position">{{msg.time}}</text>
    </view>

    <view class="margintb10">
      <BoxShadow :hasArrow="false" v-for="item in list" :key="item.name">
        <view class="flex-row justify-between">
          <text class="font32 weight500 flex5">{{item.name}}</text>
          <view class="mini-btn primary-btn flex1 circle-btn" v-if="item.status">正常</view>
          <view class="mini-btn error-btn flex1 circle-btn" v-else>异常</view>
        </view>
      </BoxShadow>
    </view>
  </view>
</template>

<script>
// import CardNavigation from '@src/components/card-navigation/index.vue'

import ListItem from '@src/components/list-item/index.vue';
import BoxShadow from '@src/components/box-shadow/index.vue';
export default {
  components: {
    BoxShadow,
    ListItem,
  },
  data() {
    return {
      msg: {
        name: '222',
        position: '店员',
        img: '',
        phone: 111111,
        time: '2019',
      },
      list: [
        {
          name: '222',
          status: 1,
        },
        {
          name: '222',
          status: 1,
        },
        {
          name: '222',
          status: 0,
        },
      ],
    };
  },
};
</script>

<style lang='stylus' scoped>
// @import './index.styl';

.avator {
  width: 100upx;
  height: 100upx;
  margin-right: 10upx;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(151, 151, 151, 1);
}

.name {
  margin: 10upx;
  font-size: 32upx;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 45upx;
}

.position {
  margin: 10upx;
  font-size: 24upx;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 33upx;
}

.phone {
  margin: 10upx;
  font-size: 28upx;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 40upx;
}
// .mini-btn
// 	display inline-block
// 	height auto;
// 	padding: 5upx 
// 	font-size:26upx;
// 	font-weight:400;
// 	text-align: center
// 	line-height:36upx;
// 	border-radius 6upx
// .primary-btn
// 	background rgba(214,233,255,1)
// 	color $primaryColor
// 	border 2upx solid $primaryColor
// .error-btn
// 	background  #FFE5DD
// 	color $error
// 	border 2upx solid $error
// .circle-btn
//     border-radius: 30upx
</style>
