import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './css/styles.css';
import App from './js/app/views/AppLayout';
import registerServiceWorker from './js/registerServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
