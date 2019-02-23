import React, { Component } from 'react';
import './App.css';
import IngredientList from './components/IngredientList'


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
