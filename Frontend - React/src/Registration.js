import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';

function Registration({ addUser, showRegistration, setShowRegistration, setShowLogin }) {

  const validateMessages = {
    required: "'${name}' is required!",
    min: "Login is required"
  };

  function backToLogin() {
    setShowRegistration(false)
    setShowLogin(true)
  }


  function onFinish(values) {
            addUser(values)
      };
    
      function onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
      };

    return (
        <Modal title="Sign up" visible={showRegistration} onCancel={backToLogin} footer={[]}>
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
        <Button type="primary" htmlType='submit'>
          Sign up
        </Button>
      </Form.Item>


    </Form>
      </Modal>
    )
}

export default Registration