import global from '@/components/global'

const host = global.baseServerHost,
	  
//异步网络请求	  
export const sendAsynRequest = function(url,  data, method='POST', header={}, hideLoading=false, success, failure){ 

    //用户交互:加载圈，通过在 data 中设置 loadingText参数来改变加载提示内容
    if (!hideLoading) {
        uni.showLoading({
			title: data.loadingText || '加载中'
		});
    }
    
    console.log("网络请求start");
    //网络请求
    uni.request({
        url: host + url,
        method,
		data,
        header: {
            'content-type': 'application/json', // 默认值
            ...header,
          },
        success: res => {
			if (!hideLoading) {
				uni.hideLoading();
			}
            if (res.statusCode && res.statusCode != 200) {
				//api错误
				console.log("网络API请求失败:");
                failure(res.errMsg);
				return;
            }
			console.log("网络请求成功" + JSON.stringify(res));
            if (res.data.code==1) {//返回结果码code判断 1:成功,其它:报错)
			    //请求成功，并返回数据
				success(res.data);
            } else{
				//业务报错，需要适当提示
                failure(res.data.msg);
            }
        },
        fail: (e) => {
			if (!hideLoading) {
				uni.hideLoading();
			}
            console.log("网络异常: " + JSON.stringify(e));
			//网络请求失败
			failure("网络异常，请确认网络是否连通。");
        },
        complete: () => {
            console.log("网络请求complete");
            if (!hideLoading) {
                uni.hideLoading();
            }
        }
    });
}

//同步网络请求
export const sendSyncRequest  = (url, data,method='POST',header={}, hideLoading=false)=> {
	
	//用户交互:加载圈， 通过在 data 中设置 loadingText参数来改变加载提示内容
	if (!hideLoading) {
	    uni.showLoading({
			title: data.loadingText || '加载中'
		});
	}
	
    return new Promise((resolve, reject) => {
        uni.request({
          	url: host + url, // 仅为示例
          	method,// 默认POST请求
          	data,
          	header: {
            	'content-type': 'application/json', // 默认值
				...header,
          	},
          	success: function (res) {
				if (!hideLoading) {
					uni.hideLoading();
				}
				
				if (res.data.code==1) {//返回结果码code判断 1:成功,其它:错误)
				    //请求成功，并返回数据
					if (!hideLoading) {
						uni.hideLoading();
					}
					resolve(res.data)
				} else{
					//业务报错，需要适当提示
				    reject({msg: res.data.msg});
				}
            	
          	},
          	fail: function (res) {
            	if (!hideLoading) {
					uni.hideLoading();
				}
				console.info('网络异常: ' + JSON.stringify(e))
				reject({msg:'网络异常，请确认网络是否连通。'})
          	},
          	complete: function () {
            	if (!hideLoading) {
					uni.hideLoading();
				}
          	}
        })
     })
   }