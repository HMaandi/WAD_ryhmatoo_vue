<template>
   <HeaderComp/>
  <div id="content" class="content">
    <PostList/>
  </div>
  <FooterComp/>
  
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue"
import HeaderComp from "@/components/HeaderComp.vue"
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: 'PostsView',
  components: {PostList, HeaderComp, FooterComp}
}

</script>
