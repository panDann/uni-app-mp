<template>
  <view>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
          <view class="width-12ch">使用时间：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
          <view class="width-12ch">使用人员：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
      <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
          <view class="width-12ch">使用餐次：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>

    <view class="margintb10">
      <ListItem :hasArrow="false">
        <view slot="left" class="font32 weight500">
          <view class="width-12ch">添加剂类型：</view>
          <text class="font24 color-999">2020</text>
        </view>
      </ListItem>
      <ListItem :hasArrow="false">
        <view slot="left" class="font32 weight500">
          <view class="width-12ch">产品名称：</view>
          <text class="font24 color-999">2020</text>
        </view>
      </ListItem>
      <ListItem :hasArrow="false">
        <view slot="left" class="font32 weight500">
          <view class="width-12ch">供应商：</view>
          <text class="font24 color-999">2020</text>
        </view>
      </ListItem>
    </view>

    <view class="margintb10">
      <ListItem :hasArrow="false">
        <view slot="left" class="font32 weight500">
          成品明细：
          <view class="font24 color-999 pre-wrap">
            <view>成品名称：xxxx名称</view>
            <view>消耗数量：3g</view>
            <view>成品数量：3kg</view>
            <view>实际比例：3g/kg</view>
          </view>
        </view>
      </ListItem>
    </view>

    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
          <view class="width-12ch">备注：</view>
        
        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500 flex-row">
          <view class="width-12ch">凭证：</view>
        <image class="font24 holder-img" src />
      </view>
    </ListItem>
  </view>
</template>

<script>
import BarTitle from '@src/components/bar-title/index.vue';
import ListItem from '@src/components/list-item/index.vue';

export default {
  components: {
    BarTitle,
    ListItem,
  },
  data() {
    return {
      title: 'Hello',
      list: [
        {
          name: '1111',
          time: '2019-09-09',
          type: '早餐',
        },
        {
          name: '1111',
          time: '2019-09-09',
          type: '早餐',
        },

        {
          name: '1111',
          time: '2019-09-09',
          type: '早餐',
        },
      ],
    };
  },
  onLoad() {},
  methods: {
    onDate(date) {},
  },
};
</script>

<style lang='stylus' scoped>
.width-12ch
  display inline-block
  width 11ch
</style>
