<template>
  <view>
    <ListItem>
      <view class="list-label" slot="left">清洗日期</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>
    <ListItem>
      <view class="list-label" slot="left">清洗人员</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>
    <ListItem>
      <view class="list-label" slot="left">清洗区域</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>


    <view class="margintb10">
      <ListItem :hasArrow="false">
        <view class="list-label" slot="left">备注</view>
        <input class="list-input paddinglr1rem" slot="right" placeholder="请输入" />
      </ListItem>
    </view>

    <view class="primary-padding margintb10 white-bg">
      <view class="list-label">凭证上传</view>
      <ImagePicker @change="onImage" />
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
