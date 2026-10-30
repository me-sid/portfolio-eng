(function(){
var btn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav nav');
if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}})}
var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
var t=document.querySelector('.to-top');
if(t){window.addEventListener('scroll',function(){t.hidden=window.scrollY<600},{passive:true});
t.addEventListener('click',function(){window.scrollTo({top:0})})}
})();
