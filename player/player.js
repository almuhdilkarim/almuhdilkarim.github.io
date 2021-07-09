// Fungsi memulai audio
function playerstart(a, e, f, g, x) {
    a.play();
    e.classList.add('act-target')
    f.classList.remove('act-target')
    if ( x ===  'audio') {
        g.classList.add('rotate')
    }
}
// Fungsi pause audio
function playerpause(a, e, f, g, x) {
    a.pause();
    e.classList.remove('act-target')
    f.classList.add('act-target')
    if ( x ===  'audio') {
        g.classList.remove('rotate')
    }
}
// Fungsi mematikan audio
function playerstop(a, e, f, g) {
    a.pause();
    a.currentTime = 0;
    e.classList.remove('hide')
    f.classList.add('hide');
    if ( x ===  'audio') {
        g.classList.remove('rotate')
    }
}

// Fungsi untuk menjalankan bar progress dan waktu progress
function progress(a, b, c) {
    a.ontimeupdate = function () {
        b.value = a.currentTime
    }
    b.oninput = function () {
        a.currentTime = b.value
    }
    a.addEventListener('timeupdate', function () {
        let d = parseInt(a.currentTime % 60)
        let e = parseInt((a.currentTime / 60) % 60)
        c.innerHTML = e + ':' + d
    }, false)
}
// Fungsi untuk menghitung durasi
function durasi(a, b, d) {
    if (d.getAttribute('data-duration').length >= 1) {
        console.log('data duration is existed');
    } else {
        a.onloadedmetadata = function () {
            b.setAttribute('max', b.duration)
            var ds = parseInt(a.duration % 60)
            var dm = parseInt((a.duration / 60) % 60)
            d.innerHTML = dm + ':' + ds
        };
        console.log('data duration is loaded')
    }
}

// CHROMECAST FUNCTIONS

function initcastscript() {
    let xel = document.createElement('script')
    xel.src = 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js'
    xel.setAttribute('id', 'video-cast-script')
    document.body.appendChild(xel);
} initcastscript()

function  initcast() {
    console.log('initcast');
    var sessionRequest = new chrome.cast.SessionRequest(
    chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
    var apiConfig = new chrome.cast.ApiConfig(
    sessionRequest, castsessionlisten, castlistener);
    chrome.cast.initialize(apiConfig, castinitok, errorbos);
} 

if (!chrome.cast || !chrome.cast.isAvailable) {
    setTimeout(initcast, 1000);
}

function castinitok() {
    console.log('castinitok');
}

function errorbos(e) {
    console.log('errorbos', e);
}

function castsessionlisten(e) {
    console.log('castsessionlisten', e);
}

function castlistener(availability) {
    console.log('castlistener', availability);
    if( availability === chrome.cast.ReceiverAvailability.AVAILABLE ) {
        idn('video-chromecast').removeAttribute('disabled') ;
        idn('cast-status').innerHTML = 'Start Cast' ;
    } 
}

function castsessionok(session) {
    let videourl =  idn('video-source').src
    console.log('castsessionok', session);
    var mediaInfo = new chrome.cast.media.MediaInfo(
        videourl,
    "video/mp4");
    var request = new chrome.cast.media.LoadRequest(mediaInfo);
    session.loadMedia(request, castmediaload, errorbos );
}

function castmediaload(e) {
    console.log('castmediaload', e);
}

// Fungsi utama
function initplayer() {
    let g = dqs('video-source')
    let h = cln('player-control');
    let j =  cln('player-control').length
    
    if ( g !== null ) {
        let a = idn('video-source');
        let b =  document.querySelector('.post');
        let c = ( 56.25 / 100 ) * b.offsetWidth;
        a.setAttribute('height', c );
    }

    for ( i = 0 ; i < j ; i++ ) {
        h[i].addEventListener('click', function() { 
            
            let z = this.getAttribute('id')
            let y= z.match(/video/g)
            if ( y !== null ){
                var obj = () => { return 'video'; }
            } else {
                var obj = () => { return 'audio'; }
            }

            let x = obj();
            let a = idn( x+'-source');
            let b = idn( x+'-seekbar');
            let c = idn( x+'-current');
            let d = idn( x+'-duration');
            let e = idn( x+'-play')
            let f  = idn( x+'-pause')
            let g = idn( x+'-cover')
            let h = idn( x+'-mute')

            durasi(a, b, d);
            switch (z) {
                case x+"-play":
                    playerstart(a, e, f, g, x);
                    progress(a, b, c);
                    a.onended = () => {
                        playerstop(a, e, f, g, x)
                    }
                    break;
                case x+"-pause":
                    playerpause(a, e, f, g, x)
                    break;
                case x+"-stop":
                    a.playerstop(a, e, f, g, x);
                    break;
                case x+"-volume":
                    this.classList.toggle('muted')
                    if (a.muted === true) {
                        a.muted = false;
                        h.classList.add('fa-volume-up')
                        h.classList.remove('fa-volume-mute')
                        
                    }
                      else if (a.muted === false) {
                        a.muted = true;
                        h.classList.remove('fa-volume-up')
                        h.classList.add('fa-volume-mute')
                    }
                    break;
                case x+"-fullscreen":
                    fs(a)
                    break;
                case x+"-chromecast":
                    chrome.cast.requestSession(castsessionok, errorbos);
                    break;
                default:
                    alert('exit')
            }
        }, false)
    }
} initplayer()

// Class mutation detections
function classmutation(id) {
    let ax = idn(id);
    let pvc = ax.classList.contains('active');
    let obs = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if(mutation.attributeName == "class"){
                let cmut = mutation.target.classList.contains('active');
                if(pvc !== cmut)    {
                    pvc = cmut;
                    if ( id === 'audio-btn' ) {
                        let a = idn( 'audio-source');
                        let e = idn( 'audio-play')
                        let f  = idn('audio-pause')
                        let g = idn( 'audio-cover')
                        let x = "audio"
                        playerpause(a, e, f, g, x)
                    }
                    if ( id === 'audio-btn' ) {
                        let a = idn( 'video-source');
                        let e = idn( 'video-play')
                        let f  = idn( 'video-pause')
                        playerpause(a, e, f, )
                    }
                }
            }
        });
    });
    obs.observe(ax, {attributes: true});
}
classmutation('audio-btn');
classmutation('video-btn');