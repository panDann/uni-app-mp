<template>
  <view>
    <DatePicker @change="onDate" back-type="month" />

    <view class="list-con">
      <ListItem v-for="item in list" :key="item.name" :hasArrow='false'>
        <view slot="left" class="font32 weight500">
          <view>{{item.time}}</view>
        </view>
        <text slot="right" class="font28 color-333">{{item.count}}人用餐</text>
      </ListItem>
    </view>
    <button class="white primary-bg primary-margin">
      <text class="iconfont iconxinzeng font32" />新增用餐
    </button>
  </view>
</template>

<script>
import DatePicker from '@src/components/date-picker/index.vue';
import BarTitle from '@src/components/bar-title/index.vue';
import ListItem from '@src/components/list-item/index.vue';

export default {
  components: {
    DatePicker,
    BarTitle,
    ListItem,
  },
  data() {
    return {
      title: 'Hello',
      list: [
        {
          count: '1111',
          time: '2019-09-09',
        },
        {
          count: '1111',
          time: '2019-09-09',
        },

        {
          count: '1111',
          time: '2019-09-09',
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
.list-con {
  border-top: solid 1px #E5E5E5;
  line-height: 45upx;
}
</style>
