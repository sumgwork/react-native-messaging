/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom(
    $filter: ModelSubscriptionChatRoomFilterInput
    $owner: String
  ) {
    onCreateChatRoom(filter: $filter, owner: $owner) {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom(
    $filter: ModelSubscriptionChatRoomFilterInput
    $owner: String
  ) {
    onUpdateChatRoom(filter: $filter, owner: $owner) {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom(
    $filter: ModelSubscriptionChatRoomFilterInput
    $owner: String
  ) {
    onDeleteChatRoom(filter: $filter, owner: $owner) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onCreateMessage(filter: $filter, owner: $owner) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onUpdateMessage(filter: $filter, owner: $owner) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onDeleteMessage(filter: $filter, owner: $owner) {
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
export const onCreateChatRoomUserRelation = /* GraphQL */ `
  subscription OnCreateChatRoomUserRelation(
    $filter: ModelSubscriptionChatRoomUserRelationFilterInput
    $owner: String
  ) {
    onCreateChatRoomUserRelation(filter: $filter, owner: $owner) {
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
export const onUpdateChatRoomUserRelation = /* GraphQL */ `
  subscription OnUpdateChatRoomUserRelation(
    $filter: ModelSubscriptionChatRoomUserRelationFilterInput
    $owner: String
  ) {
    onUpdateChatRoomUserRelation(filter: $filter, owner: $owner) {
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
export const onDeleteChatRoomUserRelation = /* GraphQL */ `
  subscription OnDeleteChatRoomUserRelation(
    $filter: ModelSubscriptionChatRoomUserRelationFilterInput
    $owner: String
  ) {
    onDeleteChatRoomUserRelation(filter: $filter, owner: $owner) {
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
