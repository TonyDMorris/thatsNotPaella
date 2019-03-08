import React, {Component} from 'react';
import { DropTarget } from 'react-dnd';
import background from '/home/tony/Documents/thatsnotpaella/src/components/svgs/paella-fuse-5741e40c5f9b58723db9a309.jpg'


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
<div style={style}></div>
        )
    }
};



const style = {
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundImage:`url('${background}')`,
    boxShadow:'inset 10px 10px 0px 0px #005840',
    
    border:'solid 10px #003840',
    borderRadius:'100%',
    gridColumn:'2 / span 1',
    gridRow: '1 / span 1',
    
};
    
export default DropTarget(types.food, {}, collect)(Paellero)