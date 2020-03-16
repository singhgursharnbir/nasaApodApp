import React from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";

import { showModal } from "../actions/ApodActions";

class ModalComponent extends React.Component {
  componentDidMount() {
    this.props.showModal(false);
  }
  closePopup = e => {
    this.props.showModal(false);
  };

  render() {
    return (
      <Modal show={this.props.showModal}>
        <Modal.Header>
          <Modal.Title>Hi</Modal.Title>
        </Modal.Header>
        <Modal.Body>The body</Modal.Body>
        <Modal.Footer>
          <button onClick={this.closePopup}>ok</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    showModal: state.GetApodImage.showModal
  };
};

export default connect(mapStateToProps, { showModal })(ModalComponent);
