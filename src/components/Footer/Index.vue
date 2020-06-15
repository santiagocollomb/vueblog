<template>
  <footer :class="[{ 'footer-post': isPost }, 'footer-bar', 'mt-5']">
    <hr class="my-5" />
    <PoweredByFoot :icons="icons" />
  </footer>
</template>

<script>
import PoweredByFoot from "./PoweredByFoot";

export default {
  name: "FooterBar",
  components: { PoweredByFoot },
  data() {
    return {
      icons: [
        {
          classes: ["fab", "vuejs"],
          color: "#4fc08d",
          href: "https://vue.js.org/"
        },
        {
          classes: ["fab", "bootstrap"],
          color: "#7952b3",
          href: "https://bootstrap-vue.js.org/"
        },
        {
          classes: ["fab", "github"],
          color: "#000",
          href: "https://github.com/baumannzone"
        },
        {
          classes: ["fab", "font-awesome"],
          color: "#0e95ff",
          href: "https://fontawesome.com/"
        }
      ]
    };
  },
  computed: {
    isPost() {
      return this.$route.fullPath !== "/" ? true : false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@media screen and (min-width: 768px)
  .footer-post
    width calc(100% / 3 - 1rem)
    padding-left 15px
    margin-left 30px
</style>
