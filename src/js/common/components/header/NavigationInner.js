import React from 'react';
import BrandHeader from './BrandHeader';
import NavigationList from './NavigationList';
import NavigationSocial from './NavigationSocial';


const NavigationInner = () => (
    <nav className="navigation__inner">
        {/* This BrandHeader is show when navigation__inner--opened is active  */}
        <BrandHeader styleName="navigation__inner--header-list header__brand-text" />
        <NavigationList />
        <NavigationSocial />
    </nav>
);

export default NavigationInner;
