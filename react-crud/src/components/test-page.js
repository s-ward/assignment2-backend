import React, { Component } from "react";
//import Modal from "./modal";
//import {Button, Modal} from "react-dom";
import {Button, Modal, Badge} from"react-bootstrap";
import { Link } from "react-router-dom";
import Modal2 from "./modal2";


export default class TestPage extends Component {
  
    state = {
        show: false,
        showInfo: false
      };

      openBookDialog = event => {
        this.setState({ showInfo: true });
      };

      closeBookDialog = event => {
        this.setState({ showInfo: false });
      };

      toggleShow() {
          this.setState({showInfo: !this.state.showInfo});
      };


      showModal2() {
          this.setState({show: true});
      };

      hideModal2() {
          this.setState({show: false});
      };

      showModal = e => {
        this.setState({
          show: true
        });
      };

      hideModal = e => {
        this.setState({
          show: false
        });
      };

      toggleModal() {
          this.setState({show: !this.state.show});
      };
 


      render() {


        
        return (





            <>

<span
                
                className="badge badge-warning"
                onClick={e => {this.toggleShow()}}
              >
                Edit
              </span>





            <Button variant="primary"  onClick={e => {this.toggleModal()}}>
              Launch demo modal
            </Button>

            <button className="btn btn-primary"
                onClick={e => {this.openBookDialog()}}> Show</button>
      
            <Modal show={this.state.show} 
            onHide={e => {this.toggleModal();}}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={e => {this.toggleModal()}}>
                  Close
                </Button>
                <Button variant="primary" onClick={e => {this.toggleModal()}}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal2
            open={this.state.showInfo}
            onClose={this.toggleShow}> this is message</Modal2>
          

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