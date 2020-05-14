import gql from 'graphql-tag';

const LOGOUT = gql`
  mutation logout($refreshToken: String!) {
    revokeToken(refreshToken: $refreshToken) {
      revoked
    }
  }
`;

export default LOGOUT;
