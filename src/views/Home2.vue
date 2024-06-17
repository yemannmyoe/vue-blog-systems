<template>
    <div class="home">
        <input type="text" v-model="search">
        <p>search item-{{ search }}</p>
        <div v-for="name in filteredNames" :key="name">
            {{ name }}
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
   setup(){
    let search=ref("");
    let names=ref(["aung aung", "Kyaw Kyaw", "Su Su", "Aye Aye"]);
    
    let filteredNames=computed(()=>{
        return names.value.filter(name=>{
            return name.includes(search.value)
        })
    })

    return {names,search,filteredNames}
   }
}
</script>

<style>

</style>