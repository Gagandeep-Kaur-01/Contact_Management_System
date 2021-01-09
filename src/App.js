import React, { Fragment, useState } from 'react'
import './App.css';
import { Button, Drawer, Layout, Table } from 'antd'
import { PlusCircleFilled } from "@ant-design/icons"
import AddDrawer from './Components/AddDrawer'

function App() {
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState([]);
  const [errorInfo, setError] = useState({});

  const handleAddFormOnFinish = (data) => {
    setValues([
      ...values, 
      {
      key: values.length + 1,
      ...data,
      /*firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber*/
      }, 
    ]);
    setVisible(false);
  };

  const handleAddFormOnFinishFailed = (errorInfo) => {
    setError(errorInfo);
  };

  /*console.log("values : ", values);
  //console.log("errorInfo : ", errorInfo); */

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
    
  );
}

export default App;
