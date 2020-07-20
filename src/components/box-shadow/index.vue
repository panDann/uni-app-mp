
<template>
    <view class='con' @click="$emit('click')">
        <slot />
    </view>
</template>

<script>
	export default {
      
	}
</script>

<style lang='stylus' scoped>
.con 
    margin $boxMargin
    padding $boxPadding
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 10px 0px rgba(0,0,0,0.1);
    border-radius:8px;  
.con:active
    opacity .7
</style>
