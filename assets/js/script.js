document.addEventListener("keydown", keyPressed, true);
var bod = document.getElementById("body");
var state = 0;
var tries = 0;
var game = 0;
var faster = 0;
var button_timeout;
var button_timeout2;
var direct;
var reset = false;
var fast = Array();
var maxFruit = 10;
var fruits;
var countFruit = 0;
var fruitClass = "fruit";
var fruitHolder = document.getElementById("droppings");
fast[0] = "36.a";
fast[1] = "36.b";
fast[2] = "36.c";
fast[3] = "37";
fast[4] = "47"
var loud = Array();
loud[0] = "16";
loud[1] = "17";
loud[2] = "21";
var loudMessage = Array();
loudMessage[0] = "icanthearyou";
loudMessage[1] = "sorrysayagain";
loudMessage[2] = "louder";
var hugMessage = Array();
hugMessage[0] = "warmhug";
hugMessage[1] = "nutridayhug";

var goodHugSound = Array();
goodHugSound[0] = "27";
goodHugSound[1] = "28";
goodHugSound[2] = "33";
goodHugSound[3] = "19";

var goodHug = Array();
goodHug[0] = "ahhthatsnice";
goodHug[1] = "nutridaylovesyoutoo";
goodHug[2] = "ahhthatsanutridayhug";
goodHug[3] = "youlovemethatmuch";


var badHug = Array();
badHug[0] = "comesqueezeharder";
badHug[1] = "isthatallyougot";
badHug[2] = "youcallthatahug";
badHug[3] = "ouchsqueezed";

var badHugSound = Array();
badHugSound[0] = "29";
badHugSound[1] = "30";
badHugSound[2] = "31";
badHugSound[3] = "32";

var nutriday = Array();
nutriday[0] = "HopOneLeg";
nutriday[1] = "TurnInACircle";
nutriday[2] = "FunkyChicken";
nutriday[3] = "HighJump";
nutriday[4] = "FunnyFace";
nutriday[5] = "ShakeThatBum";
nutriday[6] = "CrazyDance";

var nutridaySounds = Array();
nutridaySounds[0] = "2";
nutridaySounds[1] = "3";
nutridaySounds[2] = "4";
nutridaySounds[3] = "5";
nutridaySounds[4] = "7";
nutridaySounds[5] = "10";
nutridaySounds[6] = "13";


var game_4_2 = Array();
game_4_2[0] = "slowDown";
game_4_2[1] = "Whoho";

var game_1_7 = Array();
game_1_7[0] = "wigel";
game_1_7[1] = "wigelwigel";

var game_1_7_f = Array();
game_1_7_f[0] = "isthatallyougot_1";
game_1_7_f[1] = "comeon";
game_1_7_f[2] = "youcandoit";

var game_1_7_fs = Array();
game_1_7_fs[0] = "30";
game_1_7_fs[1] = "39";
game_1_7_fs[2] = "41";

var game_1_1 = Array();
game_1_1[0] = "youcandoit";
game_1_1[1] = "yougotthis";

var game_1_1s = Array();
game_1_1s[0] = "41";
game_1_1s[1] = "40";

var game_1_1_f = Array();
game_1_1_f[0] = "isthatallyougot_1";
game_1_1_f[1] = "comeon";

var game_1_1_fs = Array();
game_1_1_fs[0] = "30";
game_1_1_fs[1] = "39";

var c = 0;
var sn = document.getElementById("small_nutriday");
var bn = document.getElementById("big_nutriday");
var gmi = document.getElementById("game_image");
var gm_i = document.getElementById("gm_i");
var gm1 = document.getElementById("game_first");
var gm2 = document.getElementById("game_second");
var aud = document.getElementById("audio_player");
var aus = document.getElementById("audio_source");
var intval;
var playSounds;
setInterval(soundPlay, 10000);

//console.clear();
console.log("1 - Nutriday Says");
console.log("2 - Give Nutriday a Hug");
console.log("3 - Shout Nutriday");
console.log("4 - Push the Button");

setInterval(checkFruit,1000);

function checkFruit(){
    var h = window.innerHeight;
    countFruit = fruitHolder.getElementsByTagName("figure").length;
    fruits = fruitHolder.getElementsByTagName("figure");
    for(var i = 0; i < fruits.length; i++){
        if( fruits[i].offsetTop > h){
            fruits[i].remove();
        }
    }
    var f;
    for(f = countFruit ; f < maxFruit; f++){
        var rt = Math.floor((Math.random() * 1000));
        setTimeout(function(){
        var r = Math.floor((Math.random() * window.innerWidth));
        var n = document.createElement("figure");
        var ra = Math.floor((Math.random() * 7) + 3);
        var rn = Math.floor((Math.random() * 3) + 1);
        fruitClass = "fruit"+rn;
        n.style.animationDuration = ra+"s";
        n.className = fruitClass;
        n.style.left = r+"px";
        fruitHolder.appendChild(n);
        },rt);
    }
}

