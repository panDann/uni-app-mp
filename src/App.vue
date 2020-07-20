<script>
import * as Path from '@src/consts/paths'
	export default {
		onReady(){
		
			
		},
		onLaunch: function() {
			
			console.log('App Launch')
            if(process.env.MP_TYPE === 'mp-supervision'){
                console.log('监管端')
            }
            if(process.env.MP_TYPE === 'mp-school'){
                console.log('学校端')
            }
            if(process.env.MP_TYPE === 'mp-family'){
                console.log('家长端')
            }
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		mounted(){
			// debug page
			if(process.env.NODE_ENV === "development"){
				let url = Path.platformSecurityPath
				// uni.navigateTo({url})
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
