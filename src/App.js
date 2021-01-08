import React, { Fragment, useState } from 'react'
import './App.css';
import { Button } from 'antd'
import { PlusCircleFilled } from "@ant-design/icons"

function App() {
    const [visible, setVisible] = useState(false);
  
  return (
    <Fragment>

      <Button type="primary" 
              icon={<PlusCircleFilled/>} 
      >
        Add Contact
      </Button>

    </Fragment>   
    
  );
}

export default App;
