import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Drawer } from "antd";

const AddDrawer = ({onClose, visible}) => {
    
    return (
      <Drawer 
        width="400"
        title="Add Contact"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        maskClosable={true}
       >
        <h1>Content Here</h1>
        <p>1)........</p>
        <p>2)........</p>
        <p>3)........</p>
      </Drawer>
    );      
};

export default AddDrawer;