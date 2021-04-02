<template>
<div>
    <img src="" alt="" srcset="" />
    <h2>Group Chats</h2>
    <ul>
        <li v-for="chat in chats" :key="chat" class="notMe">
            <span>{{ chat.name }} : </span>
            {{ chat.text }}
        </li>
    </ul>
    <input @keydown="enter" type="text" v-model.trim="message" placeholder="Type Your Message here..." @click="send" />
    <button @click="send">Send Message</button>
</div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import {mapGetters} from "vuex";
interface Message {
    url: string;
    name: string;
    text: string;
    date_time: string;
    is_public: boolean;
    senderId: number;
}

export default defineComponent({
    data() {
        return {
            isEmpy: false as boolean,
            message: "" as string,
            chats: [] as Array <Message> ,
        };
    },
    computed: {
    ...mapGetters(['getUserName','getUserId'])
    },
    mounted(): void {
        this.getChat()
        // this.getProfile()
    },
    methods: {
        getChat(): any {
            this.chats = this.$store.getters.getChats;
            console.log(this.chats);
            return this.$store.getters.getChats
        },
        enter(event: { keyCode: number }) {
            if (event.keyCode === 13) {
                this.send();
            }
        },
        async send(): Promise<void> {
            if (
                this.message.length >= 1 &&
                (this.message != "" || this.message != null)
            ) {
                console.log("id",this.getUserId);
             await axios.post("http://localhost:8000/api/chat/", {
                    "name": this.getUserName,
                    "text": this.message,
                    "date_time": "12.04..200",
                    "is_public": false,
                    "sender_id": this.getUserId
                }) as Message
                this.getChat()
                this.message = "";
            }
        },
    },
});
</script>

<style lang="scss" scoped>
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
        span{
            color:#ddd
        }
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
