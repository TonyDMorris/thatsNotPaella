import React, { Component } from 'react'
import IngredientJSON from './IngredientJSON'
import Ingredient from './Ingredient.js'











export class IngredientList extends Component {
  render() {
   
    

    const ingredients = IngredientJSON.map(i => {
      
      return <Ingredient key={i.id} name={i.name}/>
    });
    return (


  
  <ul style={style}>
    {ingredients}
    </ul>
  
       




      
     
        
    )
  }
}
const style = {
  border:'solid 1px blue',
  gridRow: '1 / span 1',
  gridColumn:'2 / span 1'
};
export default IngredientList;
