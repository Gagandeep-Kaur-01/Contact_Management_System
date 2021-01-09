import React, { Fragment, useState } from 'react'
import './App.css';
import { Button, Layout, Table } from 'antd'
import { PlusCircleFilled } from "@ant-design/icons"
import AddDrawer from './Components/AddDrawer'

function App() {
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({});
  const [errorInfo, setError] = useState("");

  const handleAddFormOnFinish = (data) => {
    setValues([...values, data ]);
    setVisible(false);
  };

  const handleAddFormOnFinishFailed = (errorInfo) => {
    setError(errorInfo);
  };

  console.log("values : ", values);
  console.log("errorInfo : ", errorInfo);

  return (
    <Fragment>

      <Button type="primary" 
              icon={<PlusCircleFilled/>} 
              onClick={() => setVisible(true)}
      >
        Add Contact
      </Button>

      <Layout.Content> 
        <Table />;
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
