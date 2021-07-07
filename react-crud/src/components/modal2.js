import React, { Component } from "react";
//import Modal from "./modal";
//import {Button, Modal} from "react-dom";
import {Button, Modal, Badge} from"react-bootstrap";
import { Link } from "react-router-dom";





export default class Modal2 extends Component {
  
      render() {

        const { classes, open, onClose } = this.props;
        
        return (

            <>
      
            <Modal show={open} 
            onHide={onClose} animation={true} size="lg"
            aria-labelledby="contained-modal-title-vcenter"  
            centered
            shouldReturnFocusAfterClose="false">
              <Modal.Header closeButton>
                <Modal.Title>{this.props.children}
                
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>Somehow display object info here with
                  greater description and link to Article website<br />
                  Title:<br />
                  Author:<br />
                  Description<br />
                  Year:<br />

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" >
                  Close
                </Button>


                <Button variant="primary" onClick={() => 
                window.open("https://www.google.com", "_blank")}>
                    Link to google
                </Button>

                
              </Modal.Footer>
            </Modal>
          </>





/*             <div>  
            <h1> Simple Popup Example In React Application </h1>  
<Modal onClose={this.showModal} show={this.state.show} >
    Message in modal</Modal>

<button className="btn btn-primary"
        onClick={e => {this.showModal();}}
                                >Open Modal
     
                    </button>

            </div>    */
  
        );
      }
    }