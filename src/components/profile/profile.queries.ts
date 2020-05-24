import gql from 'graphql-tag';

const USER_ORDERS = gql`
  query userOrders {
    userOrders {
      id
      orderitemSet {
        quantity
        productName
      }
      status
      total
      created
    }
  }
`;

export default USER_ORDERS;
