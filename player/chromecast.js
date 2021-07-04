function initcastscript() {
    let xel = document.createElement('script')
    xel.src = 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js'
    xel.setAttribute('id', 'video-cast-script')
    document.body.appendChild(xel);
} initcastscript()
  
let initializeCastApi = function() {
    console.log('initializeCastApi');
    var sessionRequest = new chrome.cast.SessionRequest(
    chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
    var apiConfig = new chrome.cast.ApiConfig(
    sessionRequest, sessionListener, receiverListener);
    chrome.cast.initialize(apiConfig, onInitSuccess, onError);
};

if (!chrome.cast || !chrome.cast.isAvailable) {
    setTimeout(initializeCastApi, 1000);
}

function onInitSuccess() {
    console.log('onInitSuccess');
}

function onError(e) {
console.log('onError', e);
}

function sessionListener(e) {
    console.log('sessionListener', e);
}

function receiverListener(availability) {
    console.log('receiverListener', availability);
    if( availability === chrome.cast.ReceiverAvailability.AVAILABLE ) {
        idn("startcast").innerHTML = "Start Cast";
        idn("startcast").removeAttribute('disabled') ;
    }
}

function onSessionRequestSuccess(session) {
    let videourl =  idn('video-source').src
    console.log('onSessionRequestSuccess', session);
    var mediaInfo = new chrome.cast.media.MediaInfo(
        videourl,
    "video/mp4");
    var request = new chrome.cast.media.LoadRequest(mediaInfo);
    session.loadMedia(request, onMediaLoadSuccess, onError );
}

function onMediaLoadSuccess(e) {
console.log('onMediaLoadSuccess', e);
}

idn("startcast").addEventListener( 'click', function() {
    chrome.cast.requestSession(onSessionRequestSuccess, onError);
});

  