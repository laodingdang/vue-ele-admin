import axios from "axios";
import qs from "qs";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || "";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || "",
  timeout: 5000, // Timeout
  withCredentials: true // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

function getAxios(method, url, params) {
  let httpDefault = {
    method: method,
    url: url,
    // params 是即将与请求一起发送的url参数
    // data 是作为请求主体被发送的数据
    params: method === "GET" || method === "DELETE" ? params : null,
    data: method === "POST" || method === "PUT" ? qs.stringify(params) : null
  };
  return new Promise((resolve, reject) => {
    _axios(httpDefault)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// 输出函数get post put delect，供其他文件调用
// Vue.js的插件应当又一个公开方法install，这个方法的第一个参数是Vue构造器，第二个参数是一个可选的vue对象
export default {
  install: Vue => {
    Vue.prototype.getHttp = (url, params) => getAxios("GET", url, params);
    Vue.prototype.postHttp = (url, params) => getAxios("POST", url, params);
    Vue.prototype.putHttp = (url, params) => getAxios("PUT", url, params);
    Vue.prototype.deleteHttp = (url, params) => getAxios("DELETE", url, params);
  }
};
