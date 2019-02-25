import React, {Component} from 'react'



export class Paellero extends Component {
    render() {
        return (
<div style={style}>this is where the paellero will be</div>
        )
    }
};


const style = {
    height:'100%',
    width:'100%',
    backgroundColor:'blue',
    gridRow: '1 / span 1'
};
export default Paellero