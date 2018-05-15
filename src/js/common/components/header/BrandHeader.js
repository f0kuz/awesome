import React from 'react';
import logoAwesome from './../../../../assets/images/logo_awesome.svg';


const BrandHeader = ({styleName}) => {
    return (
        <h1 className={styleName}>
            <a href="/">Awesome
                <img src={logoAwesome} className="header__brand-logo" alt="wa are awesome" />
            </a>
        </h1>
    );
};

export default BrandHeader;
