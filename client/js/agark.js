var min = 1,
    max = 227,
    randomnumber, skinName, currentNick;

function akoSv(sV) {
    switch (sV) {
        case 'main':
            ako('58.236.168.89:443');
            break;
        case 'instant':
            ako('58.236.168.89:60004');
            break;
    }
}

function Status() {
    $['getJSON']('http://' + GameServer_MainIP + ':443/', function() {
        $('#ffa1')['text']('정상'), $('#ffaSv1')
    })['fail'](function() {
        $('#ffa1')['text']('비정상'), $('#ffaSv1')
    }), $['getJSON']('http://' + GameServer_MainIP + ':443/', function() {
        $('#instant')['text']('정상'), $('#instantSv1')
    })['fail'](function() {
        $('#instant')['text']('비정상'), $('#instantSv1')
    }), $['getJSON']('http://' + GameServer_MainIP + ':90/', function() {
        $('#special')['text']('정상'), $('#specialSv1')
    })['fail'](function() {
        $('#special')['text']('비정상'), $('#specialSv1')
    }), $['getJSON']('http://' + GameServer_MainIP + ':91/', function() {
        $('#test')['text']('정상'), $('#specialSv1')
    })['fail'](function() {
        $('#test')['text']('비정상'), $('#specialSv1')
    })
}

function randomSkin() {
    return randomnumber = Math['floor'](Math['random']() * (max - min + 1)) + min, skinName = '[' + randomnumber + ']', console['log'](skinName), currentNick = $('#nick')['val']() + ' ', $('#nick')['val'](currentNick + skinName), !1
}

// ==UserScript==
// @name         13 macro's for Agar.io :)
// @version      0.3
// @description  13 macro's for feeding, linesplits, tricksplits, etc. And enables show mass and skip stats by default :)
// @author       NatsuTheGreat, edited by Megabyte918
// @match        http://agar.io/*
// @match        http://old.ogarul.io/*
// ==/UserScript==
window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
document.getElementById("nick").maxLength = "100";

//List instructions
var i = document.getElementById("instructions");
i.innerHTML += "<center>Press & hold <b>W</b> for macro feed</center>";
i.innerHTML += "<center>Press <b>E</b>, <b>T</b>, or <b>4</b> to split 4x</center>";
i.innerHTML += "<center>Press <b>A</b> or <b>3</b> to split 3x</center>";
i.innerHTML += "<center>Press <b>D</b> or <b>2</b> to split 2x</center>";
i.innerHTML += "<center>Press <b>S</b> or <b>1</b> to split 1x</center>";
i.innerHTML += "<center>Press <b>H</b> for horizontal linesplit position</center>";
i.innerHTML += "<center>Press <b>V</b> for vertical linesplit position</center>";

//Auto-enable show mass/skip stats
//IMPORTANT: You must uncheck showmass/skip stats first then recheck them for it to auto save every time
function autoSet() {
    var m = document.getElementById('showMass'),
        s = document.getElementById('skipStats');
    if (document.getElementById("overlays").style.display != "none") {
        document.getElementById("settings").style.display = "block";
        if (m.checked) { m.click(); }
        m.click(); //Show mass
        if (s.checked) { s.click(); }
        s.click(); //Skip stats
    } else setTimeout(autoSet, 100);
}

//Load macros
var canFeed = false;

function keydown(event) {
    switch (event.keyCode) {

        case 84: //Tricksplit Macro (t)
            var t = 35;
            for (var t2 = 0; t2 < 4; t2++) {
                setTimeout(split, t);
                t *= 2;
            }
            break;
        case 69: //Tricksplit Macro (e)
            canFeed = true;
            feed();
            setTimeout(split, e);
            e *= 2;
            break;

        case 52: //Tricksplit Macro (4)
            var four = 35;
            for (var four2 = 0; four2 < 4; four2++) {
                setTimeout(split, four);
                four *= 2;
            }
            break;
        case 65: //Triplesplit Macro (a)
            var a = 35;
            for (var a2 = 0; a2 < 3; a2++) {
                setTimeout(split, a);
                a *= 2;
            }
            break;
        case 51: //Triplesplit Macro (3)
            var three = 35;
            for (var three2 = 0; three2 < 3; three2++) {
                setTimeout(split, three);
                three *= 2;
            }
            break;
        case 68: //Doublesplit Macro (d)
            split();
            setTimeout(split, 50);
            break;
        case 50: //Doublesplit Macro (2)
            split();
            setTimeout(split, 50);
            break;
        case 83: //Space Macro (s)
            split();
            break;
        case 49: //Space Macro (1)
            split();
            break;
        case 72: //Horizontal linesplit (h)
            X = window.innerWidth / 2;
            Y = window.innerHeight / 2;
            $("canvas").trigger($.Event("mousemove", { clientX: X, clientY: Y }));
            break;
        case 86: //Vertical linesplit (v)
            X = window.innerWidth / 2;
            Y = window.innerHeight / 2.006;
            $("canvas").trigger($.Event("mousemove", { clientX: X, clientY: Y }));
            break;
    }
}

//When a player lets go of W stop feeding
function keyup(event) {
    if (event.keyCode == 69)
        canFeed = false;
}

//Alias for W key
function feed() {
    if (canFeed) {
        window.onkeydown({ keyCode: 87 });
        window.onkeyup({ keyCode: 87 });
        setTimeout(feed, 0);
    }
}

//Alias for space
function split() {
    $("body").trigger($.Event("keydown", { keyCode: 32 }));
    $("body").trigger($.Event("keyup", { keyCode: 32 }));
}