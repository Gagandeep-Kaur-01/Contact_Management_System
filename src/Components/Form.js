import React, { useState, Fragment } from 'react';
import { Form, Input, Button } from 'antd';


function Forms({ onFinish, onFinishFailed, initialValues, mode }) {
    
  //const initialValues = {  }; 
  const [form] = Form.useForm(); 
  const [, forceUpdate] = useState({});
    
    return(
      <Form
        form={form}
        name="basic"
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        destroyOnClose={true} 
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
             
        <Form.Item shouldUpdate >
          {() => (
            <Fragment>
              <Button
                style={{ marginRight: '20px'}}
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length).length
                }
               >
                {mode === "edit" ? "Edit" : "Add"}
              </Button>
              {

              }
              <Button htmlType="submit" onClick= {() => form.resetFields()} >
                Reset
              </Button> 
            </Fragment>
          )}
        </Form.Item>
      </Form>
    )

}    

export default Forms;