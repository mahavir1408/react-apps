import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing.
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('Saving data!');
    }
  }

  componentWillUnmount() {
    console.log('component Will Unmount!');
  }

  handleDeleteOptions() {
    this.setState(() => ({options: []}));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option)=>(optionToRemove !== option))
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOptions(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) >  -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  }

  render() {
    const title = 'Indecision';
    const subtitle = '!!Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options && this.state.options.length > 0}
          handlePick={this.handlePick}  
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOptions={this.handleAddOptions}
        />
      </div>
    );
  }
}

export default IndecisionApp;