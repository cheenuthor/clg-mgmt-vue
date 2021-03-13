export default {
  namespaced: true,
  state: {
    myProfile: {
      name: "venkata Krishnan",
      phone: 8124352472,
      email: "venkatakrishnanmdu@gmail.com",
      gender: "Male",
      dept: "CSE",
      year: 3,
      role: true,
    } as Profile,
  },
  mutations: {},
  actions: {},
  getters: {
    getProfile(state: any) {
      return state.myProfile;
    },
  },
};
interface Profile {
  name: string;
  phone: number;
  email: string;
  gender: string;
  dept: string;
  year: number;
  role: boolean;
}
