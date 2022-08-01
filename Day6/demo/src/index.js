import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
// import HelloFunctionComp from './components/HelloFunctionComp';
// import FormFC from './components/formFC';
import HelloC  from './components/HelloClassC';
import CountClick from './components/CountClick';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CountClick />);

// root.render(<HelloC person="khoi" />);

// HelloFunctionComp className="HelloFunction" personName = "anan" 