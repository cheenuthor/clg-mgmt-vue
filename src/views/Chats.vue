<template>
  <div>
    <h2>Chats / {{ staffId }}</h2>
    <ul>
      <li
        v-for="chat in chats"
        :key="chat"
        :class="chat.senderId == '12345' ? 'isMe' : 'notMe'"
      >
        {{ chat.text }}
      </li>
    </ul>
    <input
      @keydown="enter"
      type="text"
      v-model.trim="message"
      placeholder="Type Your Message here..."
    />
    <button @click="send">Send Message</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
interface Message {
  text: string;
  senderId: string;
  date: string;
}
export default defineComponent({
  props: {
    staffId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      id: this.staffId as string,
      isEmpy: false,
      message: "" as string,
      chats: [
        { text: "hi", date: "12.02.2090", senderId: "venkat" } as Message,
        { text: "hi", date: "12.02.2090", senderId: "venkat" } as Message,
        { text: "hi", date: "12.02.2090", senderId: "venkat" } as Message,
        { text: "hi", date: "12.02.2090", senderId: "venkat" } as Message,
        { text: "hi", date: "12.02.2090", senderId: "venkat" } as Message,
      ],
    };
  },
  // computed: {
  //   chat() {
  //     return this.chats.find((chat: { senderId: string; }) => chat.senderId === this.id);
  //   },
  // },
  methods: {
    enter(event: { keyCode: number }) {
      if (event.keyCode === 13) {
        this.send();
      }
    },
    send(): void {
      if (
        this.message.length >= 1 &&
        (this.message != "" || this.message != null)
      ) {
        this.chats.push({
          text: this.message,
          date: "12.02.2090",
          senderId: this.id,
        });
        this.message = "";
      }
    },
  },
});
</script>

<style scoped lang="scss">
div {
  background-color: #f4a261;
  margin: 1rem 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  h2 {
    padding: 0.7rem 1rem;
    border-radius: 1rem 1rem 0 0;
    background-color: #2a9d8f;
    color: #fff;
    text-align: left;
  }
  ul {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    li {
      padding: 0.25rem 0.5rem;
      border-radius: 0.5rem;
      margin: 0.5rem;
      color: #fff;
      font-size: 1rem;
    }
  }
  input {
    background-color: #f4e2b5;
    color: #264653;
    border-radius: 0.5rem;
    margin: 0.5rem;
    border: 0.1rem solid #264653;
    padding: 0.2rem 0.5rem;
  }
  button {
    border-radius: 0.5rem;
    margin: 0;
    background-color: #2a9d8f;
    color: #fff;
    padding: 0.2rem 0.5rem;
  }
}
.isMe {
  background-color: #2a9d8f;
  align-self: flex-end;
}
.notMe {
  background-color: #e76f51;
  align-self: flex-start;
}
</style>