<script setup lang = "ts">
    import {ref} from "vue";

    
    const colors = ref(["orange", "lightblue", "purple", "pink", "black"])
    const newColor = ref("")
    const selectedColors = ref("orange")
    const selectedColors2 = ref("orange")
    
    const scoreLeft = ref(0)
    const scoreRight = ref(0)
    const speed = ref(50)
    
    
     //method to handle start/stop of jumping ball
    const start = () => {
        let audio = document.getElementById("pongSong");
        let rickroll = document.getElementById("Ricky");
        var btn=document.getElementById("start-btn");
        if(btn.innerHTML.trim()==='Start'){
            //start jumping the ball
            timer=setInterval(function () {
                jumpBall();         
            },speed.value);
            btn.innerHTML='Stop';
            audio.play()
            rickroll.pause();
            rickroll.currentTime = 0;
        }else{
            //stop jumping the ball
            clearInterval(timer);
            btn.innerHTML='Start';
            audio.pause()
            audio.currentTime = 0
            rickroll.play()
        }
    
    
    
    }
    
    
    const pressed = (evt) => {
        let boxPfeil = document.getElementById("boxPfeil")
        let boxWS = document.getElementById("boxWS")
        
        
        //console.log(evt)
        
//              WS-tasten Box Bewegen    
        
        if ( evt.keyCode == 83 ) {
            const tmp = boxWS.style.marginTop.split("rem")
            
            if ( tmp[0] != "" && parseInt(tmp[0]) < 33) {
                boxWS.style.marginTop = (parseInt(tmp[0]) + 3) + "rem" 
               // console.log(tmp)
            }
            else if ( tmp[0] == "" )    {
                boxWS.style.marginTop = "19rem" 
            }
        }
        
        if ( evt.keyCode == 87 ) {
            const tmp = boxWS.style.marginTop.split("rem")
            
            if ( tmp[0] != "" && parseInt(tmp[0]) > 1) {
                boxWS.style.marginTop = (parseInt(tmp[0]) + -3) + "rem" 
                //console.log(tmp)
            }
            else if ( tmp[0] == "" )    {
                boxWS.style.marginTop = "13rem" 
            }
        }
        
//              Pfeiltasten Box Bewegen         

        if ( evt.keyCode == 40 ) {
            const tmp = boxPfeil.style.marginTop.split("rem")
            
            if ( tmp[0] != "" && parseInt(tmp[0]) < 33) {
                boxPfeil.style.marginTop = (parseInt(tmp[0]) + 3) + "rem" 
               // console.log(tmp)
            }
            else if ( tmp[0] == "" )    {
                boxPfeil.style.marginTop = "19rem" 
            }
        }
        
        if ( evt.keyCode == 38 ) {
            const tmp = boxPfeil.style.marginTop.split("rem")
            
            if ( tmp[0] != "" && parseInt(tmp[0]) > 1) {
                boxPfeil.style.marginTop = (parseInt(tmp[0]) + -3) + "rem" 
                //console.log(tmp)
            }
            else if ( tmp[0] == "" )    {
                boxPfeil.style.marginTop = "1rem" 
            }
        }
        
        if ( evt.keyCode == 13 ){
            start()
        }
    console.log(speed.value)
    }
    

    var timer;
    var marginTop = 1;
    var marginLeft = -1;
    var leftToRight = true;
    var bottomToTop = true;
    
    //method to jump the ball
    function jumpBall () {
        
        var ball = document.getElementById("ball");
        
        let boxPfeil = document.getElementById("boxPfeil");
        let boxWS = document.getElementById("boxWS");
        
        const tmpWS = boxWS.style.marginTop.split("rem")
        const tmpPf = boxPfeil.style.marginTop.split("rem")
        
        
        if(bottomToTop){
            marginTop -= 1;
        }else{
            marginTop += 1;
        }
        if ( leftToRight )  {
            marginLeft += 2;
        }else{
            marginLeft -= 2;
        }
        
        ball.style.marginTop = marginTop + "rem";
        ball.style.marginLeft = marginLeft + "rem";
        if(marginTop == 0){
            bottomToTop=false;
        }
        if(marginTop == 44){
            bottomToTop=true;
        }
        if ( marginLeft ==  77 )   {
            if ( parseInt(tmpPf[0]) < marginTop && marginTop < (parseInt(tmpPf[0]) + 11) ){
                leftToRight = false;
                if ( speed.value > 25 ){
                    clearInterval(timer)
                    speed.value -= 2.5
                    timer=setInterval(function () {
                    jumpBall();         
                },speed.value);
                }
            }else{
                scoreLeft.value += 1
                start()
                leftToRight = false
                speed.value = 50;
                
            }
            
        }
        if ( marginLeft == -77 ){
        if ( parseInt(tmpWS[0]) < marginTop && marginTop < (parseInt(tmpWS[0]) + 11) ){
                leftToRight = true;
                if ( speed.value > 25 ){
                    clearInterval(timer)
                    speed.value -= 2.5
                    timer=setInterval(function () {
                    jumpBall();         
                },speed.value);
                }
                
                
            }else{
                scoreRight.value += 1
                start()
                leftToRight = true;
                speed.value = 50;
            
            }       
        }
//         console.log(marginTop)
        console.log(marginTop)
        //console.log(parseInt(tmpPf[0]), marginTop, (parseInt(tmpPf[0]) + 1))
    }
    
    const addColor = () => {
        
        colors.value.push(newColor.value)
    }
    
    
    
        
    
    
     
</script>

<template>
    <h2>Pong</h2>
    <audio id = "Ricky">
        <source src = "../media/Rickroll.mp3" type = "audio/mpeg" >
    </audio>
    
    <audio id = "pongSong">
        <source src = "../media/bensound-moose.mp3" type = "audio/mpeg">
    </audio>
    <div>
    <input type = "text" class = "colorInput" v-model = "newColor">
        <select class = "playerLeft" v-model = "selectedColors">
            <option v-for = "color in colors">{{color}}</option>
        </select>    
    
        {{scoreLeft}}
        <button id="start-btn" @click="start()" style = "margin: 0 2rem 0 2rem">Start</button>
        {{scoreRight}}
        
        <select class = "playerRight" v-model = "selectedColors2">
            <option v-for = "color in colors">{{color}}</option>
        </select>
        <button type = "submit" class = "colorInput" @click = "addColor()">add</button>
        
    </div>
    <fieldset class = "field">
        <div class = "box" id= "boxWS">
            
        </div>
        
        <div id = "ball"></div>
        
        <div class = "box" id="boxPfeil">
            
        </div>
    </fieldset>
            <input type = "text" @keydown="pressed" style = "height: 3px" @click="start()"/>

</template>

<style scoped>
    
    .box{
        width: 1rem;
        height: 11rem;
        background-color: orange;
        
    }
    
    #boxWS{
        margin: 16rem 0 0.5rem 2rem;
        background-color: v-bind(selectedColors);
    }
    
    #boxPfeil{
        margin: 16rem 2rem 0.5rem 0;
        background-color: v-bind(selectedColors2);
    }
    
    .field {
        display: flex;
        width: 100rem;
        height: 45rem;
        background-color: #aaffaa;
        
        justify-content: space-between;
    }
    
    #ball {
        margin-top: 21rem;
        height: 1rem;
        width: 1rem;
        background-color: #554400;
    }
    
    .playerLeft{
        margin: 0 5rem 0 0;
    }
    .playerRight{
        margin: 0 0 0 5rem;
    }
    
    .colorInput{
        margin: 0 2rem 0 2rem;
        width: 6rem;
    }
    
</style>
