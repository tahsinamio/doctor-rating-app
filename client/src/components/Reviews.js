import React, { Component } from "react";
import ReviewCard from "./ReviewCard";
import { connect } from "react-redux";
import { fetchReviews } from "../actions";

class Reviews extends Component {
  componentDidMount() {
    this.props.fetchReviews(window.location.pathname.split("/").slice(-1)[0]);
  }
  
  renderReviews() {
    return this.props.reviews.reverse().map(reviews => {
      return (
        <ul>
          <li>
            <ReviewCard {...reviews} />
          </li>
        </ul>
      );
    })
  }

  render() {
    return (
      <div>
        {this.renderReviews()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { reviews: state.reviews };
}

export default connect(mapStateToProps, { fetchReviews })(Reviews);
