import { createStore } from "vuex";
import Chats from "./chat/chats";
import staffList from "./chat/staffList";
import profile from "./profile/profile";
export default createStore({
  modules: {
    staffList,
    Chats,
    profile,
  },
  state: {
    islogin: false as boolean,
    name: "venkata krishnan" as string,
    id: "12345678" as string,
    staffs: [
      { name: "trisha", id: "123456", img: "../" },
      { name: "samantha", id: "654321", img: "../" },
      { name: "keerthi suresh", id: "098765", img: "../" },
    ] as Array<Staffs>,
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
