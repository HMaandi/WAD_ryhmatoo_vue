<template>
<div class="sidebar"></div>
<div class = "posts">
    <PostComp class="post" v-for ="post in posts" :key="post.id" postId=post.id postProfile=post.postProfile postDate=post.postDate postText=post.postText likes=post.likes />
</div>
<div class="sidebar"></div>
</template>
  
<script>
import PostComp from "@/components/PostComp.vue"
  export default {
    name: "PostList",
    components: {PostComp},
    data: function() {
        return {}
    },
    computed: {
      posts() {
        return this.$store.state.posts;
      },
    },
  };
</script>