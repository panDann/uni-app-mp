<template>
  <view>
    <ListItem :border="false">
      <view class="list-label" slot="left">晨检员工</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>

    <view class="white-bg margintb10">
      <ListItem>
        <view class="list-label" slot="left">健康证</view>
        <picker class="list-value" slot="right">请选择</picker>
      </ListItem>
      <view class="primary-padding">
        <view class="list-label">添加图片</view>
        <ImagePicker @change="onImage" />
      </view>
    </view>
    <ListItem>
      <view class="list-label" slot="left">体温检测</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>
    <ListItem>
      <view class="list-label" slot="left">手部检查</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>
    <ListItem>
      <view class="list-label" slot="left">身体状况</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>

    <ListItem>
      <view class="list-label" slot="left">检查时间</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>
    <view class="fix-bottom primary-padding">
      <button class="primary-bg white">提交</button>
    </view>
  </view>
</template>

<script>
import ListItem from '@src/components/list-item/index.vue';
import ImagePicker from '@src/components/image-picker/index.vue';
export default {
  components: {
    ListItem,
    ImagePicker,
  },
  data() {
    return {};
  },
  methods: {
    onImage(imgs) {
      console.log(imgs);
    },
  },
};
</script>

<style lang='stylus' scoped></style>
