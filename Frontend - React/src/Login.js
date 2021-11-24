import React, { useState } from 'react';
import { Modal, Button, Form, Input  } from 'antd';
import './App.css';

function Login({ loginUser, showLogin, setShowLogin, setShowRegistration}) {

  const validateMessages = {
    required: "'${name}' is required!",
    min: "Login is required"
  };

    function openRegistration() {
        setShowLogin(false)
        setShowRegistration(true)
    }

    function onFinish(values)  {
        loginUser(values)
        console.log('Success:', values);
      };
    
      function onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
      };

    return (
        <Modal title="Log in" visible={showLogin} closable={false}  footer={[]}>
         <Form
      name="basic"
      labelCol={{
        span: 7,
      }}
      wrapperCol={{
        span: 15,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Login"
        name="login"
        validateMessages={validateMessages}
        rules={[
          {
            required: true,
            min: 3,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        validateMessages={validateMessages}
        rules={[
          {
            required: true,
            min: 3,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      
    

      <Form.Item
        wrapperCol={{
          offset: 9,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 18,
          span: 16,
        }}
      >
        <Button type="link" onClick={openRegistration}>
          Sign up
        </Button>
      </Form.Item>
    </Form>
      </Modal>
    )
}

export default Login