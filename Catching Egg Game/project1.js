let width = 350
let height = 400
this.score = 0
let score = 0
this.addedScore = false
let b = {
    speed: 5, //movement speed of bowl
    x: 150, //size bowl
    y: 360 //size bowl
}
var keysDown = {};// controll and moving bowl 
addEventListener("keydown",function (key){
    keysDown[key.keyCode] = true;
},false);

addEventListener("keyup",function (key){
    delete keysDown[key.keyCode];
},false);

function setUp() {
	ctx = document.getElementById("myCanvas").getContext("2d");
	canvas = document.getElementById("myCanvas")
    spawnRandomEgg();
    dropping();
    main();
}    
function move(){
    if (37 in keysDown){
            b.x -= b.speed
        if(b.x < 0){
            b.x = 0
        }   
    }    
    if(39 in keysDown){
            b.x += b.speed
        if(b.x >= 300){
           b.x = 300
        }
    }
    this.checkInside();
} 

this.checkInside = function(){
    for (var i = 0; i < array.length ; i++){
        var eggs = array[i];
        if(
        (eggs.x > b.x) &&
        (eggs.x < b.x + b.x) &&
        (eggs.y >= 360)
        ){   
        if (this.addedScore == false){
            if(eggs.type == "red"){
                this.score +=2
                array.splice(i,1)
            
            }else if(eggs.type == "purple"){
                this.score -=2
                array.splice(i,1)
            
            }else{
                this.score +=1
                array.splice(i,1)
            }    
            this.addScore == true;
            }
        }
    }    
}
function render(){ // add bowl in canvas
    if (bReady == true){
        ctx.drawImage(bImage,b.x,b.y,50,40);
    }
    
    //score and time 
    ctx.fillStyle = "blue";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Score: " + this.score, 240, 65);
    ctx.fillText("Time: " + count, 20, 65);
    
    if(finished==true){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillText("Score: " + this.score, 125, 120);
        ctx.fillText("Game over!", 120, 200);
      
    }
}

var main = function(){
    //run update function but dont change anything
    move ()
    //run render function
    render();
    //request to do function 
    requestAnimationFrame(main);
}

let count = 50
let finished = false
var counter = function(){
    count=count-1;
    if(count <=0){
        clearInterval(counter);
        cancelAnimationFrame(id)
        finished = true;
        count = 0
        bReady = false
    }
}
setInterval(counter,1000)
