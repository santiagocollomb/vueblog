<template>
  <div class="container post-content">
    <h1 class="mb-3 d-none d-md-block">{{ post.title.rendered }}</h1>
    <h3 class="post-meta">
      by
      <a href="/by/michelle-blackford" class="post-author"
        >Michelle Blackford</a
      >
      <span class="post-date"></span> <time>Thu Sep 14, 2017</time>
    </h3>
    <div v-html="post.content.rendered"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Post",
  computed: {
    ...mapState("posts", {
      posts: "posts"
    }),
    post: function() {
      return this.posts.find(post => post.slug === this.$route.params.slug);
    }
  }
};
</script>

<style lang="stylus" scoped>
.post-content
  padding 0 1em 1em 1em
  text-align:justify

h1
  margin 0
  text-align left
  font-weight 200
  font-size 3rem

blockquote, blockquote p
  font-variant all-petite-caps
  text-align center
  text-indent 0em
  font-size 1.3em
.post-meta
  font-size 1.2rem
  display block
  margin-bottom 1.25rem
  padding-left 0.8rem
  padding-bottom 1.25rem
  border-bottom: 1px solid #dae4eb;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(218, 228, 235);
</style>
