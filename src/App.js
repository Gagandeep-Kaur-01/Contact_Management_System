import React, { Fragment, useState } from 'react'
import './App.css';
import { Button } from 'antd'
import { PlusCircleFilled } from "@ant-design/icons"
import AddDrawer from './Components/AddDrawer'

function App() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
      }
    
      const onClose = () => {
        setVisible(false);
      };
  
  return (
    <Fragment>

      <Button type="primary" 
              icon={<PlusCircleFilled/>}
              onClick={showDrawer} 
      >
        Add Contact
      </Button>

      <AddDrawer
        onClose={onClose}
        visible={visible}
      />

    </Fragment>   
    
  );
}

export default App;
