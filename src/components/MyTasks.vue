<script setup lang = "ts" >
    import TaskDetail from "./TaskDetail.vue"
    import {task} from "./tasks.ts"

</script>
<template>

    <h1 style = "color: white">Meine Tasks</h1>
        <TaskDetail :task = "items" v-for = "items in task"></TaskDetail>
</template>
<style scoped >
    
</style> 
