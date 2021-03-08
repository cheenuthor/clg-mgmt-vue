<template>
  <div>
    <img src="" alt="" srcset="" />
    <h2>Chats / {{ staffId }}</h2>

    <ul>
      <li
        v-for="chat in chats"
        :key="chat"
        :class="chat.senderId === getUserId ? 'isMe' : 'notMe'"
      >
        <span v-if="chat.senderId != getUserId">{{ chat.name }} : </span>
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
import { mapGetters } from "vuex";
interface Message {
  text: string;
  senderId: string;
  date: string;
  name: string;
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
    };
  },

  computed: {
    ...mapGetters(["getUserId", "getUserName"]),
  },
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
          senderId: this.getUserId,
          name: this.getUserName,
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
  margin: 1rem auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  h2 {
    display: inline-block;
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
    height: 30rem;
    overflow-y: scroll;
    li {
      padding: 0.25rem 0.5rem;
      border-radius: 0.5rem;
      margin: 0.5rem;
      color: #fff;
      font-size: 1rem;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
        0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
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
@media (min-width: 360px) {
  div {
    width: 22rem;
  }
}
@media (min-width: 640px) {
  div {
    width: 30rem;
  }
}
@media (min-width: 768px) {
  div {
    width: 35rem;
  }
}
</style>