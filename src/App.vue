<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import MyTasks from "./components/MyTasks.vue" 
import AddTasks from "./components/AddTasks.vue" 

</script>

<template>
    <div>
    
    <Navbar> </Navbar>
    <router-view> </router-view>
    </div>
</template>

<style scoped>

div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}
    
    
    
</style>
