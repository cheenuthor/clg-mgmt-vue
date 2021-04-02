import axios from "axios";

export default {
  namespaced: false,
  state: {
    chats: [
    ] as Array<Message>,
  },
  getters: {
    getChats(state: any) {
      axios.get('http://localhost:8000/api/chat/').then((response)=>{
        for (let i = 0; i < response.data.length; i++) {
          state.chats[i] = response.data[i]
        }
      })
      return state.chats;
    },
    
  },
};

interface Message {
  url:string,
  name: string;
  text: string;
  date_time: string;
  is_public:boolean;
  senderId: string;
}
