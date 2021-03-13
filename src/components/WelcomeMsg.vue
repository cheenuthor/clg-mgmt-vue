<template>
  <div>
    <h2>Hello {{ getUserName }},Have a good {{ day }}</h2>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import {defineComponent}from "vue";
export default defineComponent({
  created() {
    let day = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    this.day = weekday[day.getDay()];
  },
  data() {
    return {
      day: "",
    };
  },
  computed: mapGetters(["getUserName"]),
});
</script>

<style lang="scss" scoped>
div {
  display: inline-block;
  margin: 0.75rem 1rem;
  border-radius: 4px;
  padding: 0.3rem 1rem;
  background-color: #2a9d8f;
  h2 {
    display: inline-block;
    font-size: 1.5rem;
    color: #fff;
  }
}

@media (min-width: 360px) {
  div {
    margin: 0.75rem 1rem;
    padding: 0.3rem 0.5rem;
    h2 {
      font-size: 1rem;
    }
  }
}

@media (min-width: 640px) {
  div {
    margin: 1rem 1rem;
    padding: 0.5rem 1rem;
    h2 {
      font-size: 1.3rem;
    }
  }
}

@media (min-width: 768px) {
  div {
    margin: 1rem 1rem;
    padding: 0.5rem 1rem;
    h2 {
      font-size: 1.5rem;
    }
  }
}
@media (min-width: 1050px) {
  div {
    margin: 1rem 1rem;
    padding: 0.5rem 17rem;
    h2 {
      font-size: 1.5rem;
    }
  }
}
</style>
