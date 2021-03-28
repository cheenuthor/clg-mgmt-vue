<template>
    <the-navbar />
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
    <the-footer />
  <!-- <login></login> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";
import WelcomeMsg from "./components/WelcomeMsg.vue";
import Login from "./views/Login.vue";

export default defineComponent({
  components: {
    TheNavbar,
    TheFooter,
    WelcomeMsg,
    Login,
  },
});
</script>

<style   lang="scss">
  // teleport{ 
  //   // display:flex;
  // }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 3rem;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-4rem);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(4rem);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
