import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { DragSource } from 'react-dnd';
import Fail from './Fail';


let correctIngredients = ['Rabbit', 'Tomato', 'Garlic', 'Paprika', 'Chicken', 'Green beans', 'Saffron', 'White beans']
const types = {
    food:'food'
}

const spec = {
  

  beginDrag(props, monitor, component) {
    
    
const item = {
  name:props.name,
  id:props.id
}
return item
},



endDrag(props, monitor, component) {
 
  if (monitor.didDrop()) {
    
    props.handleDrop(props.name)


    if(correctIngredients.indexOf(props.name) === -1){
      const parent = ReactDOM.render(<Fail show="true"/>, document.querySelector("#modal"));


       parent.forceUpdate()
    }
       

  }

}
};
    
    
    


/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}


class Ingredient extends Component {
    render() {
      
      const { isDragging, connectDragSource, name, id, path } = this.props;

      const style = {
        backgroundColor:'#005a5b',
        height:'250px',
        display:'grid',
        gridTemplateRows:'60% 40%',
        border:'solid 10px #003840',
        borderRadius:'50px',
        cursor:'move',
        opacity:isDragging ? '0' : '1',
        textAlign:'center'
        
      }

      return connectDragSource(

        <div  key={id} style={style}><h2 style={textStyle}>{name}</h2><img style={imgStyle} src={require(`/home/tony/Documents/thatsnotpaella/src/components/svgs/${path}`)} alt={name}></img></div>

      );
    }
  }
const textStyle = {
  padding:'10%'
  
}
const imgStyle = {
  maxHeight:'100%',
  width:'100%',
  gridRow:'1 / span 1',
  
 
}

export default DragSource(types.food, spec, collect)(Ingredient);