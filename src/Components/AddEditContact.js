import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css';
import { Drawer } from "antd";
import AddForm from './Form'

const AddEditContact = ({ 
  show, 
  handleonClose, 
  handleOnFinish, 
  handleOnFinishFailed, 
  initialValues,
  mode,
  handleEditOnFinish
}) => { 
  
    return (
      <Drawer 
        width="400"
        title={`${mode==='edit'? "Edit Contact" : "Add Contact"}`} 
        placement="right"        
        onClose={handleonClose}
        visible={show}
       >
         <AddForm 
          onFinish={mode==='edit'? handleEditOnFinish : handleOnFinish}
          onFinishFailed={handleOnFinishFailed}
          initialValues={initialValues}  
          mode={mode} 
          />        
      </Drawer>
    );      
};

AddEditContact.propTypes = {
    show:PropTypes.bool.isRequired,
    handleOnClose: PropTypes.func.isRequired,
    handleOnFinish: PropTypes.func.isRequired,
    handleOnFinishFailed: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired,  
    mode: PropTypes.oneOf(['add', 'edit']), 
    handleEditOnFinish: PropTypes.func.isRequired,
}; 

export default AddEditContact;