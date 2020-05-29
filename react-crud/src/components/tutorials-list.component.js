import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";
//import {Button, Modal} from "react-dom";
import {Button, Modal, Badge} from"react-bootstrap";
import Modal2 from "./modal2";



export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      tutorialDialog: false,
      currentIndex: -1,
      tutorialDate: "",
      showInfo: false,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }


  toggleShow() {
    this.setState({showInfo: !this.state.showInfo});
};

showInfo() {
  this.setState({showInfo: true});
};

hideInfo = e => {
  this.setState({showInfo: false});
};


  retrieveTutorials() {
    TutorialDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  openTutorialDialog = event => {
    this.setState({ tutorialDialog: true });
  };

  closeTutorialDialog = event => {
    this.setState({ tutorialDialog: false });
  };

  setActiveTutorial(tutorial, index) {
    var tempDate = new Date(tutorial.date);

    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
      tutorialDate: tempDate
    });
  }

  removeAllTutorials() {
    TutorialDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    TutorialDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  


 
  

  render() {
    const { searchTitle, tutorials, currentTutorial, currentIndex, 
      tutorialDate} = this.state;



      
    return (
<div>






{/* <div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div> */}
      
      <div className="container">
        <div className="row">
        <div className="col"></div>
          <div className="col-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
            </div>
          </div>
          <div className="col"></div>
        </div>



        <div className="row">
          <h4>Articles List</h4>

          <table className="table table-sm table-striped 
                            table-hover
                            table-bordered">
            <thead>
              <tr><th>Title</th>
                  <th>Result</th>
                  <th>Author</th>
                  <th>Year</th>
                  <th>URL</th>
                  <th>Info</th>
                  <th>Edit</th>
              </tr>
            </thead>
            <tbody>
           
         
                {tutorials &&
                tutorials.map((tutorial, index) => ( 
        
                  <tr /* className={"group-item " + 
                (index === currentIndex ? "active" :"")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}  */>
                    <td>{tutorial.title}</td>
                    <td>{tutorial.description}</td>
                    <td>{tutorial.author}</td>
                    <td>{new Date(tutorial.date).getFullYear()}</td>
                    <td>{tutorial.url}</td>
                    <td>
{/*                       <button className="btn btn-primary"
                                data-toggle="modal" 
                                data-target="#exampleModal">
                      Info
                    </button> */}


{/*                     <Badge as="button"
                
                className="badge badge-warning"
                onClick={e => {this.showInfo()}}
              >
                Edit
              </Badge> */}

{/*               <Badge as="button"
                
                className="badge badge-warning"
                onClick={e => {this.showInfo()}}
              >
                Edit
              </Badge> */}

              <Link
                
                className="badge badge-success"
                onClick={e => {this.showInfo()}}
              >
                Info
              </Link>



{/*                     <div  className="modal fade"
                          id="infoModal"
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="infoModalLabel"
                          aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              More Info
                            </div>
                            <div className="modal-body">
                              More info about Article here
                            </div>
                            <div className="modal-footer">
                              <button className="btn btn-secondary" 
                                    data-dismiss="modal">Close
                                    </button>
                            </div>
                          </div>
                        </div>


                          </div> */}

                         






                    
{/*                     <td><button className="badge badge-success" 
                              onClick={this.openTutorialDialog}>
                                  Info
                                </button> */}
                      
                      {/* <Button onClick={this.openTutorialDialog}
                    variant="contained"
                    className="badge badge-success"> Info</Button> */}
                    
                    </td>
                    
                    <td><Link
                to={"/tutorials/" + tutorial.id}
                className="badge badge-warning"
              >
                Edit
              </Link></td>
            
              


          </tr>
          
          ))}
          </tbody>
          </table>
          <Modal2
            open={this.state.showInfo}
            onClose={this.hideInfo}>More Info

            </Modal2> 

{/*           <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.title}
                  
                </li>
              ))}
          </ul>  */}

{/*           <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button> */}

{/*          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button> */}


{/*           <button className="btn btn-primary"
                                data-toggle="modal" 
                                data-target="#exampleModal">
                      Info
                    </button>

                    <button className="btn btn-primary"
                    onClick="document.getElementById('id01'.style.display='block'"
                                className="w3-button">Open Modal
     
                    </button>

                    <button className="btn btn-primary"
                    onClick="document.getElementById('id01'.style.display='block'"
                                className="w3-button">Open Modal
     
                    </button> */}
                    




</div>



        </div>


        
{/*         <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>Article</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentTutorial.title}
              </div>

              <div>
                <label>
                  <strong>Author:</strong>
                </label>{" "}
                {currentTutorial.author}
              </div>

              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentTutorial.description}
              </div>

              
              
              <div>
                <label>
                  <strong>Date Published:</strong>
                </label>{" "}
                {tutorialDate.toString()} <br></br>
                {tutorialDate.getFullYear()}
                {"or"}<br></br>
                {tutorialDate.getDate()+"-"+tutorialDate.getMonth()+1 +"-"+ tutorialDate.getFullYear()}
              </div>

              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentTutorial.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/tutorials/" + currentTutorial.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on an Article</p>
            </div>
          )}
        </div> */}





      </div>
      
    );
  }
}