import React, { Fragment, useState } from 'react'
import './App.css';
import { Button } from 'antd'
import { PlusCircleFilled } from "@ant-design/icons"

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

    </Fragment>   
    
  );
}

export default App;
