import React, { useState } from 'react';

const Radio = ({ name, required, handleChange }) => (
    <div>
      <input 
        type="radio"
        name={required}
        onChange={handleChange}
      />
    </div>
  );

export default Radio;
