import axios from "axios";

export default {
  namespaced: false,
  state: {
    myProfile: {
      url: "",
      name: "",
      reg_no: "",
      gender: "",
      isAdmin: false,
      dept_name: "",
      year: 0,
      email: "",
      phone: 0,
    } as Profile,
  },
  // mutations: {},
  // actions: {
  //   getProfile_server(state: any) {
  //     axios.get("http://localhost:8000/api/profile/1/").then((response) => {
  //       // console.log(response.data.name);
  //       state.myProfile = response.data as Profile;
  //       // console.log(state.myProfile.name)
  //     });
  //   },
  // },
  getters: {
    getProfile(state: any): Profile {
      axios.get("http://localhost:8000/api/profile/1/").then((response) => {
        console.log(response.data);
        state.myProfile.name = response.data.name;
        state.myProfile.reg_no = response.data.reg_no;
        state.myProfile.gender = response.data.gender;
        state.myProfile.dept_name = response.data.dept_name;
        state.myProfile.phone = response.data.phone;
        state.myProfile.email = response.data.email;
        // console.log(state.myProfile.name)
      });
      return state.myProfile as Profile;
    },
  },
};
interface Profile {
  url: string;
  name: string;
  reg_no: string;
  gender: string;
  isAdmin: Boolean;
  dept_name: string;
  year: number;
  email: string;
  phone: number;
}
