import MyTasks from "./components/MyTasks.vue" 


<script setup lang = "ts" >

import {ref} from "vue"

const colors = ["white", "lightgreen", "peachpuff"]
const selectedColor = ref("")



const props = defineProps<{task: ITask}>()

</script>

<template>

    <fieldset>
        <div class ="grid-container">
            <div class="item1">
                {{task.title}}
            </div>
            <div class="item2">
            <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                {{task.id}}
                    </a>
            </div>
            <div class="item3">
                {{task.date}}
            </div>
        <select class = "item4" v-model = "selectedColor">
            <option v-for = "color in colors">{{color}}</option>
        </select>
        </div>
    </fieldset>
</template>

<style scoped >
    .item1{
        grid-area: title;
    }
    .item2{
        grid-area: id;
    }
    .item3{
        grid-area: datum;
    }
    .item4{
        grid-area: color;
    }
    .grid-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: 
        "color title . id"
        ". datum . .";
    }
    fieldset{
    background-color: v-bind(selectedColor);
    }

</style> 
