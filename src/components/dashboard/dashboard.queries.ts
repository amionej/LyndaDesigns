import gql from 'graphql-tag';

const ALL_ORDERS = gql`
  query allOrders {
    allOrders {
      id
      orderitemSet {
        quantity
        productName
      }
      user {
        firstName
        lastName
        email
      }
      status
      created
      total
    }
  }
`;

export default ALL_ORDERS;
