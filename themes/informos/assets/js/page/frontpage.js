function greeting() 
{
    let now = timenow();
    let elm = document.getElementById("welcome-message");
    if ( now == 'pagi' ) {
        elm.innerHTML = "Pagi Guys ...<br> Yuk Mulai Beraktivitas";
    } else if ( now == 'siang' ) {
        elm.innerHTML = "Siang Guys ...<br> Tetap Fokus Jangan Kendor     ";

    } else if ( now == 'sore' ){
        elm.innerHTML = "Sore Guys ...<br> Jangan Lupa Bersantai";

    } else if ( now == 'malam' ){
        elm.innerHTML = "Malam Guys ..<br> Rebahan Dulu Nunggu Ngantuk";

    } else if ( now == 'rest' ){
        elm.innerHTML = "Kamu g tidur ?";
    } else {
        elm.innerHTML = "Selamat Datang";
    }
}
greeting();
