<template>
  <div :class="{ active: isActive }">
    <div class="preview-card" :style="backgroundImage"></div>
    <h4 :class="[{ 'title-show': isPost }, 'card-title']">
      {{ post.title.rendered }}
    </h4>
  </div>
  <!-- <b-card
    overlay
    :img-src="post.featured_image_src.full[0]"
    img-alt="Card Image"
    text-variant="white"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="card-content">
      <h4 :class="[{ 'title-show': isPost }, 'card-title']">
        {{ post.title.rendered }}
      </h4>
      <div
        :class="[{ 'show-excerpt': hover }, 'excerpt']"
        v-html="post.excerpt.rendered"
        v-if="!isPost"
      ></div>
    </div>

    <div class="preview-overlay"></div>
  </b-card> -->
</template>

<script>
export default {
  name: "PostPreview",
  props: ["post", "isActive"],
  data() {
    return {
      hover: false
    };
  },
  computed: {
    isPost() {
      return this.$route.fullPath !== "/" ? true : false;
    },
    backgroundImage() {
      return {
        "background-image": "url(" + this.post.featured_image_src.full[0] + ")"
      };
    }
  },
  methods: {
    backgroundStyles(image) {
      return {
        "background-image": `url(${image})`
      };
    }
  }
};
</script>

<style lang="stylus" scoped>

.active .preview-card
  height 400px
  margin-top: 0
  box-shadow 1px 8px 10px rgba(0,0,0,0.5)
.preview-card
  transition: all 500ms cubic-bezier(.2,.3,.4,.9)
  height 320px
  margin-top: 2em
  width 100%
  background-size cover
  border-radius 30px
  box-shadow 0px 0px 0px rgba(0,0,0,0.5)
  position relative
  z-index 2
.read-mode .preview-card
  border-radius 0px 0px 30px 30px

.read-mode .card-title
  transform translateY(-400%)
  position relative
  z-index 1
.card-title
  transition: transform 500ms cubic-bezier(.2,.3,.4,.9) 200ms
  font-size 1em
  text-align left
  opacity 0

.active .card-title
  opacity 1

.preview-figure
  position relative
  padding-top 140%
  //transition: padding-top 275ms cubic-bezier(.2,.3,.4,.9)
  background-size cover
  background-repeat no-repeat
  background-position 50%

.preview-details
  position absolute
  bottom 0
  width 100%

.preview-overlay
  position absolute
  top 0px
  left 0px
  width 100%
  height 100%
  background-color rgba(0,0,0,0.4)
  z-index 1

.card-content
  z-index 14
  position absolute
  bottom 0.7em
  left 15px
  text-shadow 2px 3px 3px #000
  text-align left
  overflow hidden

.excerpt
  //transition opacity 200ms ease, height 500ms cubic-bezier(0.660, -0.230, 0.380, 1.260)
  opacity 0
  height 0
  margin 0px 1em 1em 0px

.excerpt p
  z-index 14
  position relative
  font-size 1em
  color #f4f4f4
  overflow hidden
  text-overflow ellipsis
  display -webkit-box
  -webkit-line-clamp 3
  -webkit-box-orient vertical

.show-excerpt
  opacity 1
  height 3.5em

@media screen and (min-width: 768px)
  .title-show
    display none
</style>
