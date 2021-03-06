<template>
  <div id="body">
    <the-navbar />
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

<style   lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  the-footer {
    position: relative;
    top: 0;
  }
}
#nav {
  padding: 3rem;
}
</style>
