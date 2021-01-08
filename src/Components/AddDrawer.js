import React  from 'react'
import 'antd/dist/antd.css';
import { Drawer } from "antd";

class AddDrawer extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
    
    return (

      <div> 
        <Drawer 
          width="400"
          title="Add Contact"
          placement="right"
          closable={true}
          onClose={this.props.onClose}
          visible={this.props.visible}
          maskClosable={true}
         >
        </Drawer>
      </div> 
    );  
    }    
};

export default AddDrawer;