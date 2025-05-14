import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutingComponent from './router/route.jsx';
import './index.css';
import App from './App.jsx';
import { ToastProvider } from "./components/ui/use-toast"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
   {/* <RoutingComponent/> */}
  </React.StrictMode>
);

