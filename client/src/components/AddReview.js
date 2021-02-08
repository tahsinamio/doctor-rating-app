import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";
import { connect } from "react-redux";
import { postReview, fetchUser } from "../actions";

class AddReview extends Component {
  constructor() {
    super();

    this.state = {
      reviewbody: '',
      stars: 0,
      prompt: '',
    };

    this.handleOnBodyChange = this.handleOnBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
  }

  handleOnBodyChange(e) {
    this.setState({
      reviewbody: e.target.value,
      prompt: '',
    });
  }

  handleSubmit() {
    if (this.state.reviewbody.length >= 5) {
      console.log(this.state.reviewbody);
      const id = window.location.pathname.split("/").slice(-1)[0];
      if (this.state.stars > 0) {
        if (this.props.auth) {
          this.props.postReview(id, this.state.reviewbody, this.state.stars);
        } else {
          this.setState({
            prompt: "Please Login to submit review",
          });
        }       
      } else {
        this.setState({
          prompt: "Please select a star rating",
        });
      }
    } else {
      this.setState({
        prompt: "Minimum 5 characters required",
      });
    }
  }

  ratingChanged(newRating) {
    console.log(newRating);
    this.setState({
      stars: newRating,
    });
  }

  render() {
    return (
      <div>
        <div>
          <div class="col s12 m7">
            <div class="card horizontal">
              <div class="card-stacked">
                <div class="card-content">
                  <span class="card-title">My Review</span>
                  <div class="row">
                    <form class="col s12">
                      <div class="row">
                        <div class="input-field col s12">
                          <ReactStars
                            count={5}
                            onChange={this.ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                          />
                        </div>
                        <div class="input-field col s12">
                          <i class="material-icons prefix">mode_edit</i>
                          <textarea
                            onChange={this.handleOnBodyChange}
                            id="icon_prefix2"
                            class="materialize-textarea"
                          ></textarea>
                          <label for="icon_prefix2"></label>
                          <h6 class="red-text">{this.state.prompt}</h6>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="card-action">
                  <button
                    onClick={this.handleSubmit}
                    class="btn waves-effect waves-light blue darken-1"
                    type="submit"
                    name="action"
                  >
                    Submit
                    <i class="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    review: state.review,
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { postReview, fetchUser })(AddReview);
