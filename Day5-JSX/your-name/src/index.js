import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ex1 from './exercise/ex1';
import Ex4 from './exercise/ex4';


import Ex from './exercise/ex2';
import Cardd from './exercise/ex3';
// ex1
// const root =  ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h4 style={{ textAlign: "center" }}> {navigator.userAgent}</h4>);

//ex2
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<Ex />);  

// ex3
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Cardd />);  

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);

// ex1
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<Ex1 />); 

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<Ex4 />); 