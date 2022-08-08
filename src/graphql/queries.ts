/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdByUser {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
          owner
        }
        isDelivered
        isRead
        chatRoom {
          id
          name
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
      nextToken
    }
  }
`;
export const getChatRoomUserRelation = /* GraphQL */ `
  query GetChatRoomUserRelation($id: ID!) {
    getChatRoomUserRelation(id: $id) {
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
export const listChatRoomUserRelations = /* GraphQL */ `
  query ListChatRoomUserRelations(
    $filter: ModelChatRoomUserRelationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUserRelations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
          owner
        }
        chatRoom {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
