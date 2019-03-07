import React, { Component } from 'react'
import IngredientJSON from './IngredientJSON'
import Ingredient from './Ingredient.js';


 let placeHolder = IngredientJSON




export class IngredientList extends Component {
  constructor(props) {
    super(props);
  this.state = {
      

    ingredients:placeHolder.map(i => {
    
      return <Ingredient id={i.id} handleDrop={(x)=>this.state.deleteItem(x)}   key={i.id} name={i.name} path={i.path}/>
    }),
    
    deleteItem:(x)=>{
      return this.setState(prevState => {
        let ingredients = prevState.ingredients
        
        ingredients = ingredients.filter(y => y.props.name !== x)
        
        return{ingredients}
      })
    },
  }}
  render() {
    
    return (
      
      <ul style={style}>
        {this.state.ingredients}
        </ul>
      )
    }
    }
    const style = {
    display:'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridTemplateRows: 'repeat(auto-fill, minmax(250px, 1fr))',
    overflow:'hidden',
    overflowY:'scroll',
    gridRow: '2 / span 1',
    gridColumn:'2 / span 1'
    };
    export default IngredientList;
    
    
    
    

    
    

    
    

  
  
       




      
     
        
