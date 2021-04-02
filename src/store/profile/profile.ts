import axios from "axios";

export default {
  namespaced: false,
  state: {
    myProfile: {
      id: -1,
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
  getters: {
    getUserName(state:any,getters:any): string {
      getters.getProfile;
      return state.myProfile.name;
    },
     getProfile(state: any)  {
      axios.get("http://localhost:8000/api/profile/1/").
      then((response: { data: Profile }) => {
        console.log(response);
        state.myProfile.name = response.data.name;
        state.myProfile.reg_no = response.data.reg_no;
        state.myProfile.gender = response.data.gender;
        state.myProfile.dept_name = response.data.dept_name;
        state.myProfile.phone = response.data.phone;
        state.myProfile.email = response.data.email;
        state.myProfile.id = response.data.id;
        state.myProfile.isAdmin = response.data.isAdmin;
      })
      return state.myProfile as Profile;
    },
     getUserId (state:any,getters:any):number {
       getters.getProfile;
      return state.myProfile.id
    }
  },
};
interface Profile {
  id: number;
  name: string;
  reg_no: string;
  gender: string;
  isAdmin: Boolean;
  dept_name: string;
  year: number;
  email: string;
  phone: number;
}
