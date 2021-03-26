const body=document.getElementsByTagName('BODY')[0];function id($val){return document.getElementById($val);}
function cl($val){return document.getElementsByClassName($val);}
function cardDrop(){for(let x=0;x<cl('action-drop').length;x++){cl('action-drop')[x].addEventListener('click',event=>{let target=cl('action-drop')[x].getAttribute('data-dropdown');id(target+"-dropdown").classList.toggle('hide');cl('action-drop')[x].classList.toggle('close');})}}
function closeFilterBox(){id('toc-box').style.display="none";id('table-of-content').style.height="auto"
body.style.overflow="unset";}
function openFilter(){id('open-categories').addEventListener('click',event=>{if(id('toc-box').style.display=="block"){id('toc-box').style.display="none";id('table-of-content').style.height="auto"}else{id('toc-box').style.display="block";body.style.overflow="hidden";id('table-of-content').style.height="-webkit-fill-available"}});id('table-of-content').addEventListener('click',event=>{closeFilterBox();})}
function hideAllCard(){for(let x=0;x<cl('dropdown').length;x++){cl('dropdown')[x].classList.add('hide');}}
function showAllCard(){for(let x=0;x<cl('dropdown').length;x++){cl('dropdown')[x].classList.remove('hide');}}
function cardBtnHide(){for(let x=0;x<cl('card-act').length;x++){cl('card-act')[x].classList.add('hide');}}
function cardBtnShow(){for(let x=0;x<cl('card-act').length;x++){cl('card-act')[x].classList.remove('hide');}}
function filterCat(){for(let x=0;x<cl('sidebar-filter').length;x++){cl('sidebar-filter')[x].addEventListener('click',event=>{closeFilterBox();let target=cl('sidebar-filter')[x].getAttribute('data-show');if(target=='all'){showAllCard();cardBtnShow();}else{hideAllCard();cardBtnHide();id(target).classList.remove('hide');}})}}
if(screen.width<960){openFilter();filterCat();cardDrop();}