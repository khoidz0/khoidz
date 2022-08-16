import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import NavBarComponent from './component/navBar';
import Managee from './component/Quanly';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Managee />);  
