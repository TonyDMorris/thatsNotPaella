import React, { Component } from 'react';
import './App.css';
import IngredientList from './components/IngredientList'
import Paellero from './components/Paellero'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import Fail from './components/Fail'


class App extends Component {
  render() {
    return (
      <div style={style} className="App">
        <header className="App-header">
        <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
  integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
  crossorigin="anonymous"
/>
         </header>

         
<IngredientList/>
<Paellero/>
<Fail id='fail'/>

         
      </div>
    );
  }
}
const style = {
  display:'grid',
  gridTemplateColumns:'70vw 30vw',
  gridTemplateRows:'70vh 30vh'
}
export default DragDropContext(HTML5Backend)(App)
