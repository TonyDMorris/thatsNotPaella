import React, {Component} from 'react';
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
<div style={style}><img style={imgStyle} src={require('/home/tony/Documents/thatsnotpaella/src/components/svgs/paella-149635_1280.png')} alt='a paella'></img><h1 style={imgStyle}>Add things until you ruin the Paella</h1></div>
        )
    }
};

const imgStyle ={
    maxWidth:'100%',
    gridColumn:'2 / span 1',

    
}

const style = {
    display:'grid',
    gridTemplateColumns:'20% 60% 20%',
    gridTemplateRows:'80% 20%',
    backgroundColor:'#008c72',
    border:'solid 10px #003840',
    borderRadius:'50px',
    gridColumn:'2 / span 1',
    gridRow: '1 / span 1',
    
};
    
export default DropTarget(types.food, {}, collect)(Paellero)