export default {
  namespaced: false,
  state: {
    myProfile: {
      name: "venkata Krishnan",
      regno: "18cs039",
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
    getProfile(state: any): Profile {
      return state.myProfile as Profile;
    },
  },
};
interface Profile {
  name: string;
  regno: string;
  phone: number;
  email: string;
  gender: string;
  dept: string;
  year: number;
  role: boolean;
}
