import React, { Component } from 'react'
import ingredientJSON from './IngredientJSON'

export class IngredientList extends Component {
  render() {

    const ingredient = ingredientJSON;

    const ingredients = ingredient.map(i => {
      
      return <li style={style} key={i.id}>{i.name}</li>
    });
    return (
      
      <ul style={style}>
         {ingredients} 
      </ul>

        
    )
  }
}
const style = {
  border:'solid 1px blue'
};
export default IngredientList
