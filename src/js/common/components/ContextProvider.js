import React, { Component } from 'react';


export const AppContext = React.createContext();

class ContextProvider extends Component {
    state = {
        navigationIsOpen: false
    }
    
    render() {
        return (
            <AppContext.Provider value={{
                state: this.state,
                toggleNavigation: () => {
                    this.setState({
                        navigationIsOpen: !this.state.navigationIsOpen
                    })
                    document.documentElement.classList.toggle('ovh');
                }
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
};

export default ContextProvider;
