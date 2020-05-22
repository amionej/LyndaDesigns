import gql from 'graphql-tag';

const CREATE_ORDER = gql`
  mutation CreateOrder($OrderItemInput: [OrderItemInput]!) {
    createOrder(orderItems: $OrderItemInput) {
      order {
        id
        orderitemSet {
          quantity
          product {
            productName
          }
        }
        status
      }
    }
  }
`;

export default CREATE_ORDER;
