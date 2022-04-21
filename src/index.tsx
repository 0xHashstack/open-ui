import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import axios from "axios";
import Dashboard from './pages/dashboard';
import Web3ModalProvider from "contexts/Web3ModalProvider";
import Web3WrapperProvider from "contexts/Web3WrapperProvider";
import { BrowserRouter } from 'react-router-dom';
// import { ApolloProvider } from 'react-apollo';
import { ApolloProvider } from "@apollo/client";

import loadable from '@loadable/component';
const Layout = loadable(() => import('./components/layout/index'));
import { Provider } from "react-redux";
import store from "./store";

import ApoloClient from './apoloClient';
// import SubgraphClient from './subgraphClient';

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
            <Web3ModalProvider>
              <Web3WrapperProvider>
               <ApolloProvider client={ApoloClient}>
                <Layout>
                  <Dashboard />
                </Layout>
                </ApolloProvider>
              </Web3WrapperProvider>
            </Web3ModalProvider>
      </BrowserRouter>
    </Provider>
    ,
  document.getElementById('root')
);
