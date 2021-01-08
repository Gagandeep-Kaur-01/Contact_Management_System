import React from 'react';
import { Form, Input, Button } from 'antd';

class Forms extends React.Component{
    constructor(props){
      super(props);
      };
    

    render(){
        return(
            <Form
            name="basic"
            initialValues={{ remember: true }}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
               
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )
    }

}    

export default Forms;