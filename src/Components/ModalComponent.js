import React from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";

import { showModal } from "../actions/ApodActions";

class ModalComponent extends React.Component {
  componentDidMount() {
    this.props.showModal(false);
  }
  closePopup = e => {
    console.log("ca;;ed");
    console.log(this.props.showModal(false));
  };

  render() {
    console.log(this.props.showThisModal);
    return (
      <Modal show={this.props.showThisModal}>
        <Modal.Header>
          <Modal.Title>{this.props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.modalBody}</Modal.Body>
        <Modal.Footer>
          <button onClick={this.closePopup}>ok</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.GetApodImage.showModal);
  return {
    showThisModal: state.GetApodImage.showModal
  };
};

export default connect(mapStateToProps, { showModal })(ModalComponent);
