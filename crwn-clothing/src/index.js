import React from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
