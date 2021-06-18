function id($val) {
    return document.getElementById($val)
}

function cls($val) {
    return document.getElementsByClassName($val)
}

// Main variable
let player = id('presentation')
let slidemax = parseInt(player.getAttribute('data-slidemax'));
let slideaud = player.getAttribute('data-slug');
let control = id('slide-control');
// Main target
let image = id('slide-image') ;
let audio  = id('slide-audio') ;


function audiostart() {
    audio.load();
    audio.play();
}

function resetslide() {
    let imageUrl   = window.location.href+'slide/slide-1.jpg'
    let audioUrl    =  'https://archive.org/download/'+slideaud+'/slide-1.mp3'
    player.setAttribute("data-slide", '1' ); 
    image.src= imageUrl;
    audio.src = audioUrl;
    audio.pause();
    audio.currentTime = 0;
}

function slideopen() {
   
    if ( screen.width < 960 ) {
        player.requestFullscreen();
        screen.orientation.lock("landscape-primary");
        let width = 'max-width:'+screen.height+'px; max-height:'+screen.width'px';
        player.setAttribute('style', width )
    }
    player.setAttribute('data-player','play');
    id('player').classList.add('flex');
    audio.src = player.getAttribute('data-audio');
    audiostart()
}

function slideclose() {
    if ( screen.width < 960 ) {
        document.exitFullscreen();
        image.setAttribute('style', '' )
        screen.orientation.lock("portrait-primary");
    }
    resetslide();
    player.setAttribute('data-player','');
    id('player').classList.remove('flex');
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
    let slidepos = player.getAttribute('data-slide');
    if ( slidepos < slidemax) {
        let updatePos = (parseInt(slidepos)+1);
        player.setAttribute("data-slide", updatePos ); 
        let imageUrl   = window.location.href+'slide/slide-'+updatePos+'.jpg'
        let audioUrl    = 'https://archive.org/download/'+slideaud+'/slide-'+updatePos+'.mp3'
        image.src= imageUrl;
        audio.src = audioUrl;
        audiostart() ;
    }
}

function slideprev() {
    let slidepos = player.getAttribute('data-slide');
    if ( slidepos > 1 ) {
        let updatePos = (parseInt(slidepos)-1)
        let imageUrl   = window.location.href+'slide/slide-'+updatePos+'.jpg'
        let audioUrl    = 'https://archive.org/download/'+slideaud+'/slide-'+updatePos+'.mp3'
        player.setAttribute("data-slide", updatePos ); 
        image.src= imageUrl;
        audio.src = audioUrl;
        audiostart() ;
    } else {
        resetslide();
    }
}

audio.onended = function() {
    slidenext()
};

let slideaction = cls('action');
for (var i = 0; i<slideaction.length; i++){
    slideaction[i].onclick = function() {
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
            case "slide-open":
                slideopen()
                break;
            case "slide-exit":
                slideclose()
        }
    };
}


