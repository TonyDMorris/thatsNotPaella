import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { DragSource } from 'react-dnd';
import Fail from './Fail';







let correctIngredients = ['rabbit', 'tomato', 'garlic', 'paprika', 'chicken', 'greenbeans', 'rabbit', 'saffron', 'whitebeans']
const types = {
    food:'food'
}

const spec = {
  

  

  beginDrag(props, monitor, component) {
    // Return the data describing the dragged item
    
const item = {
  name:props.name
}
return item
    
    
    
  },

  endDrag(props, monitor, component) {
    

    // When dropped on a compatible target, do something.
    // Read the original dragged item from getItem():
    const item = monitor.getItem();

    // You may also read the drop result from the drop target
    // that handled the drop, if it returned an object from
    // its drop() method.
    const dropResult = monitor.getDropResult();

    if (monitor.didDrop()) {
      console.log(monitor.getItem().name)
      
      if(correctIngredients.indexOf(`${monitor.getItem().name}`) > -1){
        
      }
//        const parent = ReactDOM.render(<Fail show="true"/>, document.querySelector("#modal"));
// parent.forceUpdate()


      
      
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
  
      return connectDragSource(
        <li key={id} style={style}>{name}<img style={imgStyle} src={require(`/home/tony/Documents/thatsnotpaella/src/components/svgs/${path}`)} alt={name}></img></li>

      );
    }
  }
const style = {
  
  display:'grid',
  gridTemplateColumns:'repeat(auto-fill, minmax(50%, 1fr))',
  border:'solid 1px blue',
  cursor:'move',
  
  
}
const imgStyle = {
  maxWidth:'100%',
  maxHeight:'100%'
}

export default DragSource(types.food, spec, collect)(Ingredient);