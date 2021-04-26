import React, { } from 'react';
import { Button, Form, Input, Space, message } from 'antd';
import { login, list } from '../api/login';
// import axios from "axios";

import { set } from '../utils/storage'
import '../static/css/login.css';
function Login() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const loginForm = (form: any) => {
    login(form.username, form.password).then((res: any) => {
      console.log(res.data);
      const { code, msg, token } = res.data;
      if (code === 0) {
        set('token', token);
        // window.location.href = '/';
        message.success(msg);
      } else {
        console.log(res.data.data);
      }
    });
    list().then((res) => {
      console.log(res)
    })
  }
  return (
    <div className='login-bj'>
      <Form 
        id='login-form'
        {...layout}
        onFinish={loginForm}
      >
        <Form.Item
          label='用户名'
          name='username'
          rules={[{ required: true, message: '请输入用户名', type: 'string' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='密码'
          name='password'
          rules={[{ required: true, message: '请输入密码', type: 'string' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button type='primary' htmlType='submit'>登录</Button>
            <Button type='primary' htmlType='reset'>重置</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
};
export default Login;