var count = $('input').val();
var date = new Date();
var img = $('img');
var i=0;

(function (){
	main();
	forFooter();
})();

$("#input").change(function(){
    main();
});

$('button').click(function(){
	main();
});

function main(){
	count = $('input').val();
	if(isValid(count)){
		createImg(count);
	}
	else
	$('input').val('1');
}

function createImg(count){
	var res = count-img.length;

	if(res<0){
		res*=-1;
		for(i=0;i<res;i++){
			$('img').remove();
		}
		res=img.length-res;
	}

	if(res != 0){
		for(i=0;i<res;i++){
			$("#cub").append('<img>');
		}
	}

	img = $('img');
	for(i=0;i<img.length;i++){
			rand(img[i]);
	}
}

function rand(img){
	var val = Math.floor(Math.random() * 6) + 1;
switch (val) {
    case 1:
		$(img).attr('src','./content/dice1.png');
		$(img).attr('alt','1');
        break;
    case 2:
		$(img).attr('src','./content/dice2.png');
		$(img).attr('alt','2');
        break;
	case 3:
		$(img).attr('src','./content/dice3.png');
		$(img).attr('alt','3');
        break;
    case 4:
		$(img).attr('src','./content/dice4.png');
		$(img).attr('alt','4');
        break;
	 case 5:
		$(img).attr('src','./content/dice5.png');
		$(img).attr('alt','5');
        break;
    case 6:
		$(img).attr('src','./content/dice6.png');
		$(img).attr('alt','6');
        break;
    default:
       alert("Oops! Something went wrong ;(")
	}
};

function isValid(input){
	if(input <= 65 && input >=1){
		return true;
	}
	else{
		alert("\tSomething went wrong ;( \nYou can enter only numbers from 1 to 65 ");
		return false;
	}
};

function forFooter(){
	$("footer p").html(date.getFullYear()+' / '+(date.getMonth()+1)+' / '+date.getDate());
}
