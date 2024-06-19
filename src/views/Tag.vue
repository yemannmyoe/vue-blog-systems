<template>
<div class="tag">
    <div v-if="error">Error</div>
<div v-if="posts.length" class="layout">
  <div>
    <PostLists :posts="filteredPosts"></PostLists>
  </div>
  <div>
    <TagCloud :posts="posts"></TagCloud>
  </div>
</div>
<div v-else>
    loading...
</div>
</div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import PostLists from '../components/PostLists'
import { computed } from 'vue';
import getPosts from '../composables/getPosts';

export default {
  components: {
    TagCloud, PostLists },
    props:["tag"],
    setup(props){
       let {posts,error,load}=getPosts();
       load();
       let filteredPosts=computed(()=>{
            return posts.value.filter((posts)=>{
                return posts.tags.includes(props.tag)
            })
       })
       return {posts,error,filteredPosts}
    }
}
</script>

<style>
    .tag{
        max-width: 1200px;
        margin: 0 auto;
    }
</style>