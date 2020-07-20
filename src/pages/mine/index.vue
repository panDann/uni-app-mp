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
    </view>

    <view class="margintb10">
      <ListItem  :border='false'>
          <text class="font32 weight500" slot="left">密码设置</text>
      </ListItem>
    </view>
	<button class="primary-bg white primary-margin">退出登录</button>
  </view>
</template>

<script>

import ListItem from '@src/components/list-item/index.vue';
export default {
  components: {
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
</style>
