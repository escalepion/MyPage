$(document).ready(function(){

$(".thumbnail").mouseenter(function(){
    $(this).fadeTo(0,1);
    $(this).effect("bounce", 100);
    $(this).parent().siblings().find(".thumbnail").fadeTo("fast",0.3);
});
$(".team-thumbnails").mouseleave(function(){
    $(this).find(".thumbnail").fadeTo("fast",1);
});





});