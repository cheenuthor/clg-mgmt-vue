<template>
  <ul>
    <staff-list
    class="staffList"
      v-for="staff in staffs"
      :key="staff"
      :name="staff.name"
      :id="staff.id"
      :img="staff.img"
    ></staff-list>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StaffList from "../components/Chat/staffList.vue";
interface Staffs {
  name: string;
  id: string;
  img: string;
}
export default defineComponent({
  components: {
    StaffList,
  },
  data() {
    return {
      staffs: [
        { name: "trisha", id: "123456", img: "../" } as Staffs,
        { name: "trisha", id: "123456", img: "../" } as Staffs,
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
ul {
  margin: 2rem auto;
  padding: 0.7rem;
  border-radius: 0.5rem;
  background-color: #f4a261;
}

@media (min-width: 360px) {
}
@media (min-width: 640px) {
}
@media (min-width: 768px) {
}
@media (min-width: 1050px) {
  ul {
    width: 40rem;
  }
}
</style>