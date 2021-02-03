var fcb=document.getElementsByClassName("facebook")[0];
var twt=document.getElementsByClassName("twitter")[0];
var istg=document.getElementsByClassName("instagram")[0];
fcb.addEventListener('click', function(){
    window.location.replace("http://www.facbook.com");
})
twt.addEventListener('click', function(){
    window.location.replace("http://www.twitter.com");
})
istg.addEventListener('click', function(){
    window.location.replace("http://www.instagram.com");
})