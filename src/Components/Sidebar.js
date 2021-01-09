import React, { useState } from 'react'
import { Layout, Menu } from 'antd'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Sidebar(){
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (isCollapsed) => {
        setCollapsed(isCollapsed);
      };

      return(
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
           
           {/*....................*/}
          
            </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Contact Management System</Footer>
    </Layout>
  </Layout>    
      )

}

export default Sidebar;