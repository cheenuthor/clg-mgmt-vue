<template>
  <ul>
    <staff-list
    class="stafflist"
      v-for="staff in getStaffs"
      :key="staff"
      :name="staff.name"
      :id="staff.id"
      :img="staff.img"
    ></staff-list>
  </ul>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import StaffList from "../components/Chat/staffList.vue";

export default defineComponent({
  components: {
    StaffList,
  },
  computed: mapGetters(["getStaffs"]),
});
</script>

<style lang="scss" scoped>
ul {
  margin: 2rem auto;
  padding: 0.7rem;
  border-radius: 0.5rem;
  background-color: #f4a261;
 
}
@media (min-width: 280px) {
  ul {
    width: 20rem;
  }
}
@media (min-width: 360px) {
  ul {
    margin: 1rem auto;
    padding: 0.3rem;
    width: 22rem;
  }
}
@media (min-width: 640px) {
  ul {
    width: 30rem;
  }
}
@media (min-width: 768px) {
  ul {
    width: 35rem;
  }
}
@media (min-width: 1050px) {
  ul {
    width: 40rem;
  }
}
</style>