import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';
import Web3ModalProvider from "contexts/Web3ModalProvider";
import Web3WrapperProvider from "contexts/Web3WrapperProvider";


import { DAppProvider } from "@usedapp/core";

ReactDOM.render(
  <React.StrictMode>
    <Web3ModalProvider>
      <Web3WrapperProvider>
        <Dashboard />
      </Web3WrapperProvider>
    </Web3ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
