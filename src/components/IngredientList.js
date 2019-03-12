import React, { Component } from "react";
import IngredientJSON from "./IngredientJSON";
import Ingredient from "./Ingredient.js";

let placeHolder = IngredientJSON;

export class IngredientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flavourText: "Add Things Until You Ruin The Paella",

      ingredients: placeHolder.map(i => {
        return (
          <Ingredient
            id={i.id}
            handleDrop={x => this.state.deleteItem(x)}
            key={i.id}
            name={i.name}
            path={i.path}
          />
        );
      }),

      deleteItem: x => {
        this.setState(prevState => {
          function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
          let successArray = [
            "well done",
            "now it's cooking",
            "keep going it smells great",
            "wow its going to be delicious"
          ];
          let length = successArray.length;
          let ingredients = prevState.ingredients;
          let flavourText = prevState.flavourText;
          ingredients = ingredients.filter(y => y.props.name !== x);
          flavourText = successArray[getRandomInt(length)];
          return { ingredients, flavourText };
        });
      }
    };
  }
  render() {
    return (
      <>
        <div style={textStyle}>
          <h1>{this.state.flavourText}</h1>
        </div>
        <ul style={style}>{this.state.ingredients}</ul>
      </>
    );
  }
}
const textStyle = {
  gridRow: "2/ span 1",
  gridColumn: "2 / span 1",
  textAlign: "center",
  lineHeight: "0.5"
};

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr)",
  gridTemplateRows: "repeat(auto-fill, 1fr",
  gridRowGap: "0.5%",
  gridColumnGap: "0.5%",
  overflow: "hidden",
  overflowY: "scroll",
  border: "solid 10px #003840",
  gridRow: "3/ span 1",
  gridColumn: "2 / span 1",
  backgroundColor: "#008c72"
};
export default IngredientList;
