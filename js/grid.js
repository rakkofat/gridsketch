$(document).ready(function() {
  makeGrid(16);

});

function makeGrid(x) {
  var psize = (960/x) - 2;

  if($(".square")[0]) {
    $(".square").remove();
  }

  for (i=0; i<x*x; i++) {
    $(".container").append("<div class='square'></div>");

  }
  $(".square").width(psize);
  $(".square").height(psize);

  sketch();

}

function sketch(){
  var colors = ['#FF0000','#FF7F00','#FFFF00','#00FF00','#0000FF','#4B0082','#8b00FF']
  $(".square").on('mouseenter', function(){
    /*var new_color = Math.round(Math.random()*6);*/
    var new_color = Math.floor(Math.random()*7);
    $(this).css("background-color", colors[new_color]);
  });
}

function newGrid() {
  var size = 200;
  while (size < 1 || size > 128) {
    size = prompt("Enter a size between 1 - 128: ");
  }
  makeGrid(size);
}

function resetGrid(){
  $(".square").css("background-color", "white");
}
