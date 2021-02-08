import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const DoctorFormReview = ({ onCancel, formValues, submitDoctorForm, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitDoctorForm(formValues, history)}
        className="green btn-flat right white-text"
      >
        Save
        <i className="material-icons right">cloud</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.doctorForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(DoctorFormReview));
