<template>
  <view>
    <ListItem >
      <view class="list-label" slot="left">采购人员</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>
    <ListItem >
      <view class="list-label" slot="left">登记人员</view>
      <picker class="list-value" slot="right">请选择</picker>
    </ListItem>

    <view class="white-bg margintb10">
      <ListItem>
        <view class="list-label" slot="left">货品种类</view>
        <picker class="list-value" slot="right">请选择</picker>
      </ListItem>
      <ListItem>
        <view class="list-label" slot="left">采购时间</view>
        <picker class="list-value" slot="right">请选择</picker>
      </ListItem>
      <ListItem>
        <view class="list-label" slot="left">采购查验</view>
        <picker class="list-value" slot="right">请选择</picker>
      </ListItem>
        <ListItem>
        <view class="list-label" slot="left">身体状况</view>
        <picker class="list-value" slot="right">请选择</picker>
      </ListItem>
       <ListItem :hasArrow='false'>
        <view class="list-label" slot="left">备注</view>
        <input class="list-input paddinglr1rem" slot="right" placeholder='请输入' />
      </ListItem>
    </view>
    <view class="primary-padding white-bg">
      <view class="list-label">凭证上传</view>
      <ImagePicker @change="onImage" />
    </view>
   <view class="primary-margin flex-row justify-between">
    <BarTitle text='明细清单' />
    <text class="iconfont font26 error iconxinzeng">&nbsp;添加</text>
   </view>
   <view class="white-bg margintb10">
      <ListItem :hasArrow='false'>
        <view class="list-label" slot="left">供应商</view>
        <input class="list-input paddinglr1rem" slot="right" placeholder='请输入' />
      </ListItem>
      <ListItem :hasArrow='false'>
        <view class="list-label" slot="left">货品名称</view>
        <input class="list-input paddinglr1rem" slot="right" placeholder='请输入' />
      </ListItem>
      <ListItem :hasArrow='false'>
        <view class="list-label" slot="left">单位</view>
        <input class="list-input paddinglr1rem" slot="right" placeholder='请输入' />
      </ListItem>
        <ListItem :hasArrow='false'>
        <view class="list-label" slot="left">数量</view>
        <input class="list-input paddinglr1rem" slot="right" placeholder='请输入' />
      </ListItem>
           <ListItem>
        <view class="list-label" slot="left">生产日期</view>
        <picker class="list-value" slot="right">请选择</picker>
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
