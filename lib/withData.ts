import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

function createClient({ headers }: any) {
  return new ApolloClient({
    uri: `http://localhost:4444`,
    request: (operation): any => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
