import React from 'react';
import { render } from 'react-dom'
import Greeting from "./greeting";

render(
  <Greeting name="World"/>,
  document.getElementById('root')
);

console.log(1);