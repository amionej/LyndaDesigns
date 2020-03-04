import gql from 'graphql-tag';

const typeDefs = gql`
  schema {
    query: Query
  }

  type Invoice {
    id: ID!
    name: String!
    rfc: String!
    street: String!
    number: String!
    neighborhood: String!
    locality: String!
    municipality: String!
    state: String!
    zipcode: String!
  }

  input InvoiceInput {
    name: String!
    rfc: String!
    street: String!
    number: String!
    neighborhood: String!
    locality: String!
    municipality: String!
    state: String!
    zipcode: String!
  }

  type Query {
    invoices: [Invoice]
  }
`;

export default typeDefs;
