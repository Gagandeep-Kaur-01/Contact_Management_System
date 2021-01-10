import React, { Fragment, useState } from 'react'
import './App.css';
import { Button, Drawer, Layout, Table, Menu } from 'antd'
import { PlusCircleFilled, DeleteOutlined } from "@ant-design/icons"
import AddDrawer from './Components/AddDrawer'
import { connect } from "react-redux";
import { addContact, deleteContact } from './redux/contacts/actions';

const { Header, Content, Footer, Sider } = Layout;

const App = ({ contacts, addContact }) => {
  const [visible, setVisible] = useState(false);
  //const [values, setValues] = useState([]);
  const [errorInfo, setError] = useState({});
  const [collapsed, setCollapsed] = useState(false);

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

  const handleAddFormOnFinishFailed = (errorInfo) => {
    setError(errorInfo);
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
      render: (text, record) => (
        <span>
          <Button 
            onClick={()=>deleteContact(record.key)} 
            icon={<DeleteOutlined/>} />
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
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        
      </Menu>
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

          <AddDrawer
            show={visible}
            handleonClose={() => setVisible(false)}
            handleOnFinish={handleAddFormOnFinish}
            handleOnFinishFailed={handleAddFormOnFinishFailed}
          />   

        </Fragment>   
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Contact Management System</Footer>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

