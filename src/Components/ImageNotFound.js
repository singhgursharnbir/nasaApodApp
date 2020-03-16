import React from "react";
import notFoundImage from "../imageNotFound.jpg";

class ImageNotFound extends React.Component {
  render() {
    return (
      <div className="row">
        <img
          className="d-block w-100 sliderImage"
          src={notFoundImage}
          alt="notFound"
        />
      </div>
    );
  }
}

export default ImageNotFound;
