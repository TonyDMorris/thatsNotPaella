import React, { Component } from 'react'
import IngredientJSON from './IngredientJSON'
import Ingredient from './Ingredient.js';


  








export class IngredientList extends Component {
  render() {
   
    const deleteItem = (id) => {
      console.log(id)
    }

    const ingredients = IngredientJSON.map(i => {
      
      return <Ingredient  key={i.id} name={i.name} path={i.path}/>
    });
    return (


  
  <ul style={style}>
    {ingredients}
    </ul>
  
       




      
     
        
    )
  }
}
const style = {
  display:'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
  gridTemplateRows: 'repeat(auto-fill, minmax(100px, 1fr))',
  
  border:'solid 1px blue',
  gridRow: '1 / span 1',
  gridColumn:'2 / span 1'
};
export default IngredientList;
