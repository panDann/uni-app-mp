<template>
  <view class="white-bg padding1rem text-center">
    <view class="font32 weight600">{{item.title}}</view>
    <view class="font24 content color-999">{{item.content}}</view>

    <view class="font24 color-999 margintb1rem flex-row justify-between">
    <view class="hidden"></view>
    <view>
      <view>{{item.origin}}</view>
      <view>{{item.time}}</view>
    </view>
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      item: {
        title: '标题',
        content: '文本文本文本文本文本文本',
        origin: '学校',
        time: '2020-01-03',
      },
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang='stylus' scoped>
.content {
  text-align: left;
}
</style>
