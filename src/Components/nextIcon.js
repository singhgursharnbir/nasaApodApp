import React from "react";
import { connect } from "react-redux";
import { fetchApodImage, showModal } from "../actions/ApodActions";
import { formatDate, parseDate } from "../common";
import rightArrow from "../rightArrow.png";

class nextIcon extends React.Component {
  nextImage = e => {
    let dateToday = formatDate(new Date());
    if (this.props.apodPhotos.date === dateToday) {
      this.props.showModal(true);
      return;
    }
    let tempDate = parseDate(this.props.apodPhotos.date);
    this.date = tempDate.setDate(tempDate.getDate() + 1);

    let Finaldate = formatDate(tempDate);

    this.props.fetchApodImage(Finaldate);
  };
  render() {
    return (
      <div className="col-md-1 my-auto text-center p-2">
        <div
          id="nextButton"
          className="justify-content-center "
          onClick={this.nextImage}
        >
          <img style={{ width: 50, height: 50 }} src={rightArrow} alt="next" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    apodPhotos: state.GetApodImage.image
  };
};

export default connect(mapStateToProps, { fetchApodImage, showModal })(
  nextIcon
);
