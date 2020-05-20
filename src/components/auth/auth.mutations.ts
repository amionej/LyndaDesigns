import gql from 'graphql-tag';

const LOGOUT = gql`
  mutation Logout {
    logout {
      success
    }
  }
`;

export default LOGOUT;
