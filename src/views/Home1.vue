<template>
  <div class="home">
    <h1>person one</h1>
    <p>{{ personOne.name }}-{{ personOne.age }}</p>

    <button @click="changeOne">change one</button>

    <h1>person two</h1>
    <p>{{ personTwo.name }}- {{ personTwo.age }}</p>
    <button @click="changeTwo">change two</button>

  </div>
</template>

<script>
import { reactive, ref } from 'vue';




export default {
setup(){
  let personOne = ref({name:"Kyaw Kyaw", age:"22"});

  let changeOne=()=>{
    personOne.value.name="Change Aung Aung"
  }

  let personTwo = reactive({name:"Mg Mg", age:20});

  let changeTwo=()=>{
    personTwo.name = "change aung mg"
  }
  

  return {personOne,changeOne, personTwo, changeTwo}
}
 
}
</script>
