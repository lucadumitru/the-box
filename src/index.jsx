import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const root = document.querySelector('#root')
	? document.querySelector('#root')
	: document.querySelector('.wrapper');

ReactDOM.createRoot(root).render(<App></App>);
