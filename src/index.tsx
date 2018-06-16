import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import * as ReactDOM from 'react-dom';
import App from './App';
import { GRAPHQL_URL } from './constants';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: new HttpLink({uri: GRAPHQL_URL}),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
