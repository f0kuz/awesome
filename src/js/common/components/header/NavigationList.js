import React from 'react';


const NavigationList = () => (
    <ul className="navigation__list">
        <li className="navigation__item">
            <a href="/" className="navigation__link">Features</a>
        </li>
        <li className="navigation__item">
            <a href="/" className="navigation__link">Case Studies</a>
        </li>
        <li className="navigation__item">
            <a href="/" className="navigation__link">About</a>
        </li>
        <li className="navigation__item">
            <a href="/" className="navigation__link navigation__link--contact">Contact</a>
        </li>
    </ul>
);

export default NavigationList;