function soundPlay() {
    if (state == 0) {
        aud.src = "assets/media/43.mp3";
        aud.load();
        aud.play();
        setTimeout(function() {
            if (state == 0) {
                aud.src = "assets/media/44.mp3";
                aud.load();
                aud.play();
            }

        }, 1000);
    }
}

function keyPressed(e) {
    //e.preventDefault();
    c = e.keyCode - 48;
    if (c == 34) {
        reset = true;
        bod.className = bod.className + " out";
        clearTimeout(button_timeout);
        setTimeout(f_reset, 500);
    } else {
        if ((c < 10) && (c > 0)) {
            clearInterval(intval);
            game = c;
            switch (state) {
                case 0:
                    bod.className = bod.className + " out";
                    reset = false;
                    setTimeout(selectGame, 400);
                    break;

                case 35:
                    fasterButton();
                    break;
                case 36:
                    louderButton();
                    break;
                case 37:
                    hugged();
                    break;
                case 38:
                    NutridaySays();
                    break;
                case 39:
                case 40:
                case 41:
                case 42:
                case 43:
                    said();
                    break;
                case 45:
                    case 44:
                    dance();
                    break;

            }
        }
    }
}


function selectGame() {
    state = -1;
    var clas = "";

    switch (game) {
        case 1:
            clas = "game_1";
            aud.src = "assets/media/1.mp3";
            aud.load();
            aud.play()
            var a = document.getElementsByClassName("says");
            var d;
            for (d = 0; d <= a.length - 1; d++) {
                a[d].className = "";
            }
            setTimeout(function() {
                if(reset == false){
                    state = 38;
                }
            }, 1000);
            //console.clear();
            console.log("1 - Hop on One leg");
            console.log("2 - Turn in a circle");
            console.log("3 - Do the funky chicken");
            console.log("4 - How High can you jump");
            console.log("5 - Pull a Funny face");
            console.log("6 - Let's Shake that Bum");
            console.log("7 - Do a Crazy Dance");
            break;
        case 2:
            clas = "game_2";
            var i = Math.floor((Math.random() * 2));
            var x = (i + 23)
            aud.src = "assets/media/" + x + ".mp3";
            aud.load();
            aud.play()
            var x = document.getElementsByClassName("love");
            var y;
            for (y = 0; y < x.length; y++) {
                x[y].className = "";
            }
            document.getElementById(hugMessage[i]).className = "love";
            setTimeout(function() {
                if(reset == false){state = 37;}
            }, 2500);
            //console.clear();
            console.log("1 - Not a Hug");
            console.log("2 - Again");
            console.log("3 - Thats A HUG");
            break;
        case 3:
            clas = "game_3";
            aud.src = "assets/media/14.mp3";
            aud.load();
            aud.play()
            setTimeout(function(){
                if(reset == false){hitShoutStart()}}, 2500);
            //console.clear();
            console.log("1 - Louder");
            console.log("2 - Too lou");
            console.log("3 - Win");
            break;
        case 4:
            clas = "game_4";
            aud.src = "assets/media/34.mp3";
            aud.load();
            aud.play()
            setTimeout(function(){if(reset == false){hitButtonStart()}}, 2500);
            //console.clear();
            console.log("1 - Faster");
            console.log("2 - Cheer on");
            console.log("3 - Win");
            break;
    }
    sn.className = "show";
    bod.className = clas;
}


function f_reset() {
    bod.className = "screen_start";
    document.getElementById("areYouReady_1").className = "";
    document.getElementById("areYouReady_2").className = "";
    state = 0;
    aud.pause();
    game = 0;
    faster = 0;
    sn.className = "";
    clearTimeout(button_timeout);
    clearTimeout(button_timeout2);
    clearTimeout(playSounds);
    aud.pause();
    var a = document.getElementsByClassName("says");
    var d;
    for (d = 0; d <= a.length - 1; d++) {
        a[d].className = "";
    }
    var a = document.getElementsByClassName("hug");
    var d;
    for (d = 0; d <= a.length - 1; d++) {
        a[d].className = "";
    }
    //console.clear();
    console.log("1 - Nutriday Says");
    console.log("2 - Give Nutriday a Hug");
    console.log("3 - Shout Nutriday");
    console.log("4 - Push the Button");


}

