var sicretCode = '';

$(document).ready(function(){
    $(document).on('keydown', startCollect);
});

function startCollect(e){
    if (e.key == '~'){
        $(document).off('keydown', startCollect);
        $(document).on('keydown', collectSymbol);
    }
}

function collectSymbol(e){
    if (e.key==' ' || e.key == 'Escape'){
        stopCollect();
    }
    else {
        sicretCode +=e.key;
			console.log(e.key);
        if (sicretCode == 'sicret'){
            $('#Modal').modal({
                show : true
            });
        }
    }
}

function stopCollect(){
    sicretCode = '';
    $(document).off('keydown', collectSymbol);
    $(document).on('keydown', startCollect);
}
