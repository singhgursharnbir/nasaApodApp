import React from "react";
import ImageComponent from "./ImageComponent";
import ImageDescription from "./ImageDescription";

class ApodMain extends React.Component {
  render() {
    return (
      <div className="container">
        <ImageComponent />
        <ImageDescription />
      </div>
    );
  }
}

export default ApodMain;
