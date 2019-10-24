import React from 'react';

import PropTypes from 'prop-types';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, subtitle, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>{subtitle}</span>
            </div>
        </div>
    );
};

MenuItem.defaultProps = {
    title: 'title',
    subtitle: 'SHOP NOW'
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default MenuItem;