import React, {Component} from 'react';
import { DropTarget } from 'react-dnd';
import backGround from '/home/tony/Documents/thatsnotpaella/src/components/svgs/paella-149635_1280.png'


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
<div style={style}><div style={imgStyle}  alt='a paella'></div><h1 style={textStyle}>Add things until you ruin the Paella</h1></div>
        )
    }
};

const imgStyle ={
    width:'100%',
    height:'100%',
    border: 'none',
    display: 'block',
    margin: '0 auto',
    gridRow:'1 / span 1',
    backgroundImage:`url('${backGround}')`,
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center'
   
}
const textStyle = {
    
    gridRow:'2 / span 1'
    
}
const style = {
    display:'grid',
    textAlign:'center',
    gridTemplateRows:'auto auto',
    backgroundColor:'#008c72',
    border:'solid 10px #003840',
    borderRadius:'100%',
    gridColumn:'2 / span 1',
    gridRow: '1 / span 1',
    verticalAlign:'text-top'
};
    
export default DropTarget(types.food, {}, collect)(Paellero)