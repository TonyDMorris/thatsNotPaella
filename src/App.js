import React, { Component } from "react";
import "./App.css";
import IngredientList from "./components/IngredientList";
import Paellero from "./components/Paellero";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

class App extends Component {
  render() {
    return (
      <div style={style} className="App">
        <header className="App-header">
          <link
            href="https://fonts.googleapis.com/css?family=Indie+Flower"
            rel="stylesheet"
          />
        </header>

        <IngredientList />
        <Paellero />
      </div>
    );
  }
}
const style = {
  display: "grid",
  gridTemplateColumns: "10vw 80vw 10vw",
  gridTemplateRows: "40vh 5vh 55vh"
};
export default DragDropContext(HTML5Backend)(App);
