import React, { Fragment, useState } from 'react'
import './App.css';
import { Button, Drawer, Layout, Table, Menu } from 'antd'
import { PlusCircleFilled, DeleteOutlined, EditOutlined } from "@ant-design/icons"
import AddEditContact from './Components/AddEditContact'
import { connect } from "react-redux";
import { addContact, deleteContact, editContact } from './redux/contacts/actions';

const { Header, Content, Footer, Sider } = Layout;

const App = ({ contacts, addContact, deleteContact, editContact }) => {
  const [visible, setVisible] = useState(false);
  const [errorInfo, setError] = useState({});
  const [collapsed, setCollapsed] = useState(false);
  const [contact, setContact] = useState({  // for edit contact
    firstName: "", 
    lastName: "", 
    phoneNumber: null
  }); 
  const [mode, setMode] = useState("add");  //....
  const [key, setEditKey] = useState(); //  

  const onCollapse = (isCollapsed) => {
    setCollapsed(isCollapsed);
  };

  const handleAddFormOnFinish = (data) => {  
    addContact({
      key: contacts.length + 1,
     ...data,
    });
    setVisible(false);
  };

  //edit form
  const handleEditFormOnFinish = (data) => {  
    //console.log(data)
    editContact({key, ...data});
    setVisible(false);
  };
  
  const handleAddFormOnFinishFailed = (errorInfo) => {
    setError(errorInfo);
  };

  //.......
  const handleonClose = () => {
    setContact({firstName: "", lastName: "", phoneNumber: null});
    setMode('add')
    setEditKey();
    setVisible(false);    
  }

  // for editing the contacts
  const openEditDrawer = (contact, key) => {
    setContact(contact);
    setEditKey(key)
    setVisible(true);
    setMode('edit')
  };

  //console.log("values : ", values);
  //console.log("errorInfo : ", errorInfo);

  /* manually added data into table.
  const dataSource = [
    {      
      key: '1',
      firstName: 'Mike',
      lastName: 'lname',
      phoneNumber: '1000875' 
    },
  ];*/

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, contact) => (
        <span>
          {/* Delete Contact button */} 
          <Button 
            onClick={()=>deleteContact(contact.key)} 
            icon={<DeleteOutlined/>} />
          {/* Edit Contact button */}  
          <Button 
            style={{ marginLeft: 10}}
            onClick={()=>openEditDrawer(contact, contact.key)} 
            icon={<EditOutlined/>} />  
        </span>
      ),
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={onCollapse}
       >
       <div className="logo" />      
      </Sider>
      <Layout className="site-layout">
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Fragment>

            <div style={{ display: "flex", justifyContent:"space-between", marginBottom:20}}>
              <div></div>
              <div>
                <Button type="primary" 
                  icon={<PlusCircleFilled/>} 
                  onClick={() => setVisible(true)}
                 >
                 Add Contact
                </Button>
              </div>
            </div>

            <Layout.Content> 
              <Table dataSource={contacts} columns={columns} />
            </Layout.Content>
            {visible && (
              <AddEditContact //for edit
                show={visible}
                handleonClose={handleonClose} //
                handleOnFinish={handleAddFormOnFinish}
                handleOnFinishFailed={handleAddFormOnFinishFailed}
                initialValues={contact} //
                mode={mode}
                handleEditOnFinish={handleEditFormOnFinish}
              />  
            )}   

          </Fragment>   
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Contact Management</Footer>
      </Layout>
    </Layout>
  );
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts && state.contacts.allContacts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addContact:(contact) => {
      dispatch(addContact(contact));
    },
    deleteContact:(key) => {
      dispatch(deleteContact(key));
    },
    editContact:(contact) => {
      dispatch(editContact(contact));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
