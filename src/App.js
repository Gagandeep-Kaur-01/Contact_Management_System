import React, { Fragment, useState } from 'react'
import './App.css';
import { Button } from 'antd'
import { PlusCircleFilled } from "@ant-design/icons"
import AddDrawer from './Components/AddDrawer'

function App() {
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({});
  const [errorInfo, setError] = useState("");

  const handleAddFormOnFinish = (values) => {
    setValues(values);
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
