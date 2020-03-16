import React from "react";
import DatePicker from "react-datepicker";
import { formatDate } from "../common";
import { connect } from "react-redux";
import { fetchApodImage, showModal } from "../actions/ApodActions";

class pickDate extends React.Component {
  changeDate = date => {
    let Finaldate = date;
    let dateToday = new Date();
    if (Finaldate > dateToday) {
      this.props.showModal(true);
      return;
    } else {
      this.props.fetchApodImage(formatDate(Finaldate));
    }
  };

  render() {
    return (
      <div className="col-md-12 mb-2">
        <span>Pick a date:</span>
        <span className="col-md-4">
          <DatePicker
            className="form-control"
            dateFormat="yyyy-MM-dd"
            selected={this.props.date}
            onChange={this.changeDate}
          />
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    apodPhotos: state.GetApodImage.image,
    date: state.GetApodImage.date
  };
};

export default connect(mapStateToProps, { fetchApodImage, showModal })(
  pickDate
);
