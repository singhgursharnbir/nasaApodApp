import React from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";

import { showModal } from "../actions/ApodActions";

class ModalComponent extends React.Component {
  componentDidMount() {
    this.props.showModal(false);
  }
  closePopup = e => {
    console.log(this.props.showModal(false));
  };

  render() {
    return (
      <Modal show={this.props.showThisModal}>
        <Modal.Header>
          <Modal.Title>{this.props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.modalBody}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={this.closePopup}>
            Ok
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    showThisModal: state.GetApodImage.showModal
  };
};

export default connect(mapStateToProps, { showModal })(ModalComponent);
