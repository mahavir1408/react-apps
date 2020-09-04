import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import formData from '../public/data/single_form.json';
import formData from '../public/data/multiple_form.json';

// import 'normalize.css/normalize.css';
// import './styles/styles.scss';

// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";

// Import internal components
// import Formit from './components/form';
import FormWizard from './components/form-wizard';



// const [first, ...rest] = formData;
// console.log(formData);

ReactDOM.render(<FormWizard config={formData} />, document.getElementById('app'));
