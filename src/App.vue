<template>
  <div id="body">
    <the-navbar />
    <!-- <div id="nav" class="bg-blue-400 flex justify-between">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
    <the-footer></the-footer>
  </div>
</template>

<script lang="ts">
import TheFooter from "./components/layout/TheFooter.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";
import WelcomeMsg from "./components/WelcomeMsg.vue";
export default {
  components: {
    TheNavbar,
    TheFooter,
    WelcomeMsg,
  },
};
</script>

<style  src="./assets/tailwind.css">
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
</style>
