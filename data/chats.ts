import { ChatRoom } from "../types";

export const chatRooms: Array<ChatRoom> = [
  {
    chatRoomId: "1",
    users: [
      {
        id: "1",
        name: "John Doe",
        imageUri: "https://i.pravatar.cc/300?img=2",
      },
      {
        id: "2",
        name: "Jane Doe",
        imageUri: "https://i.pravatar.cc/300?img=1",
      },
    ],
    lastMessage: {
      id: "1",
      content: "Hello",
      createdAt: new Date().toISOString(),
      user: {
        id: "2",
        name: "Jane Doe",
        imageUri: "https://i.pravatar.cc/300?img=1",
      },
    },
  },
  {
    chatRoomId: "2",
    users: [
      {
        id: "2",
        name: "Jane Doe",
        imageUri: "https://i.pravatar.cc/300?img=1",
      },
      {
        id: "1",
        name: "John Doe",
        imageUri: "https://i.pravatar.cc/300?img=2",
      },
    ],
    lastMessage: {
      id: "1",
      content: "Are you busy?",
      createdAt: new Date().toISOString(),
      user: {
        id: "1",
        name: "John Doe",
        imageUri: "https://i.pravatar.cc/300?img=2",
      },
    },
  },
  {
    chatRoomId: "3",
    users: [
      {
        id: "1",
        name: "John Doe",
        imageUri: "https://i.pravatar.cc/300?img=4",
      },
      {
        id: "2",
        name: "Jane Doe",
        imageUri: "https://i.pravatar.cc/300?img=3",
      },
    ],
    lastMessage: {
      id: "1",
      content: "Hello",
      createdAt: new Date().toISOString(),
      user: {
        id: "2",
        name: "Jane Doe",
        imageUri: "https://i.pravatar.cc/300?img=3",
      },
    },
  },
  {
    chatRoomId: "4",
    users: [
      {
        id: "2",
        name: "Jane Doe",
        imageUri: "https://i.pravatar.cc/300?img=3",
      },
      {
        id: "1",
        name: "John Doe",
        imageUri: "https://i.pravatar.cc/300?img=4",
      },
    ],
    lastMessage: {
      id: "1",
      content: "Are you busy? Can we meet at the office?",
      createdAt: new Date().toISOString(),
      user: {
        id: "1",
        name: "John Doe",
        imageUri: "https://i.pravatar.cc/300?img=4",
      },
    },
  },
  {
    chatRoomId: "5",
    users: [
      {
        id: "1",
        name: "John Doe",
        imageUri: "https://i.pravatar.cc/300?img=6",
      },
      {
        id: "2",
        name: "Jane Doe",
        imageUri: "https://i.pravatar.cc/300?img=5",
      },
    ],
    lastMessage: {
      id: "1",
      content: "Can you review my pull request please?",
      createdAt: new Date().toISOString(),
      user: {
        id: "2",
        name: "Jane Doe",
        imageUri: "https://i.pravatar.cc/300?img=5",
      },
    },
  },
  {
    chatRoomId: "6",
    users: [
      {
        id: "2",
        name: "Jane Doe",
        imageUri: "https://i.pravatar.cc/300?img=5",
      },
      {
        id: "1",
        name: "John Doe",
        imageUri: "https://i.pravatar.cc/300?img=6",
      },
    ],
    lastMessage: {
      id: "1",
      content: "Are you busy?",
      createdAt: new Date().toISOString(),
      user: {
        id: "1",
        name: "John Doe",
        imageUri: "https://i.pravatar.cc/300?img=6",
      },
    },
  },
];
