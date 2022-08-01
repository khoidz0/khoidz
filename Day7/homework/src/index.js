import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import Ex1 from './component/DEX1';
import App2 from './component/DEX2';
import Caculator from './component/DEX2c2';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Caculator />);