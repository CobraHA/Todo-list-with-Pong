
<script setup lang = "ts" ></script>
<template>

    <ul class = "navbar"> 
        <li>
            <router-link :to="{name: 'my_task'}">
                Meine Tasks
            </router-link>
        </li>
        <li>
            <router-link :to="{name: 'pong'}">
                Pong
            </router-link>
        </li>
        <li style = "margin-left: auto;">
        
            <img src = "../media/Wallpaper-removebg-preview.png" style = "height:100px; padding: 2rem 0 0 5.7rem;"/>
            
        </li>
            
        <li style = "margin-left: auto;">
            <router-link :to="{name: 'add_task'}">
                Task erstellen
            </router-link>
        </li>
    </ul>
    
</template>
<style scoped >


    
    .navbar {
        
        display: flex;
        position: fixed;
        flex-flow: row;
        top: 0;
        left: 0;
        right: 0;
        background-color: orange;
        width: 100%;
        height: 3rem;
        align-items: center;
        padding: 0;
        margin: 0;
        overflow: hidden;
        list-style-type: none;
    }
    
    .logo {

        display: flex;
        text-align: center;
        margin: auto;
        color: solid black;
    }
    
    li a, li div, li router-link, li {
        display: block;
        color: black;
        text-align: center;
        padding: 2rem;
        text-decoration: none;
    }
    
    li a:hover, li div:hover, li router-link:hover, li:hover{
        color: white;
        font-weight:  bolder;
    }
    
</style>
