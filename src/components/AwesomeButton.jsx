import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-blue.css';

function Button() {
  return (
    <AwesomeButton
      type="primary"
      href="mailto:matt@tvsmatt.com"
      target="_blank"
    >
      Let's Do Business
    </AwesomeButton>
  );
}

export default Button