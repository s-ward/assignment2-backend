import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.getTutorial = this.getTutorial.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
        id: null,
        title: "",
        author: "",
        date: "",
        description: "",
        url: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getTutorial(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description
      }
    }));
  }

  onChangeAuthor(e) {
    const author = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        author: author
      }
    }));
  }

  onChangeDate(e) {
    const date = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        date: date
      }
    }));
  }

  onChangeUrl(e) {
    const url = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        url: url
      }
    }));
  }

  getTutorial(id) {
    TutorialDataService.get(id)
      .then(response => {
        this.setState({
          currentTutorial: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentTutorial.id,
      title: this.state.currentTutorial.title,
      description: this.state.currentTutorial.description,
      author: this.state.currentTutorial.author,
      date: this.state.currentTutorial.date,
      url: this.state.currentTutorial.url,
      published: status
    };

    TutorialDataService.update(this.state.currentTutorial.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateTutorial() {
    TutorialDataService.update(
      this.state.currentTutorial.id,
      this.state.currentTutorial
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The tutorial was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteTutorial() {    
    TutorialDataService.delete(this.state.currentTutorial.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/tutorials')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        {currentTutorial ? (
          <div className="edit-form">
            <h4>Article</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.title}
                  onChange={this.onChangeTitle}
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  value={currentTutorial.author}
                  onChange={this.onChangeAuthor}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">Date Published</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  //value={new Date(parseInt(currentTutorial.date.substr(0,10)))}
                  //value={(new Date(JSON.parse("\"2014-01-01T23:28:56.782Z\"")))}
                  value={currentTutorial.date ? 
                      currentTutorial.date.substr(0,10) : null}
                  //value="2000-01-27"
                  onChange={this.onChangeDate}

                  

                />
              </div>


              <div className="form-group">
                <label htmlFor="url">URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="url"
                  required
                  value={currentTutorial.url}
                  onChange={this.onChangeUrl}
                />
              </div>


              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentTutorial.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on an Article...</p>
          </div>
        )}
      </div>
    );
  }
}