import React, { Component } from "react";
import DoctorProfile from "./DoctorProfile";
import Reviews from "./Reviews"
import { connect } from "react-redux";
import { fetchDoctor } from "../actions";

class DoctorPage extends Component {
  componentDidMount() {
    this.props.fetchDoctor(window.location.pathname.split("/").slice(-1)[0]);
  }
  
  renderDoctor() {
    return <DoctorProfile {...this.props.doctor} />;
  }

  render() {
    return (
      <div>
        <div>{this.renderDoctor()}</div>
        <div>
          <h4>Reviews</h4>
          <Reviews />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { doctor: state.doctor };
}

export default connect(mapStateToProps, { fetchDoctor })(DoctorPage);
