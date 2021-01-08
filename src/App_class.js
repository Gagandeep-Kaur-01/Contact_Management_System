import React, { Fragment } from 'react'
import './App.css';
import { Button, Drawer } from 'antd'
import { PlusCircleFilled } from "@ant-design/icons"
import AddDrawer from './Components/AddDrawer_class'

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
              onClick={this.showDrawer}
      >
        Add Contact
      </Button>

      <AddDrawer
        onClose={this.onClose}
        visible={this.state.visible}
      />       

    </Fragment>   
    
  );
  }
}

export default App;
