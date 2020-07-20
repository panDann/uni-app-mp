<template>
  <view>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-12ch">消毒日期：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-12ch">消毒人员：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-12ch">消毒餐次：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <view class="primary-padding">
      <BarTitle text="器具消毒" />
    </view>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-12ch">消毒位置：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-12ch">消毒时长：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-12ch">紫外线灯：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <view class="margintb10">
      <ListItem :hasArrow="false">
        <view slot="left" class="font32 weight500">
          <view class="width-12ch">备注：</view>

          <text class="font24 color-999">2020</text>
        </view>
      </ListItem>
    </view>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500 flex-row">
        <view class="width-12ch">
          凭证：
        </view>

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
.width-12ch {
  display: inline-block;
  width: 10ch;
}
</style>
