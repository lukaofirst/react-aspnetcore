import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import App from './App';
import Menu from './components/Menu';

ReactDOM.render(
    <React.StrictMode>
        <Menu />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
