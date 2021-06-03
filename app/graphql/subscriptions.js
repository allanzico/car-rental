export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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