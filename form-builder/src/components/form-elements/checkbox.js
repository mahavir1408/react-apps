import React, { useState } from 'react';

const Checkbox = ({ name, required, handleChange }) => (
    <div>
      <input 
        type="checkbox"
        name={required}
        onChange={handleChange}
      />
    </div>
  );

export default Checkbox;
