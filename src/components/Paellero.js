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

export class Paellero extends Component {
    render() {
        
        const {connectDropTarget} = this.props;

        return connectDropTarget(
<div style={style}>this is where the paellero will be</div>
        )
    }
};


const style = {
    height:'100%',
    width:'100%',
    backgroundColor:'blue',
    gridColumn:'2 / span 1',
    gridRow: '1 / span 1'
};
export default DropTarget(types.food, {}, collect)(Paellero)