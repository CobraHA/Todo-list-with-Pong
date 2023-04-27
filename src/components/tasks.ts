import {ref}  from "vue"
import {ITask} from "./taskprops.vue"

export const task = ref<ITask[]>([
{
    title: "irgendein string",
    date: "24.04.2023",
    id: 1
},
{
    title: "Wischen",
    date: "24.05.2034",
    id: 2
},
{
    title: "Saugen",
    date: "12.02.2021",
    id: 3
},
{
    title: "zähneputzen",
    date: "12.02.2021",
    id: 4
}
    
])
