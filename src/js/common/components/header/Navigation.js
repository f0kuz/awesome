import React from 'react';
import classnames from 'classnames';
import { AppContext } from './../ContextProvider';
import BrandHeader from './BrandHeader';
import NavigationInner from './NavigationInner';
import NavigationToggle from './NavigationToggle';


const Navigation = () => (
    <React.Fragment>
        <AppContext.Consumer>
            {context => (
                <div className={classnames("navigation", context.state.navigationIsOpen ? "navigation__inner--opened" : "")}>
                    {/* This BrandHeader is hidden when navigation__inner--opened is active  */}
                    <BrandHeader styleName="navigation__inner--header header__brand-text" />
                    <NavigationInner />
                </div>
            )}
        </AppContext.Consumer>
        <NavigationToggle />
    </React.Fragment>
);

export default Navigation;
