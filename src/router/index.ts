import {createRouter, createWebHashHistory} from "vue-router"
import AddTasks from "../components/AddTasks.vue"
import MyTasks from "../components/MyTasks.vue"
import Pong from "../components/pong.vue"

const routes = [
    {
        path: "/MyTask", 
        component: MyTasks,
        name: "my_task",
       
    },
    {
        path: "/AddTasks", 
        component: AddTasks,
        name: "add_task"
    },
    {
        path: "/Pong", 
        component: Pong,
        name: "pong"
    }
               ]
const router = createRouter({
    history: createWebHashHistory(),
    routes
    
})
export default router
