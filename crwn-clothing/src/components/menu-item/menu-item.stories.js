import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItem from './menu-item.component';

storiesOf('MenuItem', module)
    .add('With default props', () => (
        <MenuItem />
    ))
    .add('With title', () => (
        <MenuItem title='HATS' />
    ))
    .add('With subtitle', () => (
        <MenuItem subtitle='SHOP NOW' />
    ))
    .add('With title and subtitle', () => (
        <MenuItem title='SNEAKERS' subtitle='SHOP NOW' />
    ))