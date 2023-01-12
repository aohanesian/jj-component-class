import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Modal extends React.Component {

    static Header = Header
    static Body = Body
    static Footer = Footer

    render() {
        return <div className={`modal ${this.props.isOpen ? 'fade show' : ''}`}
                    style={this.props.isOpen ? {display: "block"} : {display: "none"}}
                    role="dialog">
                    {this.props.children}
                </div>;
    }
}

export default Modal;

