<template>
  <div>
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
   <!--  <transition
      :name="$store.state.pageTransition.name"
      :mode="$store.state.pageTransition.mode"
      v-on:after-enter="afterEnter"
      v-on:after-leave="afterLeave"
    >
      <router-view class="transition" />
    </transition> -->
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";


import axios from "axios";

export default {
  async created() {
    //  const response = await axios.get("user");
    // this.$store.dispatch('user', response.data); 
  },
};
</script>

<style>
</style>

