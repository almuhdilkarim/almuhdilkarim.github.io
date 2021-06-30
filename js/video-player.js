function elemconstruct() {
    let a = idn('video-content');
    let b = document.querySelector('#video-player-container');
    let c = document.querySelector('#youtube-iframe');
    if ( b === null) {
        let bel = document.createElement('div')
        bel.setAttribute('id', 'video-player-container')
        a.appendChild(bel);
    }
    if ( c === null) {
        let h = ( 56.25 / 100 ) * screen.width;
        let bel = document.createElement('iframe')
        bel.setAttribute('id', 'youtube-iframe')
        bel.setAttribute('title', 'Video Format For Article')
        bel.setAttribute('width', '100%')
        bel.setAttribute('height', h)
        bel.src = a.getAttribute('data-youtube-url')
        bel.setAttribute('frameborder', '0')
        bel.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
        bel.setAttribute('allowFullScreen', '')
        a.appendChild(bel);
    }
    
}elemconstruct();
