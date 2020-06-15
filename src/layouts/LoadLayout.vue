<template>
  <div class="loading-layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: "LoadLayout"
};
</script>

<style lang="stylus">
.loading-layout
  position: relative;
  min-height: 100vh;
  max-width: 90rem;
  margin: 0 auto;
  padding-top: 6.25rem;
  overflow-x: hidden;
  padding: 7.5rem 2.5rem 6.5vw;
</style>
