import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
  query AllProducts {
    allProducts {
      id
      status
      productName
      price
      description
      image {
        image
      }
    }
  }
`;

export default GET_PRODUCTS;
