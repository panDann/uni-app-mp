<template>
    <view class='con'>
        <BarTitle :text='title' />
        <view class='list-con'>
        <view class="list-item" v-for="(item) in list" :key='item.iconName' @click='()=>uni.navigateTo({url:item.path})'>
                <view :class="'iconfont nav-icon ' +item.iconName" :style="{color:item.color}"/>
                <Text class='label'>{{item.label}}</Text>
        </view>
        </view>
      
    </view>
</template>

<script>
// import CardNavigation from '@src/components/card-navigation/index.vue'

import  BarTitle from '@src/components/bar-title/index.vue'
	export default {
        components:{
            BarTitle
        },
        props:{
            list:{
                type:Array,
                required:true,
                default:()=>[]
            },
            title:{
                type:String,
                required:true,
                default:'标题'
            }
        },
        mounted(){
            console.log(this.list);
            
        }
	}
</script>

<style lang='stylus' scoped>
@import './index.styl'
    
</style>
