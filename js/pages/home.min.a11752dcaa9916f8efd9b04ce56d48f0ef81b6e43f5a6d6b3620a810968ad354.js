const body=document.getElementsByTagName('BODY')[0];function sectionfilter(){let x=document.getElementsByClassName('section-filter');let y=document.getElementsByClassName('section-target');let item=document.getElementsByClassName('topic-item');for(let i=0;i<x.length;i++){x[i].addEventListener('click',function(){for(let i=0;i<x.length;i++){x[i].classList.remove('active');}
for(let i=0;i<y.length;i++){y[i].classList.remove('active');}
for(let i=0;i<item.length;i++){item[i].classList.remove('hide');}
document.getElementById(this.id).classList.add('active');let target=document.getElementById(this.id).getAttribute('data-target');document.getElementById(target).classList.add('active');},false);}}sectionfilter();function getday(){let hours=new Date().getHours();if(hours>=4&&hours<10){return 'morning';}else if(hours>=10&&hours<15){return 'day';}else if(hours>=15&&hours<18){return 'evening';}else if(hours>=18&&hours<22){return 'night';}else if(hours>=22||hours<4){return 'late';}else{console.log("something wrong on function : timenow");}}
function greeting(){let elem=document.getElementById("greeting-message");let tag=document.getElementById("greeting-tagline");let day=document.getElementById("greeting-time");if(getday()=='morning'&&elem!=null){elem.innerHTML="Selamat Pagi"
tag.innerHTML="Semoga Hari Mu Menyenangkan"
day.innerHTML="Pagi, Carikan Aku Sebuah .."}else if(getday()=='day'&&elem!=null){elem.innerHTML="Selamat Siang"
tag.innerHTML="Mungkin Kamu Butuh Secangkir Kopi"
day.innerHTML="Bantu Aku, Menemukan .."}else if(getday()=='evening'&&elem!=null){elem.innerHTML="Selamat Sore"
tag.innerHTML="Saatnya Untuk Sedikit Bersantai"
day.innerHTML="Mungkin Dengan Sebuah.."}else if(getday()=='night'&&elem!=null){elem.innerHTML="Selamat Malam"
tag.innerHTML="Senang Bisa Menenami Istirahat Mu"
day.innerHTML="Aku Sedang Mencari .."}else if(getday()=='late'&&elem!=null){elem.innerHTML="Semangat !"
tag.innerHTML="Begadang Bareng, Seru Pastinya"
day.innerHTML="Sepertinya Aku Membutuhkan .."}else{console.log("something wrong on function : greeting ");}}
greeting();function snapfilter(){let init=document.getElementsByClassName('filtering-context');for(let x=0;x<init.length;x++){init[x].addEventListener('click',function(){for(let i=0;i<init.length;i++){init[i].classList.remove('active');}
let target=document.getElementById(this.id).getAttribute('data-target');document.getElementById(target).classList.toggle('active')},false);}}
snapfilter();function topicfilter(){let init=document.getElementsByClassName('snap-items');for(let i=0;i<init.length;i++){init[i].addEventListener('click',function(){let parent=document.getElementById(this.id);let getcontent=parent.getAttribute('data-target');let item=document.getElementsByClassName('topic-item');let content=document.getElementsByClassName(getcontent);for(let i=0;i<init.length;i++){init[i].classList.remove('active');}
parent.classList.add('active');if(getcontent!=null){for(let i=0;i<item.length;i++){item[i].classList.add('hide');};for(let x=0;x<content.length;x++){content[x].classList.remove('hide');}}else{for(let i=0;i<item.length;i++){item[i].classList.remove('hide');};}},false);}}topicfilter();function randDarkColor(){var lum=-0.25;var hex=String('#'+Math.random().toString(16).slice(2,8).toUpperCase()).replace(/[^0-9a-f]/gi,'');if(hex.length<6){hex=hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];}
var rgb="#",c,i;for(i=0;i<3;i++){c=parseInt(hex.substr(i*2,2),16);c=Math.round(Math.min(Math.max(0,c+(c*lum)),255)).toString(16);rgb+=("00"+c).substr(c.length);}
return rgb;}
function taxsignal(){let title=document.getElementsByClassName('tax-title');for(let i=0;i<title.length;i++){let target=title[i].getAttribute('data-target');let gettitle=title[i].textContent;let abbrev=gettitle.charAt(0);document.getElementById(target).innerHTML=abbrev}
let color=document.getElementsByClassName('tax-signal');for(let i=0;i<color.length;i++){color[i].style.backgroundColor=randDarkColor();}}taxsignal();