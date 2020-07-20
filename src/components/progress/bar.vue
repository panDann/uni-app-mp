
<template>
    <view class='con'>
        <view >{{!value? data.progress+'%':''}}</view>
        <view class="progress-con">
            <view class="bar" :style="{width:data.progress||value+'%'}"></view>
        </view>
        <view >{{!value? data.name:''}}</view>
    </view>
</template>

<script>
	export default {
        props:{
            data:{
                type:Object,
                required:true,
                default:()=>({
                    name:'name',
                    progress:0,
                })
            },
            value:{
                type:String|Number,
                default:''
            },
        },
    }
</script>

<style lang='stylus' scoped>
@import './index.styl'
    
</style>
