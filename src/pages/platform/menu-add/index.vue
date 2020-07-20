<template>
  <view>
    <ListItem>
      <view class="list-label" slot="left">用餐时间</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>

    <view class="primary-margin flex-row justify-between">
      <BarTitle text="明细清单" />
      <text class="iconfont font26 error iconxinzeng">&nbsp;添加菜单</text>
    </view>
    <view class="margintb10 white-bg">
      <ListItem :hasArrow="false">
        <view class="list-label" slot="left">菜肴名称</view>
        <input class="list-input paddinglr1rem" slot="right" placeholder="请输入" />
      </ListItem>
      <view class="primary-padding">
        <view class="list-label">图片上传</view>
        <ImagePicker @change="onImage" />
      </view>

      <ListItem :hasArrow="false">
        <view class="list-label" slot="left">选择时间</view>
        <input class="list-input paddinglr1rem" slot="right" placeholder="请输入" />
      </ListItem>
    </view>
    <button class="primary-bg primary-margin white">提交</button>
  </view>
</template>

<script>
import ListItem from '@src/components/list-item/index.vue';
import BarTitle from '@src/components/bar-title/index.vue';
import ImagePicker from '@src/components/image-picker/index.vue';
export default {
  components: {
    ListItem,
    BarTitle,
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
