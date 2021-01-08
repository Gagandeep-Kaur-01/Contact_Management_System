import React, { Fragment } from 'react'
import './App.css';
import { Button } from 'antd'
import { PlusCircleFilled } from "@ant-design/icons"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render(){  

  return (
    <Fragment>

      <Button type="primary" 
              icon={<PlusCircleFilled/>} 
       >
       Add Contact
      </Button>
    </Fragment> 

  )

  }    
  
}

export default App;
