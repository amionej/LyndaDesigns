import gql from 'graphql-tag';

const UPDATE_ORDER = gql`
  mutation updateOrder($id: ID!, $status: String!) {
    updateOrder(id: $id, status: $status) {
      order {
        id
      }
    }
  }
`;

export default UPDATE_ORDER;
