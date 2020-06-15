<template>
  <div :class="[{ 'read-mode': isReadMode }, 'main']">
    <HeaderBar />
    <transition
      name="router-transition"
      mode="in-out"
      enter-active-class="animate__animated animate__slideInUp"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view></router-view>
    </transition>
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from "@/components/Footer/Index";
import HeaderBar from "@/components/HeaderBar/Index";

export default {
  name: "MainLayout",
  components: { FooterBar, HeaderBar },
  data() {
    return {
      isReadMode: false
    };
  },
  watch: {
    $route: {
      deep: true,
      handler: function(page) {
        page.fullPath !== "/"
          ? (this.isReadMode = true)
          : (this.isReadMode = false);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.read-mode.main
  padding 0rem
.main
  position relative
  min-height 100vh
  max-width 90rem
  margin 0 auto
  overflow-x hidden
  padding 7rem 0.5rem 6.5vw
  transition padding 550ms cubic-bezier(0.660, -0.230, 0.380, 1.260)
</style>
