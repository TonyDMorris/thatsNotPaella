import React, {Component} from 'react'
import { DragSource } from 'react-dnd';
import Fail from './Fail'


let correctIngredients = ['rabbit']
const types = {
    food:'food'
}

const spec = {
  

  isDragging(props, monitor) {
    // If your component gets unmounted while dragged
    // (like a card in Kanban board dragged between lists)
    // you can implement something like this to keep its
    // appearance dragged:
    return monitor.getItem().id === props.id;
  },

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
      // You can check whether the drop was successful
      // or if the drag ended but nobody handled the drop
      let val = monitor.getItem().name == correctIngredients[0]
      Fail.handleShow()
      
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
      
      const { isDragging, connectDragSource, name, id } = this.props;
  
      return connectDragSource(
        <li key={id} style={style}>{name}</li>

      );
    }
  }
const style = {
  border:'solid 1px blue'
}

export default DragSource(types.food, spec, collect)(Ingredient);