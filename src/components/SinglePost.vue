<template>
<router-link :to="{ name: 'Detail', params: { id: post.id }}">
    <h2>{{ post.title }}</h2>
</router-link>

   <p>{{ CutPostBody }}</p>
</template>

<script>
import { computed } from 'vue'
export default {
    props:["post"],

    setup(props){
        let CutPostBody=computed(()=>{
            return props.post.body.substring(0,100)+".....";
        })
        // console.log(CutPostBody);
        return {CutPostBody}
    }
}
</script>

<style>

</style>