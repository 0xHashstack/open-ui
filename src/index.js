import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import axios from "axios";
import HashstackCrypto from './pages/hashstack-crypto';
import Web3ModalProvider from "contexts/Web3ModalProvider";
import Web3WrapperProvider from "contexts/Web3WrapperProvider";
import { MoralisProvider } from "react-moralis";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout';
import { Provider } from "react-redux";
import store from "./store";
import "./assets/scss/theme.scss";
import './assets/fonts/AvenirNextLTPro-Regular.otf';

Sentry.init({
  dsn: "https://ca35bb6a621b435cac53fee2d5cf5b4d@o1122653.ingest.sentry.io/6160093",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});


axios.defaults.baseURL = process.env.REACT_APP_API_URL;

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
