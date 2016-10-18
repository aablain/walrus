$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").toggle();
    $("#initially-showing").toggle();

    var width =1000;
    var height=400;
    var randWidth= width + (Math.floor(Math.random()*500));
    var randHeight= height + (Math.floor(Math.random()*200));
    var path="http://www.placekitten.com/"+randWidth+"/"+randHeight;
    $("#my_image").attr("src",path);

  });
});
