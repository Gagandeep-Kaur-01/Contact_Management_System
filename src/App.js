import React, { Fragment, useState } from 'react'
import './App.css';
import { Button, Drawer, Layout, Table, Menu } from 'antd'
import { PlusCircleFilled } from "@ant-design/icons"
import AddDrawer from './Components/AddDrawer'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState([]);
  const [errorInfo, setError] = useState({});
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (isCollapsed) => {
    setCollapsed(isCollapsed);
  };

  const handleAddFormOnFinish = (data) => {
    setValues([
      ...values, 
      {
      key: values.length + 1,
      ...data,
      }, 
    ]);
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
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <Fragment>

          <Button type="primary" 
            icon={<PlusCircleFilled/>} 
            onClick={() => setVisible(true)}
           >
            Add Contact
          </Button>

          <Layout.Content> 
            <Table dataSource={values} columns={columns} />;
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
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  
  );
}

export default App;
