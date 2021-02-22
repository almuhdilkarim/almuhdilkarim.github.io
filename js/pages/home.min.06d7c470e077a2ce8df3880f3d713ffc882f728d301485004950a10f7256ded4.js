const body=document.getElementsByTagName('BODY')[0];function id($val){return document.getElementById($val);}
function cl($val){return document.getElementsByClassName($val);}
function getday(){let hours=new Date().getHours();if(hours>=4&&hours<10){return 'morning';}else if(hours>=10&&hours<15){return 'day';}else if(hours>=15&&hours<18){return 'evening';}else if(hours>=18&&hours<22){return 'night';}else if(hours>=22||hours<4){return 'late';}else{console.log("something wrong on function : timenow");}}
function greeting(){let elem=document.getElementById("greeting-message");let tag=document.getElementById("greeting-tagline");if(getday()=='morning'&&elem!=null){elem.innerHTML="Selamat Pagi"
tag.innerHTML="Semoga Hari Mu Menyenangkan"}else if(getday()=='day'&&elem!=null){elem.innerHTML="Selamat Siang"
tag.innerHTML="Mungkin Kamu Butuh Secangkir Kopi"}else if(getday()=='evening'&&elem!=null){elem.innerHTML="Selamat Sore"
tag.innerHTML="Saatnya Untuk Sedikit Bersantai"}else if(getday()=='night'&&elem!=null){elem.innerHTML="Selamat Malam"
tag.innerHTML="Senang Bisa Menenami Istirahat Mu"}else if(getday()=='late'&&elem!=null){elem.innerHTML="Semangat !"
tag.innerHTML="Begadang Bareng, Seru Pastinya"}else{console.log("something wrong on function : greeting ");}}
greeting();id('open-filter').addEventListener('click',event=>{if(id('filtering').classList.contains('show')){id('filtering').classList.remove('show');id('top-panel').classList.remove('active');}else{id('filtering').classList.add('show');id('top-panel').classList.add('active');}})
for(let x=0;x<cl('btn-module').length;x++){cl('btn-module')[x].addEventListener('click',event=>{for(let i=0;i<cl('btn-module').length;i++){cl('btn-module')[i].classList.remove('active');}
for(let i=0;i<cl('section-target').length;i++){cl('section-target')[i].classList.remove('active');}
for(let i=0;i<cl('cat').length;i++){cl('cat')[i].classList.remove('show');}
for(let i=0;i<cl('topic-item').length;i++){cl('topic-item')[i].classList.remove('hide');}
id('top-panel').classList.remove('active');id('filtering').classList.remove('show');id(cl('btn-module')[x].getAttribute('data-target')).classList.add('active');id(cl('btn-module')[x].getAttribute('data-cat')).classList.add('show');id(cl('btn-module')[x].getAttribute('id')).classList.add('active');})}
for(let y=0;y<cl('opt-filter').length;y++){cl('opt-filter')[y].addEventListener('click',event=>{for(let i=0;i<cl('opt-filter').length;i++){cl('opt-filter')[i].classList.remove('active');}
id(cl('opt-filter')[y].getAttribute('id')).classList.add('active');let content=cl('opt-filter')[y].getAttribute('data-target');if(content!=null){for(let i=0;i<cl('item-act').length;i++){cl('item-act')[i].classList.add('hide');};for(let x=0;x<cl(content).length;x++){cl(content)[x].classList.remove('hide');}}else{for(let i=0;i<cl('item-act').length;i++){cl('item-act')[i].classList.remove('hide');};}})}
function randDarkColor(){var lum=-0.25;var hex=String('#'+Math.random().toString(16).slice(2,8).toUpperCase()).replace(/[^0-9a-f]/gi,'');if(hex.length<6){hex=hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];}
var rgb="#",c,i;for(i=0;i<3;i++){c=parseInt(hex.substr(i*2,2),16);c=Math.round(Math.min(Math.max(0,c+(c*lum)),255)).toString(16);rgb+=("00"+c).substr(c.length);}
return rgb;}
function taxsignal(){let title=document.getElementsByClassName('tax-title');for(let i=0;i<title.length;i++){let target=title[i].getAttribute('data-target');let gettitle=title[i].textContent;let abbrev=gettitle.charAt(0);document.getElementById(target).innerHTML=abbrev}
let color=document.getElementsByClassName('tax-signal');for(let i=0;i<color.length;i++){color[i].style.backgroundColor=randDarkColor();}}taxsignal();