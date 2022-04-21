
// import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, from } from '@apollo/client';
// // import ApolloClient from "apollo-boost";
// const httpLink = new HttpLink({ uri: 'https://devapi.hashstack.finance/', fetchOptions: {
//   mode: 'no-cors',
// } });

// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       Authorization: localStorage.getItem('AuthToken'),
//     }
//   }));

//   return forward(operation);
// })

// const activityMiddleware = new ApolloLink((operation, forward) => {
//   // add the recent-activity custom header to the headers
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       'recent-activity': localStorage.getItem('lastOnlineTime') || null,
//     }
//   }));

//   return forward(operation);
// })

// export default new ApolloClient({
//   cache: new InMemoryCache(),
//   link: from([
//     authMiddleware,
//     // activityMiddleware,
//     httpLink
//   ]),
// });


import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://devapi.hashstack.finance/',
  // credentials: 'include',
  // fetchOptions: {
  //     mode: 'no-cors',
  //   } }
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('AuthToken').replaceAll('\"', '');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});