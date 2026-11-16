function toggleMenu(){document.getElementById('nav').classList.toggle('show')}
var f=document.getElementById('msgForm');
if(f){f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('sent').classList.add('show');f.reset()})}
