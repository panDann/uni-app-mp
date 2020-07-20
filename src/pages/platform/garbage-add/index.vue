<template>
  <view>
    <ListItem>
      <view class="list-label" slot="left">处理时间</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>
    <ListItem>
      <view class="list-label" slot="left">处理人员</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>
    <ListItem :hasArrow="false">
      <view class="list-label" slot="left">接收单位</view>
      <input class="list-input paddinglr1rem" slot="right" placeholder="请输入" />
    </ListItem>
    <ListItem :hasArrow="false">
      <view class="list-label" slot="left">接收人员</view>
      <input class="list-input paddinglr1rem" slot="right" placeholder="请输入" />
    </ListItem>
    <ListItem :hasArrow="false">
      <view class="list-label" slot="left">接收人员身份证</view>
      <input class="list-input paddinglr1rem" slot="right" placeholder="请输入" />
    </ListItem>

   <view class="primary-margin">
      <BarTitle text="废弃物处理登记" />
    </view>
      <ListItem :hasArrow="false">
      <view class="list-label" slot="left">泔水数量</view>
      <view slot="right" class="flex-row color-999">
        <input class="box-input" /> kg
      </view>
    </ListItem>
     <ListItem :hasArrow="false">
      <view class="list-label" slot="left">废油数量</view>
      <view slot="right" class="flex-row color-999">
        <input class="box-input" /> kg
      </view>
    </ListItem>
     <ListItem :hasArrow="false">
      <view class="list-label" slot="left">其他废弃物</view>
      <view slot="right" class="flex-row color-999">
        <input class="box-input" /> kg
      </view>
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
import BarTitle from '@src/components/bar-title/index.vue';
import ListItem from '@src/components/list-item/index.vue';
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
