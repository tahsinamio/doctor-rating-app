import React from "react";
import ReactStars from "react-rating-stars-component";
import AddReview from "./AddReview";

class DoctorProfile extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true,
    });
  }

  render() {
    return (
      <div>
        <div class="col s12 m7">
          <div class="card horizontal">
            <div class="card-image"></div>
            <div class="card-stacked">
              <div class="card-content">
                <h4 class="header">{this.props.name}</h4>
                <h6>{this.props.specialty}</h6>
                <ReactStars
                  value={this.props.rating / this.props.evals}
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  isHalf={true}
                  edit={false}
                />
                <span style={{ size: "5px" }}>{this.props.evals} ratings</span>
                <div class="valign-wrapper">
                  <i class="material-icons">phone</i>
                  <span style={{ paddingLeft: "10px" }}>
                    {this.props.phone}
                  </span>
                </div>
                <div class="valign-wrapper">
                  <i class="material-icons">subject</i>
                  <span style={{ paddingLeft: "10px" }}>
                    {this.props.description}
                  </span>
                </div>
                <div class="valign-wrapper">
                  <i class="material-icons">local_hospital</i>
                  <span style={{ paddingLeft: "10px" }}>
                    {this.props.hospital}
                  </span>
                </div>
                <div class="valign-wrapper">
                  <i class="material-icons">home</i>
                  <span style={{ paddingLeft: "10px" }}>
                    {this.props.address}
                  </span>
                </div>
              </div>
              <div class="card-action">
                <button
                  onClick={this.handleClick}
                  class="btn waves-effect waves-light blue darken-1"
                >
                  Leave Review
                </button>
              </div>
            </div>
          </div>
        </div>
        {this.state.clicked ? <AddReview /> : null}
      </div>
    );
  }
}

export default DoctorProfile;
