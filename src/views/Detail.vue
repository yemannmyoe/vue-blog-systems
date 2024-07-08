<template>
  <h1>Detail</h1>
  <div v-if="post" class="post">
   <h2>{{ post.title }}</h2>
   <p>{{ post.body }}</p>
   <button class="delete" @click="deletePost">Delete</button>
  </div>
  
  <div v-else>
    <Spinner>
      
    </Spinner>
  </div>

</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost';
import { useRoute } from 'vue-router';
import {db} from "../firebase/config";
import { useRouter } from 'vue-router';
import { doc, deleteDoc } from 'firebase/firestore';

export default {
  components: { Spinner },
    props:["id"], // this.$route.params.id
    setup(props){
      let route=useRoute(); //this.$route
      let router = useRouter();
      // console.log(route.params.id);
      let {post,error,load}=getPost(route.params.id); // {post,error,load} 
      load();
      let deletePost=async()=>{
         // Get a reference to the Firestore document
         let id = doc(db, "posts", props.id);

         // Delete the document from Firestore
         await deleteDoc(id);
            

              router.push("/");
      }
      return {post,error,deletePost}
    }

}
</script>

<style>
 .post{
        margin: 0 40px 30px;
        padding-bottom: 30px;
        border-bottom: 1px dashed #e7e7e7;
    }
    .post h2{
        display: inline-block;
        position: relative;
        font-size: 26px;
        color: white;
        margin-bottom: 10px;
        max-width: 400px;
    }
    .post h2::before{
        content:"";
        display:block;
        width: 100%;
        height: 100%;
        background: #ff8800;
        position: absolute;
        z-index: -1;
        padding-right: 40px;
        left: -30px;
        transform: rotateZ(-1deg);
    }

    button {
    display: block;
    margin-top: 30px;
    background: #444;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer;
}
/* Styles for the delete button */
button.delete {
    margin: 30px auto;
    background: red;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button.delete:hover {
    background-color: darkred;
}


</style>