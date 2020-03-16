import React from "react";
import ImageComponent from "./ImageComponent";
import ImageDescription from "./ImageDescription";

class ApodMain extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <ImageComponent />
          <ImageDescription />
        </div>
      </div>
    );
  }
}

export default ApodMain;
