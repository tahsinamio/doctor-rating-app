import React from "react";
import ReactStars from "react-rating-stars-component";

class DoctorCard extends React.Component {


  render() {
    return (
      <div class="row">
        <div class="col s12 m12">
          <div class="card white hoverable">
            <div class="card-content black-text">
              <span class="card-title">{this.props.name}</span>
              <ReactStars
                value={this.props.rating / this.props.evals}
                count={5}
                size={24}
                activeColor="#ffd700"
                isHalf={true}
                edit={false}
              />
              <span style={{ size: "5px" }}>{this.props.evals} ratings</span>
              <p>{this.props.specialty}</p>
              <p>{this.props.hospital}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorCard;
