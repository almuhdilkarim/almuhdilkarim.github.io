// Fungsi memulai audio
function audiostart(a, e, f, g) {
    a.play();
    e.classList.add('hide')
    f.classList.remove('hide')
    g.classList.add('rotate')
}
// Fungsi pause audio
function audiopause(a, e, f, g) {
    a.pause();
    e.classList.remove('hide')
    f.classList.add('hide')
    g.classList.remove('rotate')
}
// Fungsi mematikan audio
function audiostop(a, e, f, g) {
    a.pause();
    a.currentTime = 0;
    e.classList.remove('hide')
    f.classList.add('hide')
    g.classList.remove('rotate')
}

// Fungsi untuk menjalankan bar progress dan waktu progress
function bar(a, b, c) {
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
// Fungsi utama
function audiocontrol() {
    let a = idn('audio-source');
    let b = idn('audio-seekbar');
    let c = dqs('.audio-current');
    let d = idn('audio-duration');
    let e = idn('audio-play')
    let f  = idn('audio-pause')
    let g = idn('audio-cover')

    durasi(a, b, d)

    let h = cln('aud-control');
    let j =  cln('aud-control').length
    for ( i = 0 ; i < j ; i++ ) {
        h[i].addEventListener('click', function() { 
            switch (this.getAttribute('id')) {
                case "audio-play":
                    audiostart(a, e, f, g);
                    bar(a, b, c);
                    a.onended = () => {
                        audiostop(a)
                    }
                    break;
                case "audio-pause":
                    audiopause(a, e, f, g)
                    break;
                case "audio-stop":
                    a.audiostop(a);
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
