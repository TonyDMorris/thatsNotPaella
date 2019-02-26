import React, {Component} from 'react'

import { DropTarget } from 'react-dnd';


const types = {
    food:'food'
}
function collect(connect, monitor) {
   
    return {
        
    connectDropTarget: connect.dropTarget()
    }
   }

  function drop(props, monitor, component) {
    if (monitor.didDrop()) {
      // If you want, you can check whether some nested
      // target already handled drop
      return 'hello world'
    }}



    
    
    


export class Paellero extends Component {
    render() {
        
        const {drop, connectDropTarget } = this.props;

        return connectDropTarget(
<div style={style}>this is where the paellero will be</div>
        )
    }
};


const style = {
    height:'100%',
    width:'100%',
    backgroundColor:'blue',
    gridRow: '1 / span 1'
};
export default DropTarget(types.food, {drop}, collect)(Paellero)