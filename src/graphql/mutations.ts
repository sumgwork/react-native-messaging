/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      status
      chatrooms {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      status
      chatrooms {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      status
      chatrooms {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      name
      users {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          content
          isDelivered
          isRead
          createdAt
          updatedAt
          chatRoomMessagesId
          messageCreatedByUserId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      name
      users {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          content
          isDelivered
          isRead
          createdAt
          updatedAt
          chatRoomMessagesId
          messageCreatedByUserId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      name
      users {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          content
          isDelivered
          isRead
          createdAt
          updatedAt
          chatRoomMessagesId
          messageCreatedByUserId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      content
      createdByUser {
        id
        name
        imageUri
        status
        chatrooms {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      isDelivered
      isRead
      chatRoom {
        id
        name
        users {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      chatRoomMessagesId
      messageCreatedByUserId
      owner
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      content
      createdByUser {
        id
        name
        imageUri
        status
        chatrooms {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      isDelivered
      isRead
      chatRoom {
        id
        name
        users {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      chatRoomMessagesId
      messageCreatedByUserId
      owner
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      content
      createdByUser {
        id
        name
        imageUri
        status
        chatrooms {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      isDelivered
      isRead
      chatRoom {
        id
        name
        users {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      chatRoomMessagesId
      messageCreatedByUserId
      owner
    }
  }
`;
export const createChatRoomUserRelation = /* GraphQL */ `
  mutation CreateChatRoomUserRelation(
    $input: CreateChatRoomUserRelationInput!
    $condition: ModelChatRoomUserRelationConditionInput
  ) {
    createChatRoomUserRelation(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        chatrooms {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        name
        users {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateChatRoomUserRelation = /* GraphQL */ `
  mutation UpdateChatRoomUserRelation(
    $input: UpdateChatRoomUserRelationInput!
    $condition: ModelChatRoomUserRelationConditionInput
  ) {
    updateChatRoomUserRelation(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        chatrooms {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        name
        users {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteChatRoomUserRelation = /* GraphQL */ `
  mutation DeleteChatRoomUserRelation(
    $input: DeleteChatRoomUserRelationInput!
    $condition: ModelChatRoomUserRelationConditionInput
  ) {
    deleteChatRoomUserRelation(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        chatrooms {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        name
        users {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
