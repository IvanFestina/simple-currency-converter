import React from 'react';

import { HashRouter } from 'react-router-dom';

import s from './App.module.scss';
import { Header } from './components/header/Header';
import { RoutesApp } from './components/RoutesApp';

const App = () => {
  return (
    <div className={s.wrapperApp}>
      <HashRouter>
        <Header />
        <div className={s.content}>
          <RoutesApp />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
