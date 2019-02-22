import React, { Component } from 'react';
import './App.css';
import IngredientList from './components/ingredientList'


class App extends Component {
  render() {
    return (
      <div style={style} className="App">
        <header className="App-header">
         </header>

         
<IngredientList/>

         
      </div>
    );
  }
}
const style = {
  display:'grid',
  gridTemplateColumns:'70vw 30vw'
}
export default App;
