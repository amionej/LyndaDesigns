import gql from 'graphql-tag';

const GET_CURRENT_USER = gql`
  query GET_CURRENT_USER {
    me {
      id
      firstName
      lastName
      email
      isStaff
      isSuperuser
      lastLogin
    }
  }
`;

export default GET_CURRENT_USER;
