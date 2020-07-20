<template>
  <view>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-10ch">处理时间：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-10ch">处理人员：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>

    <view class="margintb10">
      <ListItem :hasArrow="false">
        <view slot="left" class="font32 weight500">
          <view class="width-10ch">接收单位：</view>

          <text class="font24 color-999">2020</text>
        </view>
      </ListItem>
      <ListItem :hasArrow="false">
        <view slot="left" class="font32 weight500">
          <view class="width-10ch">接收人员：</view>

          <text class="font24 color-999">2020</text>
        </view>
      </ListItem>
      <ListItem :hasArrow="false">
        <view slot="left" class="font32 weight500">
          <view class="width-10ch">人员身份证：</view>

          <text class="font24 color-999">2020</text>
        </view>
      </ListItem>
    </view>

    <view class="margintb10">
      <ListItem :hasArrow="false">
        <view slot="left" class="font32 weight500">
          废弃物处理登记：
          <view class="font24 color-999 pre-wrap">
            <view>泔水：3kg</view>

            <view>费油：3kg</view>

            <view>其他废弃物：3kg</view>
          </view>
        </view>
      </ListItem>
    </view>

    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-10ch">备注：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500 flex-row">
        <view class="width-10ch">
          <text>凭证：</text>
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
.width-10ch {
  display: inline-block;
  width: 10ch;
}
</style>