function NutridaySays() {
    var it = game - 1;
    state = -1;
    aud.src = "assets/media/" + nutridaySounds[it] + ".mp3";
    aud.load();
    aud.play();
    document.getElementById(nutriday[it]).className = "says";
    document.getElementById(nutriday[it] + "SVG").className = "says";
    state = 38 + game;

}


function hitShoutStart() {
    state = -1;
    document.getElementById("screen_3").className = "screen countDown";
    document.getElementById("areYouReady_1").className = "play";
    aud.src = "assets/media/45.mp3";
    aud.load();
    aud.play()
    button_timeout = setTimeout(function() {
        aud.src = "assets/media/35.mp3";
        aud.load();
        aud.play()
        if (state != 0) {
            button_timeout2 = setTimeout(function() {
                if(reset == false){state = 36;}
            }, 4700);
        }
    }, 2500);
}

function hitButtonStart() {
    state = -1;
    document.getElementById("screen_4").className = "screen countDown";
    document.getElementById("areYouReady_2").className = "play";
    aud.src = "assets/media/45.mp3";
    aud.load();
    aud.play()
    button_timeout = setTimeout(function() {
        aud.src = "assets/media/35.mp3";
        document.getElementById("areYouReady_2").className = "";
        aud.load();
        aud.play()
        if (state != 0) {
            button_timeout2 = setTimeout(function() {
                if(reset == false){state = 35;}
            }, 4700);
        }
    }, 2500);
}

function hugged() {
    switch (game) {
        case 1:
            state = -1;
            aud.src = "assets/media/48.mp3";
            aud.load();
            aud.play();
            document.getElementById("again").className = "again";
            playSounds = setTimeout(function() {
                if(reset == false){state = 37;}
                document.getElementById("again").className = "";
            }, 1000);
            break;
        case 2:
            state = -1;
            var h = Math.floor((Math.random() * 4))
            aud.src = "assets/media/" + badHugSound[h] + ".mp3";
            aud.load();
            aud.play();
            document.getElementById(badHug[h]).className = "hug";
            playSounds = setTimeout(function() {
                if(reset == false){state = 37;}
                document.getElementById(badHug[h]).className = "";
            }, 2000);
            break;
        case 3:
            state = -1;
            var h = Math.floor((Math.random() * 4))
            aud.src = "assets/media/" + goodHugSound[h] + ".mp3";
            aud.load();
            aud.play();
            document.getElementById(goodHug[h]).className = "hug";
            playSounds = setTimeout(function() {
                if(reset == false){state = 37;}
                document.getElementById(goodHug[h]).className = "";
            }, 2000);
            break;
        case 4:
            bod.className = bod.className + " out";
            win();
            break;
    }
}

function fasterButton() {
    switch (game) {
        case 1:
            state = -1;
            if (faster > 3) faster = 0;
            aud.src = "assets/media/" + fast[faster] + ".mp3";
            faster = Math.floor((Math.random() * 3))
            aud.load();
            aud.play();
            direct = (direct == 'fasterL' ? 'fasterR' : 'fasterL');
            document.getElementById("faster").className = direct;
            setTimeout(function() {
                if(reset == false){state = 35;}
                document.getElementById("faster").className = "";
            }, 900);
            break;
        case 2:
            state = -1;
            var i = Math.floor((Math.random() * 2) + 1)
            var ic = i + 2;
            aud.src = "assets/media/" + fast[ic] + ".mp3";
            aud.load();
            aud.play();
            direct = (direct == 'fasterL' ? 'fasterR' : 'fasterL');
            document.getElementById(game_4_2[i - 1]).className = direct;
            setTimeout(function() {
                if(reset == false){state = 35;}
                document.getElementById(game_4_2[i - 1]).className = "";
            }, 1700);
            break;
        case 3:
            win();
            bod.className = bod.className + " out";
            break;
    }
}



