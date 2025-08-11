// import {config} from "../conf/config.js"
// /**
//  * 请求拦截器
//  */
// const requestInterceptor = {
//     /**
//      * 拦截器触发时执行的方法
//      * @param {Object} options 请求配置对象
//      */
//     invoke(options) {
//         // 如果请求的 URL 不以 "http" 或 "https" 开头，则拼接基础地址
//         if (!options.url.startsWith('http')) {
//             options.url = config.baseApi + options.url;
//         }
//         // 设置请求超时时间为 10 秒
//         options.timeout = 10000;
//         // 添加请求头标识 'source-client'，值为 'miniapp'，用于标识请求来源为小程序端
//         // options.header = {
//         //     'source-client': 'miniapp',
//         // };
//         // 添加 token 验证
//         const token = getToken();
//         if (token) {
//             options.header.Authorization = token;
//         }
//     }
// };

// /**
//  * 添加请求拦截器
//  */
// uni.addInterceptor('request', requestInterceptor);

// /**
//  * 获取 token
//  * 这里需要根据实际情况实现获取 token 的方法
//  * @returns {string|null} token 值或 null
//  */
// function getToken() {
//     // 这里可以根据你的具体情况获取 token，例如从本地存储中获取
//     // 假设你的 token 存储在 localStorage 中，可以这样实现：
//     return localStorage.getItem('token');
// }

function request(url, method = "get", data = {}) {
	return new Promise(((resolve, reject) => {
		uni.request({
			url: url,
			data: data,
			method: method.toLocaleUpperCase(),
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				resolve(res.data)
			},
			fail: (res) => {
				uni.showToast({
					icon: 'none',
					title: '网络错误,换个网络试试',
				})
				reject(err)
			}
		});
	}))
}
export {
	request
}
