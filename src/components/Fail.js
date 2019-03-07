import React, {Component} from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

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
        

        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
       
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={this.handleReset}>
              Start again!
            </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}


  
  

  export default Fail