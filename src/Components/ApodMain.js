import React from "react";
import ImageComponent from "./ImageComponent";
import ImageDescription from "./ImageDescription";
import { connect } from "react-redux";
import { fetchApodImage } from "../actions/ApodActions";
import ImageNotFound from "./ImageNotFound";

class ApodMain extends React.Component {
  formatDate = tempDate => {
    tempDate.toISOString().slice(0, 10);

    var d = new Date(tempDate),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };
  componentDidMount() {
    this.props.fetchApodImage(this.formatDate(new Date()));
  }
  render() {
    return (
      <div className="container">
        {this.props.error ? (
          <div>
            <ImageNotFound />
          </div>
        ) : (
          <div>
            <ImageComponent />
            <ImageDescription />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.GetApodImage.error
  };
};

export default connect(mapStateToProps, { fetchApodImage })(ApodMain);
