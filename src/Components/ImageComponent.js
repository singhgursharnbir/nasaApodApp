import React from "react";
import { connect } from "react-redux";
import { fetchApodImage, loaded, showModal } from "../actions/ApodActions";
import leftArrow from "../leftArrow.png";
import rightArrow from "../rightArrow.png";
import Modal from "./ModalComponent";

class ImageComponent extends React.Component {
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

  parseDate = input => {
    var parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
  };
  componentDidMount() {
    this.props.fetchApodImage(this.formatDate(new Date()));
  }

  componentDidUpdate() {
    this.props.loaded();
  }

  prevImage = () => {
    let tempDate = this.parseDate(this.props.apodPhotos.date);
    this.date = tempDate.setDate(tempDate.getDate() - 1);

    let Finaldate = this.formatDate(tempDate);

    this.props.fetchApodImage(Finaldate);
  };
  nextImage = e => {
    let dateToday = this.formatDate(new Date());
    if (this.props.apodPhotos.date === dateToday) {
      this.props.showModal(true);
      return;
    }
    let tempDate = this.parseDate(this.props.apodPhotos.date);
    this.date = tempDate.setDate(tempDate.getDate() + 1);

    let Finaldate = this.formatDate(tempDate);

    this.props.fetchApodImage(Finaldate);
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div
              className="col-md-1 my-auto text-center p-2"
              onClick={this.prevImage}
            >
              <img
                style={{ width: 50, height: 50 }}
                src={leftArrow}
                alt="prev"
              />
            </div>

            <div className="col-md-10 card" style={{ padding: 0 }}>
              {this.props.apodPhotos.media_type === "video" ? (
                ""
              ) : (
                <div className="card-img-overlay text-white">
                  {this.props.apodPhotos.date}
                </div>
              )}

              <div>
                {this.props.loaded ? (
                  this.props.apodPhotos.media_type === "video" ? (
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
                  )
                ) : (
                  "Loading"
                )}
              </div>
            </div>
            <div className="col-md-1 my-auto text-center p-2">
              <div
                id="nextButton"
                className="justify-content-center "
                onClick={this.nextImage}
              >
                <img
                  style={{ width: 50, height: 50 }}
                  src={rightArrow}
                  alt="next"
                />
              </div>
            </div>
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
