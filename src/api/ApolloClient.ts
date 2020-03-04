import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import typeDefs from './graphql/schema.graphql';

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const restLink = new RestLink({
  // uri: endpoint,
  credentials: 'include',
  responseTransformer: async response => response.json().then(({ data }) => data),
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, restLink]),
  typeDefs,
});

export default client;
