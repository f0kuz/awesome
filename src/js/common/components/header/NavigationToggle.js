import React from 'react';
import { AppContext } from './../ContextProvider';


const NavigationToggle = () => (
    <div className="navigation--toggle">
        <AppContext.Consumer>
        {context => (
            <input type="checkbox" className="navigation--toggle-checkbox" onClick={context.toggleNavigation} />
        )}
        </AppContext.Consumer>
        <span className="navigation--toggle-icon" />
    </div>
);

export default NavigationToggle;
