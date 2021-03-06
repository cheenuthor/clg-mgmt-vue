
<template>
  <div>
    <img
      srcset="
        https://www.teachers2gohouston.com/res/chinese-teacher-at-blackboard.jpg
      "
      alt=""
    />
    <h2>{{ name }}</h2>
    <svg
      width="102"
      height="87"
      viewBox="0 0 102 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.631169 86.625L101.208 43.5L0.631169 0.375L0.583252 33.9167L72.4582 43.5L0.583252 53.0833L0.631169 86.625Z"
        fill="#E7D5A8"
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
};
</script>

<style lang="scss" scoped>
div {
  background-color: #e76f51;
  display: flex;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem;
  vertical-align: center;
}
h2 {
  display: inline-block;
  color: #fff;
  flex: 1;
}
svg {
  width: 2rem;
//   align-self: flex-end;
}
img {
  border-radius: 50%;
  width: 5rem;

}
</style>