var rs = new Audio("img/run.mp3");
rs.loop = true;

var js = new Audio("img/jump.mp3");
var ds = new Audio("img/dead.mp3");

var ws = new Audio("img/win.mp3");

const char = document.getElementById("char");

var character = 0;
var level = 0;



function switchVisibility(hideId, showId) {
    document.getElementById(hideId).style.visibility = "hidden";
    document.getElementById(showId).style.visibility = "visible";

}

function htp() {
    switchVisibility("int-rec", "htp-rec");
    
}

function htpBack() {
    switchVisibility("htp-rec", "int-rec");

}

function charChoose() {
    switchVisibility("int-rec", "char-rec");

}

function charNinja() {
    switchVisibility("char-rec","bg-rec")
    character = 1;
}

function charRHB(){
    switchVisibility("char-rec", "bg-rec")
    character = 2;
}

function charCG(){
    switchVisibility("char-rec", "bg-rec")

    character = 3;
}

function bgV(){
    document.getElementById("init-game").style.visibility = "hidden";
    document.getElementById("bg-rec").style.visibility = "hidden";
    display = document.getElementById("main-game");
    display.style.visibility = "visible";
    display.className = "gameBG1";
    level = 1;
    gameStart();
}

function bgRT(){
    document.getElementById("init-game").style.visibility = "hidden";
    document.getElementById("bg-rec").style.visibility = "hidden";
    display = document.getElementById("main-game");
    display.style.visibility = "visible";
    display.className = "gameBG2";
    level = 2;
    gameStart();
}

function bgF(){
    document.getElementById("init-game").style.visibility = "hidden";
    document.getElementById("bg-rec").style.visibility = "hidden";
    display = document.getElementById("main-game");
    display.style.visibility = "visible";
    display.className = "gameBG3";
    level = 3;
    gameStart();
}

function keyLog(event){
    var x = event.which;
    if (x == 13){

    }
    if (x == 32){
        if (character == 1){
            if (jw == 0){
                clearInterval(nrw);
                rs.pause();
                jw = setInterval(jump, 180);
                js.play();
                nrw = -1;
            }
        }
        if (character == 2){
            if (jw == 0){
                clearInterval(rhbrw);
                rs.pause();
                jw = setInterval(jump, 130);
                js.play();
                rhbrw = -1;
            }
            
        }
        if (character == 3){
            if (jw == 0){
                clearInterval(cgrw);
                rs.pause();
                jw = setInterval(jump, 55);
                js.play();
                cgrw = -1;
            }
        }
    }
}

function gameStart(){
    if (character == 1){
        if (nrw == 0){
            nrw = setInterval(ninjaRun, 100);
            rs.play();
            bgmw = setInterval(bgMove, 100);
            genZombieID = genZombie();
            moveZombiew = setInterval(moveZombie, 100);
            scorew = setInterval(score, 100);
        }
    }
    if (character == 2){
        if (rhbrw == 0){
            rhbrw = setInterval(RHBRun, 100);
            rs.play();
            bgmw = setInterval(bgMove, 100);
            genZombieID = genZombie();
            moveZombiew = setInterval(moveZombie, 100);
            scorew = setInterval(score, 100);
        }
    }
    if (character == 3){
        if (cgrw == 0){
            cgrw = setInterval(CGRun, 100);
            rs.play();
            bgmw = setInterval(bgMove, 100);
            genZombieID = genZombie();
            moveZombiew = setInterval(moveZombie, 100);
            scorew = setInterval(score, 100);
        }
    }
}

var genZombieID = 0;
var p = 1000;

function genZombie(){
    for (var y = 0; y < 10; y++){
        const zombie = document.createElement("img");
        zombie.src = "img/zombie.gif";
        zombie.className = "zombie";
        zombie.style.marginLeft = p + "px";
        zombie.id = "z" + y;

        if(y <= 5){
            p = p + 700;
        }
        if (y >= 6){
            p = p + 500;
        }

        document.getElementById("main-game").appendChild(zombie);
    }
}

var moveZombiew = 0;

function moveZombie(){
    for (var y = 0; y < 10; y++){
        var z = getComputedStyle(document.getElementById("z" + y));
        var w = parseInt(z.marginLeft) - 25;
        document.getElementById("z" + y).style.marginLeft = w + "px";
        //alert(w);
        //175 - (-125)
        
        if (character == 1){
            if (w >= -125 & w <= 175){
                if (mt > 500){
                    clearInterval(nrw);
                    rs.pause();
                    clearInterval(jw);
                    jw = -1;
                    clearInterval(moveZombiew);
                    clearInterval(bgmw);
                    clearInterval(scorew);
                    dw = setInterval(dead, 100);
                    ds.play();
                }
            }   
        }
        if (character == 2){
            if (w >= 0 & w <= 200){
                if (mt > 500){
                    clearInterval(rhbrw);
                    rs.pause();
                    clearInterval(jw);
                    jw = -1;
                    clearInterval(moveZombiew);
                    clearInterval(bgmw);
                    clearInterval(scorew);
                    dw = setInterval(dead, 100);
                    ds.play();
                }
            }
        }
        if (character == 3){
            if (w >= -75 & w <= 175){
                if (mt > 500){
                    clearInterval(cgrw);
                    rs.pause();
                    clearInterval(jw);
                    jw = -1;
                    clearInterval(moveZombiew);
                    clearInterval(bgmw);
                    clearInterval(scorew);
                    dw = setInterval(dead, 30);
                    ds.play();
                }
            }
        }
    }
}

