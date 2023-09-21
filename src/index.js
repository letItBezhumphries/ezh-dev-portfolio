import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/main.scss';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(<App />);
