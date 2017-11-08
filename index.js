import React, { Component, PropTypes } from 'react';
import ModuleDemo from 'qafrankly/Child-11';

class ModuleCrossDemo extends Component {

  render(){
	  
    return (
      <div className='FranklyModulesCrossDemo'>
	    This is a child "ModuleDemo" component:<br/>
	    <ModuleDemo text="test"></ModuleDemo>
      </div>
    );
	  
  }
}

export default ModuleCrossDemo;
