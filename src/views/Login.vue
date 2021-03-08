<template>
  <h2>{{ isLoggedIn }}</h2>
  <button @click="login">login</button>
  <button @click="logout">logout</button>
</template>

<script lang="ts">
import { mapGetters ,mapMutations} from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods:{
      ...mapMutations(['login','logout'])
  }
};
</script>

<style lang="scss" scoped>
</style>