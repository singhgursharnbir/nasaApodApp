import React from "react";
import { connect } from "react-redux";
import { fetchApodImage } from "../actions/ApodActions";
import { formatDate, parseDate } from "../common";
import leftArrow from "../leftArrow.png";

class prevIcon extends React.Component {
  prevImage = () => {
    let tempDate = parseDate(this.props.apodPhotos.date);
    this.date = tempDate.setDate(tempDate.getDate() - 1);

    let Finaldate = formatDate(tempDate);

    this.props.fetchApodImage(Finaldate);
  };
  render() {
    return (
      <div
        className="col-md-1 my-auto text-center p-2"
        onClick={this.prevImage}
      >
        <img style={{ width: 50, height: 50 }} src={leftArrow} alt="prev" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    apodPhotos: state.GetApodImage.image
  };
};

export default connect(mapStateToProps, { fetchApodImage })(prevIcon);
