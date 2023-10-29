let canv = ""
window.onload = function() {
    canv = document.getElementById("snakeCanvas");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
}
sessionStorage.setItem("hScore","0")
let plyHghScr = 0;
let plyScr = 0;
xv=yv=0;
px=py=10;
tc=gs=20;
ax=ay=15;
trail=[];
tail = 5;
tmpx=tmpy=0;
pauseAlertTimes = 0;
backwardsAlertTimes = 0;
playing = false;
pause = false;
playerHitSelf = false;
subCalls = 0;
function game() {
    playerHitSelf = false;
    if(pause == true) {
        if(pauseAlertTimes == 0){
            alert("The game is currently paused. Press any of the arrow keys to contiue when you are ready.")
            pauseAlertTimes++;
        }
        subCalls = 0;
    }else{
        document.getElementById('email').style.display == ""
        px+=xv;
        py+=yv;
        if(px<0) {
            highScore();
        }
        if(px>tc-1) {
            highScore();
        }
        if(py<0){
            highScore();
        }
        if(py>tc-1) {
            highScore();
        }
        ctx.fillStyle="black";
        ctx.fillRect(0,0,canv.width,canv.height);
        ctx.fillStyle="lime";
        for(var i=0;i<trail.length;i++) {
            ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
            if(trail[i].x==px && trail[i].y==py) {
                tail = 5
                if(playing === true) {
                    if(backwardsAlertTimes == 0){
                        backwardsAlertTimes++;
                        playerHitSelf = true;
                        highScore();
                    }
                }
            }
        }
        trail.push({x:px,y:py});
        while(trail.length>tail) {
            trail.shift();
        }
        if(ax==px && ay==py) {
            tail++;
            plyScr++;
            tmpx=ax;tmpy=ay;
            ax=Math.floor(Math.random()*tc);
            ay=Math.floor(Math.random()*tc);
            while(ax==tmpx && ay==tmpy){
                ax=Math.floor(Math.random()*tc);
                ay=Math.floor(Math.random()*tc);
            }
            while(ax==0 && ay==0){
                ax=Math.floor(Math.random()*tc);
                ay=Math.floor(Math.random()*tc);
            }
            while(ax==0 && ay==20){
                ax=Math.floor(Math.random()*tc);
                ay=Math.floor(Math.random()*tc);
            }
            while(ax==20 && ay==0){
                ax=Math.floor(Math.random()*tc);
                ay=Math.floor(Math.random()*tc);
            }
            while(ax==20 && ay==20){
                ax=Math.floor(Math.random()*tc);
                ay=Math.floor(Math.random()*tc);
            }
        }
        ctx.fillStyle="red";
        ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
    }
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            xv=-1;yv=0;
            playing = true;
            pause = false; pauseAlertTimes = 0;backwardsAlertTimes = 0;
            break;
        case 38:
            xv=0;yv=-1;
            playing = true;
            pause = false; pauseAlertTimes = 0;backwardsAlertTimes = 0;
            break;
        case 39:
            xv=1;yv=0;
            playing = true;
            pause = false; pauseAlertTimes = 0;backwardsAlertTimes = 0;
            break;
        case 40:
            xv=0;yv=1;
            playing = true;
            pause = false; pauseAlertTimes = 0;backwardsAlertTimes = 0;
            break;
        case 16:
            pause = true;backwardsAlertTimes = 0;
            break;
    }
}
function highScore() {
    plyHghScr = sessionStorage.getItem("hScore");
    if(plyScr > plyHghScr) {
        plyHghScr = plyScr;
        sessionStorage.setItem("hScore",plyHghScr);
    }
    if(subCalls == 0){
        alert("You lose! Your score is: " + plyScr + ". Your high score is: " + plyHghScr + ".");
        subCalls++;
    }
    plyScr = 0; px = 10; py = 10
    tail = 5; ax=ay=15;
    trail = [];
    ctx.fillStyle="lime";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x==px && trail[i].y==py) {
            tail = 5
        }
    }
    trail.push({x:px,y:py});
    while(trail.length>tail) {
        trail.shift();
    }
    pause = true;
    document.getElementById("email").style.display = "none"
    alert("You lost so you can't enter your email anymore!")
}
