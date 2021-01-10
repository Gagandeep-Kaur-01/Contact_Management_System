import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css';
import { Drawer } from "antd";
import AddForm from './Form'

const AddContact = ({ show, handleonClose, handleOnFinish, handleOnFinishFailed}) => {
  
    return (
      <Drawer 
        width="400"
        title="Add Contact"
        placement="right"        
        onClose={handleonClose}
        visible={show}
       >
         <AddForm 
          onFinish={handleOnFinish}
          onFinishFailed={handleOnFinishFailed}/>        
      </Drawer>
    );      
};

AddContact.propTypes = {
    show:PropTypes.bool.isRequired,
    handleOnClose: PropTypes.func.isRequired,
    handleOnFinish: PropTypes.func.isRequired,
    handleOnFinishFailed: PropTypes.func.isRequired
}; 

export default AddContact;