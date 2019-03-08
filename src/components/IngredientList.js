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
      <>
      <div style={textStyle}><h1>ADD INGREDIENTS UNTIL YOU RUIN THE PEALLA</h1></div>
      <ul style={style}>
        {this.state.ingredients}
        </ul>
        </>
      )
    }
    }
    const textStyle ={
      gridRow: '2/ span 1',
    gridColumn:'2 / span 1',
    textAlign:'center',
    lineHeight:'0.5',
    
    }

    const style = {
    display:'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr)',
    gridTemplateRows: 'repeat(auto-fill, 1fr',
    gridRowGap:'0.5%',
    gridColumnGap:'0.5%',
    overflow:'hidden',
    overflowY:'scroll',
    border:'solid 10px #003840',
    gridRow: '3/ span 1',
    gridColumn:'2 / span 1',
    backgroundColor:'#008c72'
    };
    export default IngredientList;
    
    
    
    

    
    

    
    

  
  
       




      
     
        
