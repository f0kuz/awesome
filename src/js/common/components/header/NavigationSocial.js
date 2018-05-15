import React from 'react';
import facebook from './../../../../assets/images/facebook.svg';
import twitter from './../../../../assets/images/twitter.svg';
import googleplus from './../../../../assets/images/googleplus.svg';


const NavigationSocial = () => (
    <div className="navigation__social">
        <a href="/" className="navigation__social--link">
            <img src={facebook} className="navigation__social--icon" alt="awesome facebook" />
        </a>
        <a href="/" className="navigation__social--link">
            <img src={twitter} className="navigation__social--icon" alt="awesome twitter" />
        </a>
        <a href="/" className="navigation__social--link">
            <img src={googleplus} className="navigation__social--icon" alt="awesome google+" />
        </a>
    </div>
);

export default NavigationSocial;
