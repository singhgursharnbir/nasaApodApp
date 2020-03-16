import React from "react";
import { connect } from "react-redux";
import { fetchApodImage } from "../actions/ApodActions";

class ImageDescription extends React.Component {
  componentDidMount() {
    this.props.fetchApodImage();
  }

  render() {
    return (
      <div className="row">
        {!this.props.error ? (
          <div className="col-md-12">
            <div className="row justify-content-center mt-2">
              <h2>{this.props.apodPhotos.title}</h2>
            </div>
            <div className="row justify-content-center">
              <p>{this.props.apodPhotos.explanation}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    apodPhotos: state.GetApodImage.image,
    error: state.GetApodImage.error
  };
};

export default connect(mapStateToProps, { fetchApodImage })(ImageDescription);
