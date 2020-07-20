<template>
  <view>
    <ListItem>
      <view class="list-label" slot="left">用餐日期</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>

    <ListItem :hasArrow="false">
      <view class="list-label" slot="left">用餐人数</view>
      <input class="list-input paddinglr1rem" slot="right" placeholder="请输入" />
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
