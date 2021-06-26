var idn = (idname) => {
    return document.getElementById(idname)
}
var cln = (classname) => {
    return document.getElementsByClassName(classname)
} 

var dqs = (queryname) => {
    return document.querySelectorAll(queryname)
} 

// Main variable
const main       = idn('presentation')
const player     = idn('slide-player')
const slidemax = parseInt(player.getAttribute('data-slidemax'));
const slideaud  = player.getAttribute('data-slug');
const control    = idn('slide-control');
// Main target
const image      = idn('slide-image') ;
const audio       = idn('slide-audio') ;

function resetslide() {
    let a = window.location.href+'slide/slide-1.webp'
    let b =  'https://archive.org/download/'+slideaud+'/slide-1.mp3'
    player.setAttribute("data-slide", '1' ); 
    image.src= a;
    audio.src = b;
    audio.pause();
    audio.currentTime = 0;
}

function slidepause() {
    audio.pause();
    control.setAttribute("data-icon", "play");
}

function slideplay() {
    audio.play();
    control.setAttribute("data-icon", "pause");
}

function slidenext() {
    let a = player.getAttribute('data-slide');
    if ( a < slidemax) {
        let b = (parseInt(a)+1);
        player.setAttribute("data-slide", b ); 
        let c = window.location.href+'slide/slide-'+b+'.webp'
        let d = 'https://archive.org/download/'+slideaud+'/slide-'+b+'.mp3'
        image.src= c;
        audio.src = d;
        audio.load();
        audio.play();
    }
}

function slideprev() {
    let a = player.getAttribute('data-slide');
    if ( a > 1 ) {
        let b = (parseInt(a)-1)
        let c = window.location.href+'slide/slide-'+b+'.webp'
        let d = 'https://archive.org/download/'+slideaud+'/slide-'+b+'.mp3'
        player.setAttribute("data-slide", b ); 
        image.src= c;
        audio.src = d;
        audio.load();
        audio.play();
    } else {
        resetslide();
    }
}

function exitslide() {
    if ( screen.width < 960 ) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { 
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { 
            document.msExitFullscreen();
        }
        document.exitFullscreen();
        screen.orientation.unlock();
        image.setAttribute('style', '' )
    }
    body.setAttribute('data-fullscreen', 'false')
    main.setAttribute('data-player','');
    idn('slide-player').classList.remove('flex');
    resetslide();
}

// MAIN INIT
// Request Full Screen
if (player.requestFullscreen) {
    player.requestFullscreen();
} else if (player.webkitRequestFullscreen) { 
    player.webkitRequestFullscreen();
} else if (player.msRequestFullscreen) { 
    player.msRequestFullscreen();
}

// Action for mobile
if ( screen.width < 960 ) {
    screen.orientation.lock("landscape");
    let height = 'height:'+screen.width+'px';
    image.setAttribute('style', height );
}

// Set dom configuration
body.setAttribute('data-fullscreen', 'true');
idn('slide-player').classList.add('flex');
main.setAttribute('data-player','play');
audio.src = player.getAttribute('data-audio');
audio.load();
audio.play();

// Set function for player button
let actions = cln('action');
let actionl = actions.length;
for (var i = 0; i< actionl ; i++){
    actions[i].onclick = function() {
        switch (this.getAttribute('data-action')) {
            case "slide-prev":
                slideprev()
                break;
            case "slide-next":
                slidenext()
                break;
            case "slide-pause":
                slidepause()
                break;
            case "slide-play":
                slideplay()
                break;
            case "slide-exit":
                exitslide()
        }
    }
}