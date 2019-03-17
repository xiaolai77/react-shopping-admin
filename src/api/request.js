import axios from 'axios'

const service = axios.create({
	timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
	if (!config.headers) {
		config.headers = {};
	}
	config.headers['Content-Type'] = 'application/json'
	return config;
}, function (error) {
	return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
	if(response.data.errno===0){
		return Promise.resolve(response.data.data);
	}else {
        return Promise.reject(false);
	}
}, function (error) {
	return Promise.reject(error);
});
export default service