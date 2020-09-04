import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import Form from '../form/index';


class FormWizard extends React.Component {
  state = {
    subForms: []
  };

  constructor(props) {
    super(props);
    // console.log(props);
    // const extractSubFormObject = formsObj => formsObj.filter((formObj) => !formObj.name.includes('.frm'));
    // this.setState({subForms: props.config.filter((formObj) => !formObj.name.includes('.frm'))})
    /*
    INPUT FROM JBPM
    Const FormObj = {
      // root the object with name that end in .frm
      // add child to that object with name of children/subforms
      // include other forms in the object
      translate the object into a obj map 
    }

    OUTPUT FROM FORM WIZARD
    */
  }

  handleFormSubmit = (formData) => {
    
    console.log('aaa', formData);
  }

  componentDidMount() {
    // Remove the sub-form object with name containing ".frm" substring form the sub-forms array
    this.setState({ subForms: this.props.config.filter((formObj) => !formObj.name.includes('.frm')) });
    console.log('componentDidMount');
  }

  render() {
    return (
      <div>
        <Header />
        {(this.state.subForms.length > 0) && <Form handleFormSubmit={this.handleFormSubmit} formConfig={this.state.subForms[1]}/>}
      </div>
    );
  }
}

export default FormWizard;
