import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import DoctorForm from './DoctorForm';
import DoctorFormReview from './DoctorFormReview';

class DoctorNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <DoctorFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <DoctorForm
        onDoctorFormSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'doctorForm'
})(DoctorNew);
