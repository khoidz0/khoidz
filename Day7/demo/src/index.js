import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import ClickCount from './component/ClickCount';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ClickCount />);