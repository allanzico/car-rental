export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
    }
  }
`;

export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
    }
  }
`;

export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
    }
  }
`;