<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#fff"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
      />
    </svg>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped lang="scss">
div {
  display: flex;
  // padding: 1rem;
  width: 7rem;
  border: 0.2rem solid #e76f51;
  flex-basis: 10px;
  flex-direction: column;
  flex-wrap: nowrap;
  border-radius: 0.5rem;
  background-color: #e76f51;
  align-items: center;
  justify-content: center;
  opacity: 95%;
  transition: scale 0.3s ease-out;
  &:hover {
    background-color: #e66444;
    scale: 1.05;
    opacity: 100%;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }
  h1 {
    display: inline-block;
    color: #fff;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
  }
}
@media (min-width: 360px) {
  div {
    padding: 1rem;
    width: 10rem;
  }
}
@media (min-width: 640px) {
  div {
    padding: 2rem;
    width: 10rem;
  }
}
@media (min-width: 768px) {
  div {
    padding: 2rem;
    width: 10rem;
  }
}
@media (min-width: 1050px) {
  div {
    padding: 2rem;
    width: 15rem;
  }
}
</style>