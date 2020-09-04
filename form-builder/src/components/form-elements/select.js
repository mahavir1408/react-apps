import React from 'react';

const Select = ({formField}) => {
  return (
    <div>
      <label>{formField.label}</label>
      <select name={formField.name}>
        <option value="">Select an option</option>
        {formField.options.map((option, i) => <option key={i} value={option.value}>{option.text}</option>)}
      </select>
    </div>
  );
}; 

export default Select;
