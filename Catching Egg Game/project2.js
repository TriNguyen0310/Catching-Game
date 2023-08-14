let spawnTime = 1500 //Spawn eggs every 1500ms
let lastSpawn = -1 //Last time object was spawn
let spawnSpeed = 0.70 // speed of eggs when it drop from top to bottom 
let spawnY =50; //Object spawn at Y =50
let positionX = [30,110,190,270] //position of X where eggs should spawn
let array = []
let id = 0

function spawnRandomEgg(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    var t;
    if (Math.random() < 0.50) { // 50% for red 50% grey
        t = "grey";

    } else if(count % 2 == 1){
        t = "purple"
    } else {
        t = "red";
    }
    var eggs = {
        type: t,
        x: positionX[Math.floor(Math.random()*positionX.length)],
        y: spawnY
    }
    array.push(eggs);
}

function dropping(){ //elapsed time
    var time = Date.now() 
     
    if (time>(lastSpawn + spawnTime)){
        lastSpawn = time;
        spawnRandomEgg();
    }
    id = requestAnimationFrame(dropping);
    
    //clear canvas so object(eggs) can redraw in new positions
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //redraw background bird again
    cx.drawImage(bg,0,0)
		cx.drawImage(img,10,10,50,50)//bird
		cx.drawImage(img,90,10,50,50)//bird
		cx.drawImage(img,170,10,50,50)//bird
		cx.drawImage(img,250,10,50,50)//bird
        cx.drawImage(bar,0,50,450,20)//bar
    
        ctx.drawImage(bImage,b.x,b.y,50,40);
for (var i = 0; i < array.length; i++) {
        var eggs = array[i];
        if(count == 20){ //when the time is 20 speed up eggs drop :D
            spawnSpeed = 1.25   
            spawnTime = 500
          }
        eggs.y += spawnSpeed;
        ctx.beginPath();
        ctx.arc(eggs.x, eggs.y, 10, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = eggs.type;
        ctx.fill();
    }
}

