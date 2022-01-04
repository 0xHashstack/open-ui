import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';
import HashstackCrypto from './pages/hashstack-crypto';
import Web3ModalProvider from "contexts/Web3ModalProvider";
import Web3WrapperProvider from "contexts/Web3WrapperProvider";
import { MoralisProvider } from "react-moralis";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";

import { DAppProvider } from "@usedapp/core";

ReactDOM.render(
  // <React.StrictMode>
    <MoralisProvider appId="ymdgw0muLMW7cEiNA3eRatEjQAmdloRoObUrUemp" serverUrl="https://gwfyfk2dqlj8.usemoralis.com:2053/server">
      <MoralisDappProvider>
        <Web3ModalProvider>
          <Web3WrapperProvider>
            <Dashboard />
            <HashstackCrypto />
          </Web3WrapperProvider>
        </Web3ModalProvider>
      </MoralisDappProvider>
    </MoralisProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
