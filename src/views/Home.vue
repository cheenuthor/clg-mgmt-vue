<template>
  <welcome-msg></welcome-msg>

  <div class="home">
    <my-card title="Chat"></my-card>
    <my-card title="Annoncement"></my-card>
    <my-card title="Events"></my-card>
    <my-card title="Club Activities"></my-card>
    <my-card title="Study Material"></my-card>
    <my-card title="Projects"></my-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// @ is an alias to /src

import MyCard from "../components/layout/MyCard.vue";
import WelcomeMsg from "../components/WelcomeMsg.vue";

@Options({
  components: {
    MyCard,
    WelcomeMsg,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  padding: 2rem 4rem;
  display: grid;
  grid-template-columns: repeat(2, 7rem);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  justify-content: center;
  align-items: center;
}
@media (min-width: 360px) {
  .home {
    padding: 0.8rem 1.6rem;
    grid-template-columns: repeat(2, 10rem);
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
  }
}
@media (min-width: 640px) {
  .home {
    padding: 1rem 2rem;
    grid-template-columns: repeat(3, 10rem);
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
  }
}
@media (min-width: 768px) {
  .home {
    padding: 2rem 4rem;
    grid-template-columns: repeat(3, 12rem);
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
  }
}
@media (min-width: 1050px) {
  .home {
    padding: 3rem 6rem;
    grid-template-columns: repeat(3, 18rem);
    grid-row-gap: 3rem;
    grid-column-gap: 3rem;
  }
}
</style>
