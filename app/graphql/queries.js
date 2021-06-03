export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
        id
        image
        gearType
        title
        bags
        passengers
        doors
        oldPrice
        newPrice
        description
        latitude
        longitude
        createdAt
        updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        gearType
        title
        bags
        passengers
        doors
        oldPrice
        newPrice
        description
        latitude
        longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`