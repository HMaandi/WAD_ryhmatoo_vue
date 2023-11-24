<template>
<div class="sidebar"></div>
<div class = "posts">
    <div class="post" v-for = "post in posts" :key="post.id">
        <div class="postHeader">
            <img class="postProfile" :src="require('@/assets/' + post.profilePic)" alt="">
            <p class="postDate">{{ post.date }}</p>
        </div>
        <img class="postPic" v-if="post.postPic" :src="require('@/assets/' + post.postPic)" alt="">
        <p class="postText">{{ post.postText }}</p>
        <div class="postFooter">
          <img v-on:click="increaseLikes(post.id)" class="likeButton" src="@/assets/thumb.png" alt="">
          <p>{{ post.likes }}</p>
        </div>
    </div>
    <button v-on:click="resetLikes" class="resetButton">RESET LIKES</button>
</div>
<div class="sidebar"></div>
</template>
  
<script>

  export default {
    name: "PostList",
    data: function() {
        return {}
    },
    methods: {
      increaseLikes(post) {
        this.posts[post].likes++
      },
    
      resetLikes() {
        this.posts.forEach(post => {
          post.likes = 0
        })
      }
    },
    computed: {
      posts() {
        return this.$store.state.posts;
      },
    },
  };
</script>