import React, { Component } from 'react';
import './App.css';
import IngredientList from './components/IngredientList'
import Paellero from './components/Paellero'

class App extends Component {
  render() {
    return (
      <div style={style} className="App">
        <header className="App-header">
         </header>

         
<IngredientList/>
<Paellero/>

         
      </div>
    );
  }
}
const style = {
  display:'grid',
  gridTemplateColumns:'70vw 30vw',
  gridTemplateRows:'70vh 30vh'
}
export default App;
