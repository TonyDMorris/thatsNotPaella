import React, {Component} from 'react'

import { DropTarget } from 'react-dnd';


const types = {
    food:'food'
}

const spec = {
    drop(props, monitor, component) {
        if (monitor.didDrop()) {
          
          console.log(monitor.getItemType())
        }
    }}

    function collect(connect, monitor) {
        return {
          // Call this function inside render()
          // to let React DnD handle the drag events:
          connectDropTarget: connect.dropTarget(),
          // You can ask the monitor about the current drag state:
          isOver: monitor.isOver(),
          isOverCurrent: monitor.isOver({ shallow: true }),
          canDrop: monitor.canDrop(),
          itemType: monitor.getItemType()
        }
}
    
    


export class Paellero extends Component {
    render() {
        
        const { drop, connectDropTarget } = this.props;

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
export default DropTarget(types.food, spec, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	
}))(Paellero)