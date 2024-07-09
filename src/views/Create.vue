<template>
<form @submit.prevent="addPost">
    <label>Title</label>
    <input type="text" required v-model="title">

    <label>Body</label>
    <textarea required v-model="body"></textarea>

    <label>Tags(hit enter to a tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">
    <div v-for="tag in tags" :key="tag" class="pill">
        {{ tag }}
    </div>
    <button>Add post</button>
</form>
</template>

<script>
import { handleError, ref } from 'vue';
import { useRouter } from 'vue-router';
import { db, serverTimestamp } from '../firebase/config';
import { collection, addDoc } from "firebase/firestore"; // Corrected Firestore imports

export default {
    setup(){
        // this.$router.push("/")
        let router=useRouter(); //this.$router
        // console.log(router);
        let title = ref("");
        let body = ref("");
        let tag = ref("");
        let tags = ref([]);

        let handleKeydown=()=>{
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value)
            }
            tag.value=""
        }

       // Function to add new post
       let addPost = async () => {
            let newPost = {
                title: title.value,
                body: body.value,
                tags: tags.value,
                created_at: serverTimestamp()
            };
            try {
                // Adding the post to Firestore
                let res = await addDoc(collection(db, "posts"), newPost);
                // console.log('Document written with ID: ', res.id);
                // Redirecting user to home page
                router.push({ name: "home" });
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        };

        return {title,body,tag, handleKeydown,tags,addPost};

    }
}
</script>

<style scoped>
form{
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
}
input, textarea{
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
}

textarea{
    height: 160px;
}
label{
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color:white;
    margin-bottom: 10px;
}
label::before{
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #444;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotate(-1.5deg);
}
button{
    display: block;
    margin-top: 30px;
    background: #444;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer;
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