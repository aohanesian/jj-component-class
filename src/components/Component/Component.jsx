import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";

export default class Component extends React.Component {
    static Footer = Footer
    static Header = Header
    static Body = Body
    static Modal = Modal

    state = {modal: false};
    toggle = (e) => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    render() {
        return (
            <div>
                <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
                <Modal isOpen={this.state.modal}>
                    <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="modal-close-button btn btn-default" onClick={this.toggle}>Cancel</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

// <div>
//     <button onClick={this.toggle} type="button" className="modal-open-button btn btn-danger">Open</button>
//     <div className="modal" style={this.state.modal ? {display: "block"} : {display: "none"}} role="dialog">
//         <div className="modal-dialog">
//             <div className="modal-content">
//                 <div className="modal-header">
//                     <div className="modal-title">Modal title</div>
//                     <button onClick={this.toggle} type="button" className="btn-close"
//                             data-bs-dismiss="modal" aria-label="Close">
//                     </button>
//                 </div>
//                 <div className="modal-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
//                 <div className="modal-footer">
//                     <button onClick={this.toggle} type="button"
//                             className="modal-close-button btn btn-default">Cancel
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>