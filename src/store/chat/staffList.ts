export default {
  namespaced: false,
  state: {
    staffs: [
      { name: "trisha", id: "123456", img: "../" } as Staffs,
      { name: "samantha", id: "654321", img: "../" } as Staffs,
      { name: "keerthi suresh", id: "098765", img: "../" } as Staffs,
      { name: "trisha", id: "123456", img: "../" } as Staffs,
      { name: "samantha", id: "654321", img: "../" } as Staffs,
      { name: "keerthi suresh", id: "098765", img: "../" } as Staffs,
    ] as Array<Staffs>,
  },
  mutations: {},
  actions: {},
  getters: {
    getStaffs(state: any) {
      return state.staffs;
    },
  },
};
interface Staffs {
  name: string;
  id: string;
  img: string;
}
