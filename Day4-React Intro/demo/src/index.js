import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './comperment/Hello';

// React Elements 
// const name = "Your name";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
// React.createElement("h1", { style: { textAlign: "center" } }, name)
// );

// JSX
// const name = "chien ngu vl";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<h1 style={{ textAlign: "center" }}>{name}</h1>);

// JSX + React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Hello />);