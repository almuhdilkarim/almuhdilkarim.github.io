// Fungsi memulai audio
function audiostart(data) {
    data.play();
    idn('audio-play').classList.add('hide')
    idn('audio-pause').classList.remove('hide')
    idn('audio-cover').classList.add('rotate')
}
// Fungsi pause audio
function audiopause(data) {
    data.pause();
    idn('audio-play').classList.remove('hide')
    idn('audio-pause').classList.add('hide')
    idn('audio-cover').classList.remove('rotate')
}
// Fungsi mematikan audio
function audiostop(data) {
    let b = idn('audio-source');
    b.pause();
    b.currentTime = 0;
    idn('audio-play').classList.remove('hide')
    idn('audio-pause').classList.add('hide')
    idn('audio-cover').classList.remove('rotate')
}

// Fungsi untuk menjalankan bar progress dan waktu progress
function bar(a) {
    let b = idn('progress');
    a.ontimeupdate = function () {
        b.value = a.currentTime
    }
    b.oninput = function () {
        a.currentTime = b.value
    }
    a.addEventListener('timeupdate', function () {
        let c  = parseInt(a.currentTime % 60)
        let d = parseInt((a.currentTime / 60) % 60)
        idn('start').innerHTML = d + ':' + c
    }, false)
}
// Fungsi untuk menghitung durasi
function durasi(b) {
    let a = idn('end');
    if (a.getAttribute('data-duration').length >= 1) {
        console.log('data duration is existed');
    } else {
        b.onloadedmetadata = function () {
            idn('progress').setAttribute('max', b.duration)
            var ds = parseInt(b.duration % 60)
            var dm = parseInt((b.duration / 60) % 60)
            a.innerHTML = dm + ':' + ds
        };
        console.log('data duration is loaded')
    }
}
// Fungsi utama
function audiocontrol() {
    let a = idn('audio-source');
    if (a.getAttribute('src').length <= 2 ) {
        a.src = idn('audio-content').getAttribute('data-audio-url');
        a.load();
    }
    durasi(a)
    let b = cln('aud-control');
    let c =  cln('aud-control').length
    for ( i = 0 ; i < c ; i++ ) {
        b[i].addEventListener('click', function() { 
            switch (this.getAttribute('id')) {
                case "audio-play":
                    audiostart(a);
                    bar(a);
                    a.onended = () => {
                        audiostop(a)
                    }
                    break;
                case "audio-pause":
                    audiopause(a)
                    break;
                case "audio-stop":
                    a.pause();
                    a.currentTime = 0;
                    break;
                case "audio-volume":
                    alert('vol')
                    break;
                case "exit":
                    alert('exit')
            }
        })
    }
} audiocontrol()

