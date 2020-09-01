import React from 'react';
import Option from './option';

const Options = (props) => (
  <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      {props.options.length === 0 && <p>Please add an options to get started!</p>}
      {
          props.options.map((option) => (
              <Option
                  key={option}
                  optionText={option}
                  handleDeleteOption={props.handleDeleteOption}
              />
          ))
      }
  </div>
);

export default Options;