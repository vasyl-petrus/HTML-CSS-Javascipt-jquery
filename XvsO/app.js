var step = 0;
var draw = 0;
var scoreX = 0;
var scoreO = 0;
var checked = true;
var blocks = $(".block");

$(document ).ready(function (){
    noneBorder();
});
$("#single").click(function (){
  clear();
  $(".dropbtn").text("Single Game")
  checked = true;
});
$("#1vs1").click(function (){
  clear();
  $(".dropbtn").text("1vs1 Game")
  checked = false;
});
$(".gameField").click(function (event){
  if(event.target.innerHTML!='x'&& event.target.innerHTML!='o'){
  if (checked===true) {
      event.target.innerHTML="x";
      check();
      bot();}
    else {
        if(step % 2===0){
          event.target.innerHTML="x";
        }else{
          event.target.innerHTML="o";
        }
        step++;
        setTimeout(function () {
          check();
        }, 10);
      }
    }
});
function check(){
  if (
		blocks[0].innerHTML=='x' && blocks[1].innerHTML=='x' && blocks[2].innerHTML=='x'||
        blocks[3].innerHTML=='x' && blocks[4].innerHTML=='x' && blocks[5].innerHTML=='x'||
        blocks[6].innerHTML=='x' && blocks[7].innerHTML=='x' && blocks[8].innerHTML=='x'||
        blocks[0].innerHTML=='x' && blocks[3].innerHTML=='x' && blocks[6].innerHTML=='x'||
        blocks[1].innerHTML=='x' && blocks[4].innerHTML=='x' && blocks[7].innerHTML=='x'||
        blocks[2].innerHTML=='x' && blocks[5].innerHTML=='x' && blocks[8].innerHTML=='x'||
        blocks[0].innerHTML=='x' && blocks[4].innerHTML=='x' && blocks[8].innerHTML=='x'||
        blocks[2].innerHTML=='x' && blocks[4].innerHTML=='x' && blocks[6].innerHTML=='x'){
          setTimeout(function () {
            alert('WON X');
            scoreX++;
            $("#x").text(scoreX);
            clear();
          }, 50);
			return;
        }
    if (
		blocks[0].innerHTML=='o' && blocks[1].innerHTML=='o' && blocks[2].innerHTML=='o'||
        blocks[3].innerHTML=='o' && blocks[4].innerHTML=='o' && blocks[5].innerHTML=='o'||
        blocks[6].innerHTML=='o' && blocks[7].innerHTML=='o' && blocks[8].innerHTML=='o'||
        blocks[0].innerHTML=='o' && blocks[3].innerHTML=='o' && blocks[6].innerHTML=='o'||
        blocks[1].innerHTML=='o' && blocks[4].innerHTML=='o' && blocks[7].innerHTML=='o'||
        blocks[2].innerHTML=='o' && blocks[5].innerHTML=='o' && blocks[8].innerHTML=='o'||
        blocks[0].innerHTML=='o' && blocks[4].innerHTML=='o' && blocks[8].innerHTML=='o'||
        blocks[2].innerHTML=='o' && blocks[4].innerHTML=='o' && blocks[6].innerHTML=='o'){
          setTimeout(function () {
            alert('WON O');
            scoreO++;
            $("#o").text(scoreO);
            clear();
          }, 50);
			return;
      }
     draw++;
      if( draw === 9){alert('DRAW');clear(blocks);}

  }

function clear(){
    for(var i = 0; i<9; i++) {
        blocks[i].innerHTML='';
        draw=0
  }
  }

function noneBorder(){
	$(".gameField div:eq(1)").css({'border-top' : 'none'});
	$(".gameField div:eq(7)").css({'border-bottom' : 'none'});
	$(".gameField div:eq(3)").css({'border-left' : 'none'});
	$(".gameField div:eq(5)").css({'border-right' : 'none'});
	$(".gameField div:eq(0)").css({'border-top' : 'none','border-left' : 'none'});
	$(".gameField div:eq(2)").css({'border-top' : 'none','border-right' : 'none'});
	$(".gameField div:eq(6)").css({'border-bottom' : 'none','border-left' : 'none'});
	$(".gameField div:eq(8)").css({'border-bottom' : 'none','border-right' : 'none'});
  }

function bot(){
    i= Math.floor(Math.random() * 9);
    if (blocks[i].innerHTML==="") {
      setTimeout(function () {
      blocks[i].innerHTML="o";
      check();
    }, 60);
    }else {
      bot();
    }
  }
