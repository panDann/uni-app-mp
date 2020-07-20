<template>
  <view>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 width40 weight500">
        <view class="width-10ch">清洗日期：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-10ch">清洗人员：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-10ch">清洗区域：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>

    <view class="margintb10">
   
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-10ch">备注：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500 flex-row">
        <view class="width-10ch">凭证：</view>

        <image class="font24 holder-img" src />
      </view>
    </ListItem>
  </view>
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
.width-10ch {
  display: inline-block;
  width: 9ch;
}
</style>
