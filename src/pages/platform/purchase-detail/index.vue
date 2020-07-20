<template>
  <view>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-10ch">        采购验收时间：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-10ch">        采购人员：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-10ch">        验收人员：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <view class="primary-margin">
      <!-- <BarTitle text="器具消毒" /> -->
    </view>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-10ch">        货品种类：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        <view class="width-10ch">        采购查验：</view>

        <text class="font24 color-999">2020</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500">
        明细清单：
        <view class="font24 color-999 pre-wrap">
          1、供应商：广东食品公司
          货品名称：蔬菜瓜果
          单位：xxxxxx
          数量：10
          生产日期：2020-06-06
          到期日期：2020-09-09
        </view>
      </view>
    </ListItem>
    <view class="margintb10">
      <ListItem :hasArrow="false">
        <view slot="left" class="font32 weight500">
        <view class="width-10ch">        备注：</view>
          
          <text class="font24 color-999">2020</text>
        </view>
      </ListItem>
    </view>
    <ListItem :hasArrow="false">
      <view slot="left" class="font32 weight500 flex-row">
        <view class="width-10ch">        凭证：</view>
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
  width: 12ch;
}
</style>
