$(document.body).hide().fadeIn(1800);
$("#title").hide().slideDown();
$('.btn').on('click', startGame);


function startGame(){
  var numValue = $(this).attr("value");
    $('#numbers').remove();
    caucusRace(numValue);
}

function caucusRace(value){
  // var array = [5,-400,7,1,-6,2,0,1,-8,6,-7,5,8,-5,3,4,-4,-6,3];
  var array = randomArray();
  var score = 0;
  for (var i = value-1; i < array.length; i++) {
    score += array[i];
  }

  var winStarts = [];
  var tmp = 0;
  for (var j = 0; j < array.length; j++) {
    for (var k = j; k < array.length; k++) {
      tmp += array[k];
    }
      if (tmp > 0) {
        winStarts.push(j+1);
      }
      tmp = 0;
  }

   var winpositions = winStarts.toString();

  if(score > 0){
    $(document.body).addClass("bg-success").hide().fadeIn(300);
    $('<div></div>').html('<div class="row col-xs-10 col-xs-offset-1"><h1 id="win">W I N</h1></div><div class="row col-xs-5 col-xs-offset-4"><h3>Winners: '+ winStarts +'</h3></div><div class="row col-xs-4 col-xs-offset-5"><a href="index.html"><h3>Start new game ?</h3></a></div>').appendTo(".result").hide().fadeIn(500);


  }else {
    $(document.body).addClass("bg-danger").hide().fadeIn(300);
    $("#title").addClass("gameover");
    $('<div class="row"></div>').html('<div class="col-xs-7 col-xs-offset-3"><h1 class="gameover" id="gover">GAME OVER</h1></div><div class="row col-xs-5 col-xs-offset-4"><h3 class="gameover">Winners: '+ winStarts +'</h3></div><div class="row col-xs-4 col-xs-offset-5"><a href="index.html"><h3 class="gameover">Start new game ?</h3></a></div>').appendTo(".result").hide().fadeIn(500);
  }
  console.log(array);
}


function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function randomArray(){
  var arr = []
  for (var i = 0; i < 19; i++) {
    arr.push(randomIntFromInterval(-9999, 9999));
  }
  for (var i = 0; i < 10000; i++) {
    shuffle(arr);
  }
  return arr;
}
