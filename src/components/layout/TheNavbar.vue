<template>
  <nav>
    <router-link class="logo" to="/">Home</router-link>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#fff"
      @click="navigateprofile"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.1"
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </nav>
</template>

<script>
export default {
  methods: {
    navigateprofile() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style lang="scss">
nav {
  background-color: #264653;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  .logo {
    color: #d4d4d4;
    font-size: 1.2rem;
    &:hover {
      color: #f4f4f4;
    }
  }
  svg {
    width: 2rem;
  }
}
@media (min-width: 640px) {
  nav {
    padding: 0.8rem 3rem;
  }
}
@media (min-width: 768px) {
  nav {
    padding: 0.8rem 6rem;
  }
}
</style>
