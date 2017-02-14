$(document).ready(function(){
  $(".clickable").click(function(){
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
        });
  $(".info").click(function(){
    $(".info-showing").toggle();
    $(".info-hidden").toggle();
        });
  $(".image").click(function(){
    $(".image-showing").toggle();
    $(".image-hidden").toggle();
        });

});
