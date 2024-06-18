<template>
<div v-if="error">Error</div>
<div v-if="posts.length">
   <PostLists :posts="filteredPosts"></PostLists>
</div>
<div v-else>
    loading...
</div>
</template>

<script>
import PostLists from '../components/PostLists'
import { computed } from 'vue';
import getPosts from '../composables/getPosts';

export default {
  components: { PostLists },
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

</style>