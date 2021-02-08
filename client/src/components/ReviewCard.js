import React from "react";
import ReactStars from "react-rating-stars-component";

class ReviewCard extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col s12 m12">
          <div class="card white">
            <div class="card-content black-text">
              <span class="card-title">{this.props._displayName}</span>
              <p>
                <ReactStars
                  value={this.props.stars}
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  edit= {false}
                />
              </p>
              <p>{this.props.body}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewCard;
