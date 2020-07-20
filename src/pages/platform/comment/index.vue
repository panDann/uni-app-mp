<template>
    <view>
        <search :value="inp" :placeholder="'搜索评论'"/>
        <view class="date-con">
            <date-picker :backType="backType" @change="getDate"/>
        </view>
        <tab style="height:54rpx;line-height:54rpx" :value="curTab" :tabList="tabs" @input="tabChange">
			<tab-pane :name="tabs[0].key">
				<view class="comment-con" v-for="(item, index) in commentList" :key="index">
                    <view class="head-img"><image :src="item.headImg"/></view>
                    <view class="content">
                        <view class="title">
                            <text>{{item.author}}</text>
                            <text>{{item.date}}</text>
                        </view>
                        <view><text>{{item.content}}</text></view>
                        <view class="img-list">
                            <image v-for="(src, index) in item.imgs" :key="index" :src="src"/>
                        </view>
                        <view class="comment-con" style="padding: 0" v-for="(replay, index) in item.replyes" :key="index">
                            <view class="head-img"><image :src="replay.headImg"/></view>
                            <view class="content">
                                <view class="title">
                                    <text>{{replay.author}}</text>
                                    <text>{{replay.date}}</text>
                                </view>
                                <view><text>{{replay.content}}</text></view>
                            </view>
                        </view>
                    </view>
                </view>
                <button class="primary-bg primary-margin white" @click="addComment()">添加评论</button>
			</tab-pane>
			<tab-pane :name="tabs[1].key">
				<text>我的评论</text>
			</tab-pane>
		</tab>
    </view>
</template>

<script>
import Search from '@/components/search/index';
import DatePicker from '@/components/date-picker/index';
import Tab from '@/components/tab/index';
import TabPane from '@/components/tab-pane/index';
export default {
    components: {
        Search,
        DatePicker,
        Tab,
        TabPane
    },

    data() {
        return {
            backType: '',
            curTab: 0,
            tabs: [
                {label: '食堂公示', key: 0},
                {label: '我的评论', key: 1}
            ],
            commentCount: 0,
            commentList: [
                {   
                    headImg: '../../static/canteen.png',
                    author: '张三丰', 
                    date: '2020-06-06 12:00', 
                    content: '前几天，去食堂吃饭了，卫生不错～', 
                    imgs: ['../../static/canteen.png', '../../static/canteen.png', '../../static/canteen.png'],
                    replyes: [
                        {author: '李贰贰', headImg: '../../static/canteen.png', date: '2020-06-06 12:00', content: '谢谢，我们会继续努力的～'}
                    ]
                }
            ]
        }
    },

    methods: {
        getDate(date) {
            console.log(date)
        },

        tabChange(val) {
            console.log(val)
        },

        addComment() {
            uni.navigateTo({
                url: '../comment-add/index'
            })
        }
    }
}
</script>

<style scoped lang="stylus">
.date-con
    margin: 2rpx 0
    height: 80rpx
    line-height: 80rpx
    background: #fff
    border-top solid 1upx $primaryBorderColor
    border-bottom solid 1upx $primaryBorderColor
.comment-count
    margin: 0 0 1rpx 0
    padding: 0 0 0 24prx
    height: 80rpx
    line-height: 80rpx
    font-size: 28rpx
    font-weight: 500
    color: #333
.comment-con
    display: flex
    margin: 1rpx 0
    padding: 26rpx 30rpx 28rpx 32rpx
    font-size: 24rpx
    font-weight: 400
    color: #333
    background: #fff
    .head-img
        flex: 0 0 64rpx
        margin: 0 24rpx 0 0
        height: 64rpx
        border-radius: 8rpx
        overflow: hidden
        image
            width: 100%
            height: 100%
    .content
        flex: 1
        .title
            display: flex
            & > text:nth-of-type(1)
                flex: 1
                font-size: 28rpx
                font-weight: 500
            & > text:nth-of-type(2)    
                flex: 0 0 240rpx
                text-align: right 
                font-size: 24rpx
                color: #999
    .img-list
        margin: 16rpx 0 36rpx 0
        image
            margin: 0 6rpx 0 0
            width: 196rpx
            height: 196rpx
.base-btn
    margin: 32rpx auto 40rpx
</style>