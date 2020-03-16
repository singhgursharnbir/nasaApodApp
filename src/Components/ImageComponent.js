import React from "react";
import Modal from "./ModalComponent";

import { formatDate } from "../common";
import { connect } from "react-redux";
import { fetchApodImage, loaded, showModal } from "../actions/ApodActions";

import PrevIcon from "./prevIcon";
import NextIcon from "./nextIcon";
import ImageNotFound from "./ImageNotFound";

class ImageComponent extends React.Component {
  componentDidMount() {
    this.props.fetchApodImage(formatDate(new Date()));
  }

  componentDidUpdate() {
    this.props.loaded();
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <PrevIcon />
            <div className="col-md-10 card" style={{ padding: 0 }}>
              {!this.props.error ? (
                <div>
                  {this.props.apodPhotos.media_type === "video" ? (
                    ""
                  ) : (
                    <div className="card-img-overlay text-white">
                      {this.props.apodPhotos.date}
                    </div>
                  )}
                  <div>
                    {this.props.apodPhotos.media_type === "video" ? (
                      <iframe
                        className="d-block w-100 sliderImage"
                        title="apodYoutube"
                        src={this.props.apodPhotos.url}
                      ></iframe>
                    ) : (
                      <img
                        className="d-block w-100 "
                        src={this.props.apodPhotos.hdurl}
                        alt="main"
                      />
                    )}
                  </div>
                </div>
              ) : (
                <ImageNotFound />
              )}
            </div>
            <NextIcon />
          </div>
        </div>

        <Modal
          modalTitle="I am really Sorry!!"
          modalBody="I cannot fetch image from future yet..."
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    apodPhotos: state.GetApodImage.image,
    error: state.GetApodImage.error,
    loaded: state.GetApodImage.loaded
  };
};

export default connect(mapStateToProps, { fetchApodImage, loaded, showModal })(
  ImageComponent
);
