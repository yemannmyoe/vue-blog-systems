<template>
    <div class="home">
       <!-- <div v-if="showPosts">
       
       </div> -->

      
       <!-- <button @click="showPosts=!showPosts">Toggle</button>
       <button @click="posts.pop()">Delete</button> -->

       <div v-if="error">
        {{ error }}
       </div>

       <div v-if="posts.length>0" class="layout"> 
      <div>
         <PostLists :posts="posts"></PostLists>
      </div>
      <div>
         <TagCloud></TagCloud>
      </div>
       </div>
       <div v-else>
      <Spinner>  </Spinner>
       </div>
    </div>
</template>
   
<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostLists from '../components/PostLists'
import getPosts from '../composables/getPosts';


export default {
  components: {
    TagCloud,
    Spinner, PostLists },
   setup(){
    let {posts,error,load} =getPosts() //{posts,error,load}
    load();  
    return {posts,error};
   }
}
</script>

<style>
   .home{
      max-width: 1200px;
      margin: 0 auto;
      padding: 10px;
   }
   
   .layout {
    display: grid;
    grid-template-columns: 3fr 1fr; 
    gap: 20px;
}


   .pill{
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
}
</style>