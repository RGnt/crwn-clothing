import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './button.component';

storiesOf('Button', module)
    .add('Renders with text', () => (
        <Button>Whee</Button>
    ))