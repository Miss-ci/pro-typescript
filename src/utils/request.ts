import axios from "axios";
import { message, Modal } from 'antd';
import NProgress from 'nprogress'; // 进度条使用
import {clear, get} from "./storage";

const service = axios.create({
  baseURL: '',
  timeout: 5000,
});

// 请求拦截器
// service.interceptors.request.use(function(config) {
//   NProgress.start();
//   config.headers['Authorization'] = get('token');
//   return config
// }, function(error) {
//   NProgress.done();
//   return Promise.reject(error);
// });
service.interceptors.request.use(
  config => {
    NProgress.start();
    config.headers['Authorization'] = get('token');
    // console.log(config);
    return config;
  }, 
  error => {
    NProgress.done();
    return Promise.reject(error)
  }
)

// 相应拦截器
// service.interceptors.response.use(function(response) {
//   NProgress.done();
//   if (response.status === 200) {
//     const code = response.data;
//     if (code === 403) {
//       message.warning('你的登录状态已丢失，请退出后重新登录');
//       return Promise.reject('请登录');
//     } else if (code === 400) {
//       clear();
//       return Promise.reject('认证失败');
//     }
//     return response;
//   } else {
//     Modal.error({
//         title: '网络请求错误',
//     });
//     return Promise.reject('网络请求错误');
//   }
// }, function(error) {
//   Modal.error({
//     title: '网络请求错误',
//   });
//   return Promise.reject(error);
// });
service.interceptors.response.use(
  response => {
    NProgress.done();
    if (response.status === 200) {
      const code = response.data;
      if (code === 403) {
        message.warning('您的登录状态已丢失，请退出后重新登录');
        return Promise.reject('请重新登录')
      } else if (code === 400) {
        clear();
        return Promise.reject('认证失败');
      }
      return response;
    } else {
      Modal.error({
        title: '网络请求错误',
      });
      return Promise.reject('网络请求错误');
    }
  },
  error => {
    Modal.error({
      title: '网络请求错误',
    });
    return Promise.reject(error);
  }
)
export default service;