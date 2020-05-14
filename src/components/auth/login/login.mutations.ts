import gql from 'graphql-tag';

const GET_TOKEN = gql`
  mutation GetToken($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      refreshToken
    }
  }
`;

// export const GET_PRODUCTS = gql`
//   query AllProducts {
//     allProducts {
//       id
//       productName
//       price
//     }
//   }
// `;

// export const CREATE_PRODUCT = gql`
//   mutation CreateProduct($description: String!, $price: Number!, productName: String!) {
//     createProduct(description: $description, price: $price, productName: $productName) {
//       product {
//         productName
//       }
//     }
//   }
// `;

export default GET_TOKEN;
