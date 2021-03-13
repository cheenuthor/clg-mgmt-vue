export default {
  namespaced: false,
  state: {
    chats: [
      {
        text: "hi",
        date: "12.02.2090",
        senderId: "12345678",
        name: "trisha",
      } as Message,
      {
        text: "hi",
        date: "12.02.2090",
        senderId: "venkat",
        name: "trisha",
      } as Message,
      {
        text: "hi",
        date: "12.02.2090",
        senderId: "venkat",
        name: "trisha",
      } as Message,
      {
        text: "hi",
        date: "12.02.2090",
        senderId: "12345678",
        name: "trisha",
      } as Message,
      {
        text: "hi",
        date: "12.02.2090",
        senderId: "venkat",
        name: "trisha",
      } as Message,
    ],
  },
  getters: {
    getChats(state: any) {
      return state.chats;
    },
  },
};

interface Message {
  text: string;
  senderId: string;
  date: string;
  name: string;
}
