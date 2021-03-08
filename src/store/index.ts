import { createStore } from "vuex";
export default createStore({
  modules: {
    staffList: {
      namespaced: false,
      state: {
        staffs: [
          { name: "trisha", id: "123456", img: "../" } as Staffs,
          { name: "samantha", id: "654321", img: "../" } as Staffs,
          { name: "keerthi suresh", id: "098765", img: "../" } as Staffs,
        ] as Array<Staffs>,
      },
      mutations: {},
      actions: {},
      getters: {
        getStaffs(state) {
          return state.staffs;
        },
      },
    },
    chat: {
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
        getChats(state) {
          return state.chats;
        },
      },
    },
  },
  state: {
    islogin: false as boolean,
    name: "venkata krishnan" as string,
    id: "12345678" as string,
    staffs: [
      { name: "trisha", id: "123456", img: "../" } as Staffs,
      { name: "samantha", id: "654321", img: "../" } as Staffs,
      { name: "keerthi suresh", id: "098765", img: "../" } as Staffs,
    ],
  },
  mutations: {
    login(state) {
      state.islogin = true;
    },
    logout(state) {
      state.islogin = false;
    },
  },
  actions: {},
  getters: {
    getUserName(state): string {
      return state.name;
    },
    isLoggedIn(state): boolean {
      return state.islogin;
    },
    getUserId(state): string {
      return state.id;
    },
  },
});

interface Staffs {
  name: string;
  id: string;
  img: string;
}
interface Message {
  text: string;
  senderId: string;
  date: string;
  name: string;
}
