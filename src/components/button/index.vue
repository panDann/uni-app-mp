
<template>
    <button :class="type+' '" @click="$emit('click')">
         <slot/>
    </button>
</template>

<script>
	export default {
        props:{
            type:{
                type:String,
                default:'primary'
            },
            size:{
                type:String,
                default:'normal'
            },
            circle:{
                type:Boolean,
                default:false
            },
             flat:{
                type:Boolean,
                default:false
            },
        },
	}
</script>

<style lang='stylus' scoped>
@import './index.styl'
    
</style>
