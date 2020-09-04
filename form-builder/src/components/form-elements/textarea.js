import React, { useState } from 'react';

/*
class Textarea extends React.Component {

  handleInputValue()

  render() {
    return (
      <div>
        <label>{this.props.formField.label}</label>
        <textarea
          type="textarea"
          name={this.props.formField.name}
          required={this.props.formField.required}
          placeholder={this.props.formField.placeholder}
          onChange={this.handleInputValue}
        />
      </div>
    );
  }
}
*/

const Textarea = ({formField}) => (
  <div>
    <label>{formField.label}</label>
    <textarea
      type="textarea"
      name={formField.name}
      required={formField.required}
      placeholder={formField.placeholder}
    />
  </div>
);


export default Textarea;
