import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Drawer, Form, Input, Button } from "antd";

const AddDrawer = ({onClose, visible}) => {
    
    return (
        <Drawer 
        width="400"
        title="Add Contact"
        placement="right"        
        onClose={onClose}
        visible={visible}
       >
         <Form
            name="basic"
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: 'Please input your first name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: 'Please input your last name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input type="tel" />
            </Form.Item>
               
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Form.Item>
          </Form>
      </Drawer>
    );      
};

export default AddDrawer;