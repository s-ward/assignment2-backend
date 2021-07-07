import React, {Component} from "react";


export default class Modal extends Component {

    onClose = e => {
        //this.props.show = false;
        this.props.onClose && this.props.onClose(e);
      };

  render() {
      if(!this.props.show){
          return null;
      }
/*     return <div><div>{this.props.children}</div>
    <div>
        <button 
         onClick={e => {
        this.onClose() ;}} 
        >Close
        </button>

        <button 
                   onClick={this.onClose()}>   
                  >Close
        </button>

        </div></div>; */
        return <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
  }
}