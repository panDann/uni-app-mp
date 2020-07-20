<template>
  <view>
     <ListItem :hasArrow="false">
      <view class="list-label" slot="left">课程名称</view>
      <input class="list-input paddinglr1rem" slot="right" placeholder="请输入" />
    </ListItem>
    <ListItem>
      <view class="list-label" slot="left">开始时间</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>

  <ListItem>
      <view class="list-label" slot="left">结束时间</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>
      <ListItem>
      <view class="list-label" slot="left">负责人</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>
   

    <button class="primary-bg primary-margin white">提交</button>
  </view>
</template>

<script>
import ListItem from '@src/components/list-item/index.vue';
export default {
  components: {
    ListItem,
  },
  data() {
    return {};
  },
  methods: {
    test() {
      console.log(1111);
    },
    onImage(imgs) {
      console.log(imgs);
    },
  },
};
</script>

<style lang='stylus' scoped>
.box-input {
  border: 1upx solid #999;
  width: 100upx;
  margin: 0 $primaryMargin;
  padding: 10upx;
  text-align: center;
}
</style>
