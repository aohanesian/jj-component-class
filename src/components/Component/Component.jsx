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

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        };
    }
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
                        <button type="button" className="modal-close-button btn btn-default"
                                onClick={this.toggle}>Cancel
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}