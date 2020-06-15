<template>
  <div id="app">
    <LoadLayout v-if="isLoading">
      <BaseLoading />
    </LoadLayout>
    <MainLayout />
  </div>
</template>

<script>
import { mapState } from "vuex";
import LoadLayout from "./layouts/LoadLayout";
import MainLayout from "./layouts/MainLayout";
import BaseLoading from "@/components/BaseLoading.vue";

export default {
  name: "App",
  components: {
    LoadLayout,
    BaseLoading,
    MainLayout
  },
  computed: {
    // Uso: mapState(moduleName, { state })
    ...mapState("loading", {
      isLoading: "isLoading"
    })
  }
};
</script>

<style lang="stylus">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css");
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,400;1,500;1,700&display=swap");
body
  margin 0px
#app
  font-family Prompt, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
