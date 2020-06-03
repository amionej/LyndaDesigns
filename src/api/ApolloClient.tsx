import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
// import cookie from 'react-cookies';

interface Props {
  children: React.ReactNode;
}

const Apollo: React.FC<Props> = ({ children }: Props) => {
  const cache = new InMemoryCache();
  // const [csrftoken, setCsrftoken] = useState('');

  // async function getCsrfToken() {
  //   if (!csrftoken) {
  //     const token = await fetch('http://127.0.0.1:8000/csrf/')
  //       .then(response => response.json())
  //       .then(data => data.csrfToken);
  //     cookie.save('csrftoken', token, {});
  //     setCsrftoken(token);
  //   }
  // }

  // useEffect(() => {
  //   getCsrfToken();
  // }, [csrftoken]);

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const djangoLink = createUploadLink({
    uri: 'https://amoli-api.herokuapp.com/graphql/',
    credentials: 'include',
    // headers: {
    //   'X-CSRFToken': csrftoken,
    // },
  });

  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link: ApolloLink.from([errorLink, djangoLink]),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
