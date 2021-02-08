import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import DoctorField from './DoctorField';
import formFields from './formFields';

class DoctorForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={DoctorField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Add a New Doctor Profile</h3>
        <form onSubmit={this.props.handleSubmit(this.props.onDoctorFormSubmit)}>
          {this.renderFields()}
          <Link to="/Admin" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}


export default reduxForm({
  form: 'doctorForm',
  destroyOnUnmount: false
})(DoctorForm);
