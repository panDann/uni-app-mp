

<template>
<View class='con'>
        <View class='tab-con'>
            <View v-for="item in tabList" :key='item.key' class='item'
             :class="currentName==item.key&&'active'" 
             @click="transferTab(item.key)"
             >
                    {{item.label}}{{item.count? `(${item.count})`:''}}
            </View>
        </View>
        <slot />
    </View>
</template>

<script>
	export default {
        props:{
            value:{
                type:String,
                required:true,
                default:''
            },
        
            tabList:{
                type:Array,
                required:true,
                default:()=>[]
            },
        },
        model:{
            prop:'value',
            event:'input'
        },
        data() {
            return {
                currentName:this.value
            }
        },
   
        methods:{
            transferTab(key){
                this.currentName = key
                this.$emit('input',key)
            }
        }
        // render(h){
        //     return 
        // }
	}
</script>

<style lang='stylus' scoped>
@import './index.styl'
    
</style>
