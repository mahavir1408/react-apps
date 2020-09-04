import React, { useState } from 'react';
import { ClayDatePicker } from '@clayui/date-picker';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

/*
const Datepicker = () => {
  const [value, setValue] = useState(null);
  return (
    <ClayDatePicker
      onValueChange={setValue}
      placeholder="YYYY-MM-DD"
      spritemap={spritemap}
      value={value}
      years={{
        end: 2024,
        start: 1997
      }}
    />
  );
};
*/

const Datepicker = () => (<div>Datepicker</div>)

export default Datepicker;
