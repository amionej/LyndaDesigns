import gql from 'graphql-tag';

export const UPDATE_ORDER = gql`
  mutation updateOrder($id: ID!, $status: String!) {
    updateOrder(id: $id, status: $status) {
      order {
        id
      }
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($id: ID!, $status: Boolean!) {
    updateProduct(id: $id, status: $status) {
      product {
        id
      }
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      product {
        id
      }
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($description: String!, $price: Int!, $productName: String!) {
    createProduct(description: $description, price: $price, productName: $productName) {
      product {
        productName
      }
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation uploadProductImage($id: ID!, $image: Upload!) {
    uploadProductImage(id: $id, image: $image) {
      productImage {
        id
      }
    }
  }
`;
