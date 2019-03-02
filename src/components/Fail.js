import React, {Component} from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Ingredient from './Ingredient'
class Fail extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleReset = () => window.location.reload()
  

  render() {
    return (
      <>
        

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleReset}>
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}


  
  

  export default Fail