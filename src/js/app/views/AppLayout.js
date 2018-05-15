import React, { Component } from 'react';
import ContextProvider from './../../common/components/ContextProvider';
import Header from './../../common/components/header/Header';
import Main from './../../intro/views/MainLayout';
import MoreTrigger from './../../common/components/MoreTrigger';
import Boooom from '../../common/components/Boooom';


class AppLayout extends Component {
  render() {
    return (
      <ContextProvider>
        <div className="app">
          <div className="app__bg--filter" />
          <Header />
          <Main />
          <MoreTrigger />
          <Boooom />
        </div>
      </ContextProvider>
    );
  }
};

export default AppLayout;