function louderButton() {
    switch (game) {
        case 1:
            state = -1;
            louder = Math.floor((Math.random() * 3))
            aud.src = "assets/media/" + loud[louder] + ".mp3";
            aud.load();
            aud.play();
            direct = (direct == 'fasterL' ? 'fasterR' : 'fasterL');
            document.getElementById(loudMessage[louder]).className = direct;
            button_timeout = setTimeout(function() {
                 if(reset == false){state = 36;}
                document.getElementById(loudMessage[louder]).className = "";
            }, 1500);
            break;
        case 2:
            state = -1;
            aud.src = "assets/media/15.mp3";
            aud.load();
            aud.play();
            direct = (direct == 'fasterL' ? 'fasterR' : 'fasterL');
            document.getElementById("thatstooloud").className = direct;
            button_timeout = setTimeout(function() {
                 if(reset == false){state = 36;}
                document.getElementById("thatstooloud").className = "";
            }, 1600);
            break;
        case 3:
            win();
            bod.className = bod.className + " out";
            break;
    }
}


function dance() {
    switch (game) {
        case 1:
            state = -1;
            var i = Math.floor((Math.random() * 2)+1)
            var ic = i + 48;
            aud.src = "assets/media/" + ic+ ".mp3";
            aud.load();
            aud.play();
            direct = (direct == 'fasterL' ? 'fasterR' : 'fasterL');
            document.getElementById(game_1_7[i - 1]).className = direct;
            setTimeout(function() {
                if(reset == false){state = 45;}
                document.getElementById(game_1_7[i - 1]).className = "";
            }, 1300);12
            break;
        case 2:
            state = -1;
            var i = Math.floor((Math.random() * 3)+1)
            var ic = i + 48;
            aud.src = "assets/media/" + game_1_7_fs[i - 1]+ ".mp3";
            aud.load();
            aud.play();
            direct = (direct == 'fasterL' ? 'fasterR' : 'fasterL');
            document.getElementById(game_1_7_f[i - 1]).className = direct;
            setTimeout(function() {
                if(reset == false){state = 45;}
                document.getElementById(game_1_7_f[i - 1]).className = "";
            }, 1300);
            break;
        case 3:
            win();
            bod.className = bod.className + " out";
            break;
        }
    }


function said() {
    switch (game) {
        case 1:
            state = -1;
            var i = Math.floor((Math.random() * 2)+1)
            var ic = i + 48;
            aud.src = "assets/media/" + game_1_1s[i - 1]+ ".mp3";
            aud.load();
            aud.play();
            direct = (direct == 'fasterL' ? 'fasterR' : 'fasterL');
            document.getElementById(game_1_1[i - 1]).className = direct;
            setTimeout(function() {
                if(reset == false){state = 42;}
                document.getElementById(game_1_1[i - 1]).className = "";
            }, 1300);12
            break;
        case 2:
            state = -1;
            var i = Math.floor((Math.random() * 2)+1)
            var ic = i + 48;
            aud.src = "assets/media/" + game_1_1_fs[i - 1]+ ".mp3";
            aud.load();
            aud.play();
            direct = (direct == 'fasterL' ? 'fasterR' : 'fasterL');
            document.getElementById(game_1_1_f[i - 1]).className = direct;
            setTimeout(function() {
                if(reset == false){state = 42;}
                document.getElementById(game_1_1_f[i - 1]).className = "";
            }, 1300);
            break;
        case 3:
            win();
            bod.className = bod.className + " out";
            break;
        }
    }

function win() {
    state = 10;
    var i = Math.floor((Math.random() * 2) + 1)
    switch (i) {
        case 1:
            document.getElementById("amazing").className = "win";
            aud.src = "assets/media/20.mp3";
            break;
        case 2:
            document.getElementById("thatwasgreat").className = "win";
            aud.src = "assets/media/9.mp3";
            break;
        case 3:
            document.getElementById("thereyougo").className = "win";
            aud.src = "assets/media/18.mp3";
            break;
        case 4:
            document.getElementById("welldone").className = "win";
            aud.src = "assets/media/22.mp3";
            break;
        case 5:
            document.getElementById("Whooohoo").className = "win";
            aud.src = "assets/media/47.mp3";
            break;
        case 3:
            document.getElementById("youareamazing").className = "win";
            aud.src = "assets/media/52.mp3";
            break;

    }
    aud.load();
    aud.play();
    setTimeout(function() {

        var a = document.getElementsByClassName("win");
        var d;
        for (d = 0; d <= a.length - 1; d++) {
            a[d].className = "";
        }

        var e = document.getElementsByClassName("says");
        var c;
        for (c = 0; c <= e.length - 1; c++) {
            e[c].className = "";
        }
        bod.className = "screen_start";
        sn.className = "";
        state = 0;
        //console.clear();
        console.log("1 - Nutriday Says");
        console.log("2 - Give Nutriday a Hug");
        console.log("3 - Shout Nutriday");
        console.log("4 - Push the Button");
    }, 3000);
}
