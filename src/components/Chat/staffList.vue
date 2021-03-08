<template>
  <div id="listTile">
    <img
      srcset="
        https://www.teachers2gohouston.com/res/chinese-teacher-at-blackboard.jpg
      "
      alt=""
    />
    <div>
      <h2>
        {{ name }}
      </h2>
      <a href="#">teacher@gmail.com</a>
      <span>tags</span>
    </div>
    <svg
      width="102"
      height="87"
      viewBox="0 0 102 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="navigateToStaff"
      :staffId="id"
    >
      <path
        d="M0.631169 86.625L101.208 43.5L0.631169 0.375L0.583252 33.9167L72.4582 43.5L0.583252 53.0833L0.631169 86.625Z"
        fill="#eee"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    navigateToStaff() {
      this.$router.push("/chats/" + this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
#listTile {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  background-color: #e76f51;
  margin: 0.7rem;
  border-radius: 0.5rem;

  svg {
    padding-right: 0.5rem;
    align-self: flex-end;
    width: 2rem;
  }
  img {
    border-radius: 0.5rem;
    width: 5rem;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    font-family: "Montserrat", sans-serif;
    h2 {
      grid-area: name;
      display: inline-block;
      align-self: stretch;
      color: #ffffff;
      font-weight: 500;
    }
    a {
      color: rgba(255, 255, 255, 0.8);
    }
    span {
      color: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>