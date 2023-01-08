export const schema = gql`
  type Page {
    path: String!
    page: String!
    name: String!
  }

  type Pages {
    pages: [Page!]
  }

  type Query {
    getPages: Pages! @skipAuth
  }
`
