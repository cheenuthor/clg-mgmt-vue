<template>
  <center>
    <div>
      <h2>Hello {{ name }},Have a good {{ day }}</h2>
    </div>
  </center>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "Venkat",
    },
  },
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
};
</script>

<style lang="scss" scoped>
div {
  display: inline-block;

  margin: 0.75rem 1rem;
  border-radius: 4px;
  padding: 0.3rem 1rem;
  background-color: #2a9d8f;
  h2 {
    font-size: 1.5rem;
    color: #fff;
  }
}

@media (min-width: 360px) {
  div {
    margin: 0.75rem 1rem;
    padding: 0.3rem 1rem;
    h2 {
      font-size: 1.2rem;
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
