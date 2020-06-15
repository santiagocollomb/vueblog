<template>
  <div class="home">
    <!--  <h1 class="home-title" v-show="selectedPost == ''">
      Reflexiones de un primate con celular <br />(⊙.☉)7
    </h1> -->

    <transition-group tag="ul" class="blog-feed" :style="listLength">
      <li
        :style="listPosition"
        :class="[{ 'post-width': selectedPost !== '' }, 'post-preview']"
        :key="post.slug"
        v-for="(post, i) of postsFilter"
        v-on:click="selectPost(post.slug)"
      >
        <PostPreview :post="post" :isActive="i === currentIndex" />
      </li>
    </transition-group>
    <transition name="content">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostPreview from "@/components/PostPreview/Index";

export default {
  name: "Home",
  components: {
    PostPreview
  },
  data: () => {
    return {
      touch: {
        startX: 0,
        endX: 0
      },
      selectedPost: ""
    };
  },
  computed: {
    ...mapState("posts", {
      posts: "posts",
      currentIndex: "currentIndex"
    }),
    postsFilter() {
      /*if (this.selectedPost === "") return this.posts;
      else return this.posts.filter(post => post.slug === this.selectedPost);*/
      return this.posts;
    },
    listLength() {
      return { width: this.postsFilter.length * 100 + "%" };
    },
    listPosition() {
      return { transform: "translateX(-" + this.currentIndex * 100 + "%)" };
    },
    isReadMode() {
      return this.selectedPost !== "";
    }
  },
  created() {
    this.$store.dispatch("posts/getPosts");
  },
  mounted() {
    this.$el.addEventListener("touchstart", event => this.touchStart(event));
    this.$el.addEventListener("touchmove", event => this.touchMove(event));
    this.$el.addEventListener("touchend", () => this.touchEnd());
  },
  methods: {
    selectPost(slug) {
      //this.selectedPost = slug;
      this.$router.push({
        name: "Post",
        params: {
          slug: slug
        }
      });
    },
    touchStart(event) {
      if (this.selectedPost !== "")
        this.touch.startX = event.touches[0].clientX;
      this.touch.endX = 0;
    },
    touchMove(event) {
      if (this.selectedPost !== "") this.touch.endX = event.touches[0].clientX;
    },
    touchEnd() {
      if (
        (this.selectedPost !== "" && !this.touch.endX) ||
        Math.abs(this.touch.endX - this.touch.startX) < 20
      )
        return;
      if (this.touch.endX < this.touch.startX)
        this.$store.commit("posts/NEXT_INDEX");
      else this.$store.commit("posts/PREV_INDEX");
    }
  },
  watch: {
    $route: {
      deep: true,
      handler: function(page) {
        page.fullPath === "/"
          ? (this.selectedPost = "")
          : (this.selectedPost = this.$route.params.slug);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>

.blog-feed
  padding 0px
  display flex
  margin 0px
.post-preview
  width 35%
  margin 0px 1em 1em 1em
  transition width 850ms cubic-bezier(0.660, -0.230, 0.380, 1.260), margin 1000ms cubic-bezier(0.660, -0.230, 0.380, 1.260), transform 250ms cubic-bezier(0.660, -0.230, 0.380, 1.260)
  //transition width 550ms ease-out

.read-mode .post-preview
  width 100%
  margin 0

.home-title
  font-weight 700
  font-size 2.5em
  padding 2% 10% 10%
  width 60%
  margin auto

.list-enter,
.list-leave-to
  transform translateX(+2500px)

.content-enter-active,
.content-leave-active,
.home-title
  transition all 500ms cubic-bezier(0.660, -0.230, 0.380, 1.260)



.content-enter,
.content-leave-to
  opacity 0
  transform translateY(300px)
</style>
