<template>
  <nav class="nav">
    <h1 class="nav-title">
      <router-link to="/" class="router-link-exact-active active"
        >No soy culto,
        <br />
        tengo internet
      </router-link>
    </h1>
  </nav>
</template>

<script>
export default {
  name: "HeaderBar"
};
</script>

<style lang="stylus" scoped>
.read-mode .nav
  transform: translate(-50%, -100%);
.nav
  position fixed
  z-index: 99 !important
  top 0
  left 50%
  width 100%
  padding 1.25rem .625rem .625rem
  border-bottom 1px solid #dae4eb
  background-color rgba(252,253,255,.975)
  box-shadow 0 -50vw 0 50vw rgba(252,253,255,.975)
  transform translate(-50%)
  transition all 550ms cubic-bezier(0.660, -0.230, 0.380, 1.260)
  z-index 1
.nav .nav-title
  font-size 1.2rem
  text-align left
  margin: 0 1em;
.nav .nav-title a
  color #2a3744
  margin-bottom 0.5rem
  font-weight 700
  line-height 1.2

@media screen and (min-width: 1200px)
  .nav
    width calc(100% - 10rem)
    padding 1.75rem 2.5rem 1.25rem
</style>
