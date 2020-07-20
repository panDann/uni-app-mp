<template>
  <view>
    <ListItem>
      <view class="list-label" slot="left">留样时间</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>
    <ListItem>
      <view class="list-label" slot="left">留样人员</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>
    <ListItem>
      <view class="list-label" slot="left">留样餐次</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>

    <view class="margintb10">
      <ListItem>
        <view class="list-label" slot="left">审核人员</view>
        <picker class="list-value" slot="right">请选择</picker>
      </ListItem>
    </view>

    <ListItem>
      <view class="list-label" slot="left">留样数量</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>
    <ListItem :hasArrow='false'>
      <view class="list-label" slot="left">留样规定</view>
      <view slot="right" class="flex-row color-999">
        冷藏 <input class="box-input"  />  h
      </view>
    

    </ListItem>
    <ListItem :hasArrow='false'>
      <view class="list-label" slot="left">留样食品</view>
      <input class="list-input paddinglr1rem" slot="right" placeholder="请输入食品名称" />
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
    test(){
      console.log(1111);
      
    },
    onImage(imgs) {
      console.log(imgs);
    },
  },
};
</script>

<style lang='stylus' scoped>
.box-input
   border 1upx solid #999
   width 100upx
   margin $primaryMargin
   padding 10upx
   text-align center
</style>
