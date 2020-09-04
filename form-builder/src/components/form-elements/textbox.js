import React, { useState } from 'react';

const Textbox = ({ formField }) => (
  <div>
    <label>{formField.label}</label>
    <input
      type="text"
      name={formField.name}
      placeholder={formField.placeholder}
      required={formField.required}
    />
  </div>
);

export default Textbox;
