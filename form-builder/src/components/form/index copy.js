import React, { useState } from 'react';
import ClayForm, {ClayInput} from '@clayui/form';

import Textbox from '../form-elements/textbox';
import Textarea from '../form-elements/textarea';
import Select from '../form-elements/Select';
import Radio from '../form-elements/Radio';
import Checkbox from '../form-elements/Checkbox';
import Datepicker from '../form-elements/datepicker';

const extractSubFormObject = formsObj => formsObj.filter((formObj) => !formObj.name.includes('.frm'));


const Formit = (props) => {
  // console.log(props.config);
   console.log(extractSubFormObject(props.config));
  // extractSubFormObject(props.config);
  const [active, setActive] = useState(false);
  return (
    <div className="sheet">
      <ClayForm>
        <Textbox />
        <Textarea />
        <Select />
        <Radio />
        <Checkbox />
        <Datepicker />
      </ClayForm>
    </div>
  );
};

export default Formit;
