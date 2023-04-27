
import MyTasks from "./components/MyTasks.vue" 



<script setup lang = "ts" >
    import {ITask} from "./taskprops.ts"
    import {task} from "./tasks.ts"
    import {ref} from "vue"
    
    const timeElipsed = Date.now()
    const today = new Date(timeElipsed).toLocaleDateString()
    
    const title = ref("")
    const date = ref(today)
    const id = ref()
    
    const AddTask = () => {
    
    if ( title.value != "" && title.value.length >= 4 )   {
            const newEntry: ITask = {
                title: title.value,
                date: date.value,
                id: task.value.length +1
            }
            console.log(newEntry)
        
            task.value.push(newEntry)
        }
    }
    

</script>

<template>

    <fieldset>
            
        <h1>Erstelle eine Task</h1>
    
        <div style = "margin: 0 0 2rem 0">
            <label for = "title">Name des Tasks</label>
            <input id = "title" type = "text" placeholder = "Enter Task" v-model = "title">
        </div>
        
        <div>
            <label for = "date">Heutiger Tag</label>
            <input id = "date" type = "date" v-model = "date">
        </div>
        
        <router-link :to="{name: 'my_task'}">
        <button style = "margin: 1rem 0 0 0" @click = "AddTask"  >Speichern</button>
        </router-link>
        
    </fieldset>
    
</template>

<style scoped >
   
    label {
        margin: 0 0 1rem 0;
        display: block;
        text-align: center;
    }
   
</style> 
