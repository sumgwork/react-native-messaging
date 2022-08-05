import { ChatRoomData } from "../types";

export const chatRoomData: ChatRoomData = {
  chatroomId: "1",
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
    {
      id: "3",
      name: "John Cena",
      imageUri: "https://i.pravatar.cc/300?img=3",
    },
  ],
  messages: [
    {
      id: "1",
      content: "Hello",
      createdAt: new Date().toISOString(),
      user: {
        id: "3",
        name: "John Cena",
        imageUri: "https://i.pravatar.cc/300?img=3",
      },
    },
    {
      id: "2",
      content: "Are you busy?",
      createdAt: new Date().toISOString(),
      user: {
        id: "2",
        name: "Jane Doe",
        imageUri: "https://i.pravatar.cc/300?img=2",
      },
    },
    {
      id: "3",
      content: "Hello",
      createdAt: new Date().toISOString(),
      user: {
        id: "1",
        name: "John Doe",
        imageUri: "https://i.pravatar.cc/300?img=1",
      },
    },
    {
      id: "4",
      content: "Are you busy? What about next week?",
      createdAt: new Date().toISOString(),
      user: {
        id: "2",
        name: "Jane Doe",
        imageUri: "https://i.pravatar.cc/300?img=2",
      },
    },
    {
      id: "5",
      content: "Hello",
      createdAt: new Date().toISOString(),
      user: {
        id: "3",
        name: "John Cena",
        imageUri: "https://i.pravatar.cc/300?img=3",
      },
    },
    {
      id: "6",
      content: "Are you busy?",
      createdAt: new Date().toISOString(),
      user: {
        id: "2",
        name: "Jane Doe",
        imageUri: "https://i.pravatar.cc/300?img=2",
      },
    },
    {
      id: "7",
      content: "Hello",
      createdAt: new Date().toISOString(),
      user: {
        id: "1",
        name: "John Doe",
        imageUri: "https://i.pravatar.cc/300?img=1",
      },
    },
    {
      id: "8",
      content: "Are you busy? What about next week?",
      createdAt: new Date().toISOString(),
      user: {
        id: "2",
        name: "Jane Doe",
        imageUri: "https://i.pravatar.cc/300?img=2",
      },
    },
  ],
};
