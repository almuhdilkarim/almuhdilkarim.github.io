function timenow()
{let date=new Date();let now=date.getHours();if(now>=4&&now<10){return 'pagi';}else if(now>=10&&now<15){return 'siang';}else if(now>=15&&now<18){return 'sore';}else if(now>=18&&now<22){return 'malam';}else if(now>=22||now<4){return 'rest';}else{alert("kacau");}}
function daytime()
{let waktu=timenow();if(waktu=='pagi'||waktu=='siang'){return 'siang';}else{return 'malam';}}
function darkMode(){let btn=document.getElementById('btn-dark');btn.addEventListener('click',function(){document.querySelector(".theme-mod").classList.toggle('dark');},false);}darkMode();function removeCheck()
{if(window.screen.width<=800){let checkBox=document.getElementsByClassName("accordion");for(let i=0;i<checkBox.length;i++){checkBox[i].removeAttribute("open");}}}removeCheck();function navmenu()
{let body=document.getElementsByTagName("BODY")[0];if(body.classList.contains('nav--open')){body.classList.remove("nav--open");}else{body.classList.add("nav--open");}}
function navamenuinit()
{let openmenu=document.getElementsByClassName('openmenu');for(let i=0;i<openmenu.length;i++){openmenu[i].addEventListener('click',navmenu,false);}}navamenuinit();function initNavscroll()
{window.onscroll=function(){let body=document.getElementsByTagName("BODY")[0];let sticky=body.offsetTop;if(window.pageYOffset>sticky){body.classList.add("nav-sticky");}else{body.classList.remove("nav-sticky");}};}initNavscroll();