import React from 'react';
import Textarea from '../form-elements/textarea';
import Select from '../form-elements/select';
import Textbox from '../form-elements/textbox';


class Form extends React.Component {

  handleInputValue = (e) => {
    console.log('handleInputValue', e);
  }

  fieldMap = (formField) => {
    console.log(formField);
    let field = "";
    switch (formField.code) {
      case "TextBox":
        field = (<Textbox key={formField.id} formField={formField} />);
        break;
      case "ListBox":
        field = (<Select key={formField.id} formField={formField} />);
        break;
      case "TextArea":
        // field = (<Textarea key={formField.id} formField={formField} handleInputValue={this.handleInputValue} />);
        field = (<Textarea key={formField.id} formField={formField} />);
        break;
    }
    return field;
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleFormSubmit(e.target.elements);
    // console.log(e.target.elements);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          {this.props.formConfig.fields.map((field) => this.fieldMap(field))}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
