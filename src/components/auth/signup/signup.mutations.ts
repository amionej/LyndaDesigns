import gql from 'graphql-tag';

const CREATE_USER = gql`
  mutation CreateUser(
    $username: String!
    $password: String!
    $email: String!
    $firstName: String!
    $lastName: String!
  ) {
    createUser(
      username: $username
      password: $password
      email: "email123@prueba.com"
      firstName: $firstName
      lastName: $lastName
    ) {
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

export default CREATE_USER;
