import React, { Component, PropTypes } from 'react';
import ModuleDemo from 'qafrankly/Child-11';

class ModuleCrossDemo extends Component {

  render(){
	  
    return (
      <div className='FranklyModulesCrossDemo'>
	    This is a child component 'ModuleDemo' testing here:<br/>
	    <ModuleDemo text="test by heba here"></ModuleDemo>
      </div>
    );
	  
  }
}

export default ModuleCrossDemo;
