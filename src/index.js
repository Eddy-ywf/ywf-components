import React from 'react';
import './assets/scss/styles.module.scss';

import { Button } from './components';

export const ExampleComponent = ({ text }) => {
  return (
    <Button outline color='yoodoo-primary'>
      Yoodoo Button
    </Button>
  );
};
