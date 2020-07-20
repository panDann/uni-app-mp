
<template>
    <view class='con'>
        {{text}}
    </view>
</template>

<script>
	export default {
        props:{
            text:{
                type:String,
                required:true,
                default:''
            }
        },
	}
</script>

<style lang='stylus' scoped>
@import './index.styl'
    
</style>
