
import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, from } from '@apollo/client';

const httpLink = new HttpLink({ uri: 'https://api.thegraph.com/subgraphs/name/prtk418/open_protocol_bsc_test', fetchOptions: {
  mode: 'no-cors',
}, });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: localStorage.getItem('token') || "0x6683e7bbb85265bc60bba33395d84030b729b1acc8fe156c4b9ebf80ec02896444ad099cab7aa19e2a1fddb209d2b2c1608f279c31037f0a6affa231ae9ef2211c",
    }
  }));

  return forward(operation);
})

const activityMiddleware = new ApolloLink((operation, forward) => {
  // add the recent-activity custom header to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'recent-activity': localStorage.getItem('lastOnlineTime') || null,
    }
  }));

  return forward(operation);
})

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    // authMiddleware,
    // activityMiddleware,
    httpLink
  ]),
});