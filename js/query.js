$(document).ready(function() {
    var cursor = new Audio("sound/ff-cursor1.aiff");
    var select = new Audio("sound/ff-select1.aiff");

    setTimeout(function () {
        $("<audio></audio>").attr({
        'src':'sound/ff-main.mp3',
        'volume':0.2,
        'loop':'loop',
        'autoplay':'autoplay'}).appendTo("body"); 
         },800);
    
    setTimeout(function(){
        $('.title').addClass('fadeIn');
        },1000);
    setTimeout(function(){
        $('.subtitle').addClass('fadeInUp');
        },2500);
    setTimeout(function () {
    $('.button').addClass('fadeIn');
        
    $("button").mouseenter(function(){
        cursor.play();
    }); 
   
    $("button").click(function(){
        select.play();
    }); 
        },4500);
    
     $('.button-left').on('click',function(){
         $('.left').addClass('fadeIn');
         });
    $('.button-right').on('click',function(){
         $('.right').addClass('fadeIn');
     }); 
    
   
});