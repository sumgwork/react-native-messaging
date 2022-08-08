/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  imageUri?: string | null,
  status?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  imageUri?: string | null,
  status?: string | null,
  chatrooms?: ModelChatRoomUserRelationConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelChatRoomUserRelationConnection = {
  __typename: "ModelChatRoomUserRelationConnection",
  items:  Array<ChatRoomUserRelation | null >,
  nextToken?: string | null,
};

export type ChatRoomUserRelation = {
  __typename: "ChatRoomUserRelation",
  id: string,
  userID: string,
  chatRoomID: string,
  user: User,
  chatRoom: ChatRoom,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  name: string,
  users?: ModelChatRoomUserRelationConnection | null,
  messages?: ModelMessageConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  content: string,
  createdByUser: User,
  isDelivered: boolean,
  isRead: boolean,
  chatRoom: ChatRoom,
  createdAt: string,
  updatedAt: string,
  chatRoomMessagesId?: string | null,
  messageCreatedByUserId: string,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  status?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
  name: string,
};

export type ModelChatRoomConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
  name?: string | null,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  content: string,
  isDelivered: boolean,
  isRead: boolean,
  chatRoomMessagesId?: string | null,
  messageCreatedByUserId: string,
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null,
  isDelivered?: ModelBooleanInput | null,
  isRead?: ModelBooleanInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  chatRoomMessagesId?: ModelIDInput | null,
  messageCreatedByUserId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  isDelivered?: boolean | null,
  isRead?: boolean | null,
  chatRoomMessagesId?: string | null,
  messageCreatedByUserId: string,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateChatRoomUserRelationInput = {
  id?: string | null,
  userID: string,
  chatRoomID: string,
};

export type ModelChatRoomUserRelationConditionInput = {
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserRelationConditionInput | null > | null,
  or?: Array< ModelChatRoomUserRelationConditionInput | null > | null,
  not?: ModelChatRoomUserRelationConditionInput | null,
};

export type UpdateChatRoomUserRelationInput = {
  id: string,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeleteChatRoomUserRelationInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  isDelivered?: ModelBooleanInput | null,
  isRead?: ModelBooleanInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  chatRoomMessagesId?: ModelIDInput | null,
  messageCreatedByUserId?: ModelIDInput | null,
};

export type ModelChatRoomUserRelationFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserRelationFilterInput | null > | null,
  or?: Array< ModelChatRoomUserRelationFilterInput | null > | null,
  not?: ModelChatRoomUserRelationFilterInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  imageUri?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  isDelivered?: ModelSubscriptionBooleanInput | null,
  isRead?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionChatRoomUserRelationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  chatRoomID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChatRoomUserRelationFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatRoomUserRelationFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatrooms?:  {
      __typename: "ModelChatRoomUserRelationConnection",
      items:  Array< {
        __typename: "ChatRoomUserRelation",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatrooms?:  {
      __typename: "ModelChatRoomUserRelationConnection",
      items:  Array< {
        __typename: "ChatRoomUserRelation",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatrooms?:  {
      __typename: "ModelChatRoomUserRelationConnection",
      items:  Array< {
        __typename: "ChatRoomUserRelation",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelChatRoomUserRelationConnection",
      items:  Array< {
        __typename: "ChatRoomUserRelation",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        isDelivered: boolean,
        isRead: boolean,
        createdAt: string,
        updatedAt: string,
        chatRoomMessagesId?: string | null,
        messageCreatedByUserId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelChatRoomUserRelationConnection",
      items:  Array< {
        __typename: "ChatRoomUserRelation",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        isDelivered: boolean,
        isRead: boolean,
        createdAt: string,
        updatedAt: string,
        chatRoomMessagesId?: string | null,
        messageCreatedByUserId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelChatRoomUserRelationConnection",
      items:  Array< {
        __typename: "ChatRoomUserRelation",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        isDelivered: boolean,
        isRead: boolean,
        createdAt: string,
        updatedAt: string,
        chatRoomMessagesId?: string | null,
        messageCreatedByUserId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdByUser:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatrooms?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    isDelivered: boolean,
    isRead: boolean,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    chatRoomMessagesId?: string | null,
    messageCreatedByUserId: string,
    owner?: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdByUser:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatrooms?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    isDelivered: boolean,
    isRead: boolean,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    chatRoomMessagesId?: string | null,
    messageCreatedByUserId: string,
    owner?: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdByUser:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatrooms?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    isDelivered: boolean,
    isRead: boolean,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    chatRoomMessagesId?: string | null,
    messageCreatedByUserId: string,
    owner?: string | null,
  } | null,
};

export type CreateChatRoomUserRelationMutationVariables = {
  input: CreateChatRoomUserRelationInput,
  condition?: ModelChatRoomUserRelationConditionInput | null,
};

export type CreateChatRoomUserRelationMutation = {
  createChatRoomUserRelation?:  {
    __typename: "ChatRoomUserRelation",
    id: string,
    userID: string,
    chatRoomID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatrooms?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateChatRoomUserRelationMutationVariables = {
  input: UpdateChatRoomUserRelationInput,
  condition?: ModelChatRoomUserRelationConditionInput | null,
};

export type UpdateChatRoomUserRelationMutation = {
  updateChatRoomUserRelation?:  {
    __typename: "ChatRoomUserRelation",
    id: string,
    userID: string,
    chatRoomID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatrooms?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteChatRoomUserRelationMutationVariables = {
  input: DeleteChatRoomUserRelationInput,
  condition?: ModelChatRoomUserRelationConditionInput | null,
};

export type DeleteChatRoomUserRelationMutation = {
  deleteChatRoomUserRelation?:  {
    __typename: "ChatRoomUserRelation",
    id: string,
    userID: string,
    chatRoomID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatrooms?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatrooms?:  {
      __typename: "ModelChatRoomUserRelationConnection",
      items:  Array< {
        __typename: "ChatRoomUserRelation",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatrooms?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelChatRoomUserRelationConnection",
      items:  Array< {
        __typename: "ChatRoomUserRelation",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        isDelivered: boolean,
        isRead: boolean,
        createdAt: string,
        updatedAt: string,
        chatRoomMessagesId?: string | null,
        messageCreatedByUserId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdByUser:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatrooms?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    isDelivered: boolean,
    isRead: boolean,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    chatRoomMessagesId?: string | null,
    messageCreatedByUserId: string,
    owner?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      createdByUser:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      isDelivered: boolean,
      isRead: boolean,
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      chatRoomMessagesId?: string | null,
      messageCreatedByUserId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomUserRelationQueryVariables = {
  id: string,
};

export type GetChatRoomUserRelationQuery = {
  getChatRoomUserRelation?:  {
    __typename: "ChatRoomUserRelation",
    id: string,
    userID: string,
    chatRoomID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatrooms?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListChatRoomUserRelationsQueryVariables = {
  filter?: ModelChatRoomUserRelationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomUserRelationsQuery = {
  listChatRoomUserRelations?:  {
    __typename: "ModelChatRoomUserRelationConnection",
    items:  Array< {
      __typename: "ChatRoomUserRelation",
      id: string,
      userID: string,
      chatRoomID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatrooms?:  {
      __typename: "ModelChatRoomUserRelationConnection",
      items:  Array< {
        __typename: "ChatRoomUserRelation",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatrooms?:  {
      __typename: "ModelChatRoomUserRelationConnection",
      items:  Array< {
        __typename: "ChatRoomUserRelation",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatrooms?:  {
      __typename: "ModelChatRoomUserRelationConnection",
      items:  Array< {
        __typename: "ChatRoomUserRelation",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
  owner?: string | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelChatRoomUserRelationConnection",
      items:  Array< {
        __typename: "ChatRoomUserRelation",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        isDelivered: boolean,
        isRead: boolean,
        createdAt: string,
        updatedAt: string,
        chatRoomMessagesId?: string | null,
        messageCreatedByUserId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
  owner?: string | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelChatRoomUserRelationConnection",
      items:  Array< {
        __typename: "ChatRoomUserRelation",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        isDelivered: boolean,
        isRead: boolean,
        createdAt: string,
        updatedAt: string,
        chatRoomMessagesId?: string | null,
        messageCreatedByUserId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
  owner?: string | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelChatRoomUserRelationConnection",
      items:  Array< {
        __typename: "ChatRoomUserRelation",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        isDelivered: boolean,
        isRead: boolean,
        createdAt: string,
        updatedAt: string,
        chatRoomMessagesId?: string | null,
        messageCreatedByUserId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdByUser:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatrooms?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    isDelivered: boolean,
    isRead: boolean,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    chatRoomMessagesId?: string | null,
    messageCreatedByUserId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdByUser:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatrooms?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    isDelivered: boolean,
    isRead: boolean,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    chatRoomMessagesId?: string | null,
    messageCreatedByUserId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdByUser:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatrooms?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    isDelivered: boolean,
    isRead: boolean,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    chatRoomMessagesId?: string | null,
    messageCreatedByUserId: string,
    owner?: string | null,
  } | null,
};

export type OnCreateChatRoomUserRelationSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomUserRelationFilterInput | null,
  owner?: string | null,
};

export type OnCreateChatRoomUserRelationSubscription = {
  onCreateChatRoomUserRelation?:  {
    __typename: "ChatRoomUserRelation",
    id: string,
    userID: string,
    chatRoomID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatrooms?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateChatRoomUserRelationSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomUserRelationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateChatRoomUserRelationSubscription = {
  onUpdateChatRoomUserRelation?:  {
    __typename: "ChatRoomUserRelation",
    id: string,
    userID: string,
    chatRoomID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatrooms?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteChatRoomUserRelationSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomUserRelationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteChatRoomUserRelationSubscription = {
  onDeleteChatRoomUserRelation?:  {
    __typename: "ChatRoomUserRelation",
    id: string,
    userID: string,
    chatRoomID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatrooms?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelChatRoomUserRelationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