var nrw = 0;
var nr = 0;

function ninjaRun(){
    nr = nr + 1;
    if (nr == 9){
        nr = 1;
    }
    char.src = "img/ninja/Run__00" + nr + ".png";
}

var rhbrw = 0;
var rhbr = 1

function RHBRun(){
    rhbr = rhbr + 1 ;
    if (rhbr == 9){
        rhbr = 1;
    }
    char.src = "img/rhb/Run (" + rhbr + ").png";
}

var cgrw = 0;
var cgr = 1;

function CGRun(){
    cgr = cgr + 1;
    if (cgr == 21){
        cgr = 1;
    }
    char.src = "img/cg/Run (" + cgr + ").png";
}

var jw = 0;
var j = 1;

var mt = 550;

function jump(){
    //alert(mt);
    if (character == 1){
        if (j <= 5){
            mt = mt - 60;
        }
        if (j >= 6){
            mt = mt + 60;
        }
        char.style.marginTop = mt + "px";

        j = j + 1;
        if (j == 11){
            j = 1;
            clearInterval(jw);
            jw = 0;
            nrw = setInterval(ninjaRun, 100);
            rs.play();
        }
        char.src = "img/ninja/Jump__" + j + ".png";
    }
    if (character == 2){
        if (j <= 6){
            mt = mt - 50;
        }
        if (j >= 7){
            mt = mt + 50;
        }
        char.style.marginTop = mt + "px";

        j = j + 1;
        if (j == 13){
            j = 1;
            clearInterval(jw);
            jw = 0;
            rhbrw = setInterval(RHBRun, 100);
            rs.play();
        }
        char.src = "img/rhb/Jump (" + j + ").png";
    }
    if (character == 3){
        if (j <= 15){
            mt = mt - 20;
        }
        if (j >= 16){
            mt = mt + 20;
        }
        char.style.marginTop = mt + "px";

        j = j + 1;
        if (j == 31){
            j = 1;
            clearInterval(jw);
            jw = 0;
            cgrw = setInterval(CGRun, 100);
            rs.play();
        }
        char.src = "img/cg/Jump (" + j + ").png"
    }
}

function reload(){
    location.reload();
}

var b = 0;
var bgmw = 0;

function bgMove(){
    b = b - 20;
    document.getElementById("main-game").style.backgroundPositionX = b + "px";
}

var sc = 0;
var scorew = 0;

function score() {
    sc = sc + 5;
    document.getElementById("score").innerHTML = "Score: " + sc;
    if (sc == 1500){
        clearInterval(scorew);
        clearInterval(moveZombiew);
        clearInterval(bgmw);
        clearInterval(nrw);
        clearInterval(rhbrw);
        clearInterval(cgrw);
        clearInterval(jw);
        rs.pause();
        js.pause();
        jw = -1;
        ws.play();
        document.getElementById("main-game").style.visibility = "hidden";
        document.getElementById("game-won").style.visibility = "visible";
    }
}

var d = 0;
var dw = 0;

function dead(){
    if (character == 1){
        d = d + 1;
        if (d == 10){
            d = 9;

            document.getElementById("main-game").style.visibility = "hidden";
            document.getElementById("game-over").style.visibility = "visible";
            document.getElementById("final-score").innerHTML = "Your Score: " + sc + "/1500";
        }
        char.src = "img/ninja/Dead__00" + d + ".png";
    }
    if (character == 2){
        d = d + 1;
        if (d == 11){
            d = 10;

            document.getElementById("main-game").style.visibility = "hidden";
            document.getElementById("game-over").style.visibility = "visible";
            document.getElementById("final-score").innerHTML = "Your Score: " + sc + "/1500";
        }
        char.src = "img/rhb/Dead (" + d + ").png";
    }
    if (character == 3){
        d = d + 1;
        if (d == 31){
            d = 30;

            document.getElementById("main-game").style.visibility = "hidden";
            document.getElementById("game-over").style.visibility = "visible";
            document.getElementById("final-score").innerHTML = "Your Score: " + sc + "/1500";
        }
        char.src = "img/cg/Dead (" + d + ").png";
    }
    
}
