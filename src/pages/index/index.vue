<template>
  <view>
    <ListItem :hasArrow="false" v-for="item in list" :key="item.name">
      <view slot="left" class="flex-row align-center">
        <text class="icon iconfont" :class="item.icon +' '+item.color" />
        <view>
          <view class="font34 weight500">{{item.name}}</view>
          <view class="font26 line45 color-999">{{item.summary}}</view>
        </view>
      </view>
      <text slot="right" class="font26 color-999">{{item.time}}</text>
    </ListItem>
  </view>
</template>

<script>
import ListItem from '@src/components/list-item/index.vue';

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      count: '1',
      list: [
        {
          name: '食堂管理',
          time: '12:30',
          color:'color-94C6FF',
          icon: 'iconshitangguanli',
          summary: '6.18日食堂日报已更新。',
        },
        {
          name: '学习考核',
          time: '12:30',
          color:'color-98CFC6',
          icon: 'iconxuexikaohe',
          summary: '6.18日食堂日报已更新。',
        },
        {
          name: '食堂管理',
          time: '12:30',
          color:'color-72BEE4',
          icon: 'iconrenwu2',
          summary: '6.18日食堂日报已更新。',
        },
      ],
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang='stylus' scoped>
@import './index';

.icon {
  font-size: 100upx;
  margin: 10upx 20upx 10upx 0;
}
.color-94C6FF
   color #94C6FF
.color-98CFC6
   color #98CFC6
.color-72BEE4
   color #72BEE4
</style>
