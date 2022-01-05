import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';
import HashstackCrypto from './pages/hashstack-crypto';
import Web3ModalProvider from "contexts/Web3ModalProvider";
import Web3WrapperProvider from "contexts/Web3WrapperProvider";
import { MoralisProvider } from "react-moralis";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";
import { BrowserRouter } from 'react-router-dom';
import { DAppProvider } from "@usedapp/core";
import "./assets/scss/theme.scss";
import Layout from './components/layout';
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MoralisProvider appId="ymdgw0muLMW7cEiNA3eRatEjQAmdloRoObUrUemp" serverUrl="https://gwfyfk2dqlj8.usemoralis.com:2053/server">
        <MoralisDappProvider>
          <Web3ModalProvider>
            <Web3WrapperProvider>
              <Layout>
                <HashstackCrypto />
              </Layout>
            </Web3WrapperProvider>
          </Web3ModalProvider>
        </MoralisDappProvider>
      </MoralisProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
