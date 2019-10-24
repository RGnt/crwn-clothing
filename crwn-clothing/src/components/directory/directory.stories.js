import React from 'react';
import { storiesOf } from '@storybook/react';
import Directory from './directory.component';

storiesOf('Directory menu', module)
    .add('Renders menu item', () => (
        <Directory />
    ))