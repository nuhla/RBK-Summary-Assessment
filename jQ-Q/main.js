$('#creatBtn').on('click',function(){
  var v=$('#fch').prop('checked') ;
  var v2=$('#sch').prop('checked') ;
  var v3=$('#tch').prop('checked') ;

  // Black Color
  if($('#blue').prop('checked')  && $('#red').prop('checked') && $('#yallow').prop('checked') )
    $('#theList').append("<li class= 'black'> black</li>");

  // purple Color 
  if($('#blue').prop('checked')  && $('#red').prop('checked') && !$('#yallow').prop('checked'))
  	  $('#theList').append("<li class= 'purple'> purple</li>");

   // orange Color
  if(!$('#blue').prop('checked')  && $('#red').prop('checked') && $('#yallow').prop('checked'))
    $('#theList').append("<li class= 'orange'> orange</li>");

   // green Color
  if($('#blue').prop('checked')  && !$('#red').prop('checked') && $('#yallow').prop('checked'))
    $('#theList').append("<li class= 'green'> green</li>");

   // Blue Color
  if($('#blue').prop('checked')  && !$('#red').prop('checked') && !$('#yallow').prop('checked'))
    $('#theList').append("<li class= 'blue'> blue</li>");

	// red Color
  if(!$('#blue').prop('checked')  && $('#red').prop('checked') && !$('#yallow').prop('checked'))
    $('#theList').append("<li class= 'red'> red</li>");

	// yallow Color
  if(!$('#blue').prop('checked')  && !$('#red').prop('checked') && $('#yallow').prop('checked'))
    $('#theList').append("<li class= 'yallow'> yallow</li>");
  }

)



$('#removeBtn').on('click',function(){

  var v=$('#fch').prop('checked') ;
  var v2=$('#sch').prop('checked') ;
  var v3=$('#tch').prop('checked') ;

  // Black Color
  if($('#blue').prop('checked')  && $('#red').prop('checked') && $('#yallow').prop('checked') )
  	 $('li').remove('.black');
    //$('.black').append("<li class= 'black'> black</li>");

  // purple Color 
  if($('#blue').prop('checked')  && $('#red').prop('checked') && !$('#yallow').prop('checked'))
    $('li').remove('.purple');

   // orange Color
  if(!$('#blue').prop('checked')  && $('#red').prop('checked') && $('#yallow').prop('checked'))
  	$('li').remove('.orange');

   // green Color
  if($('#blue').prop('checked')  && !$('#red').prop('checked') && $('#yallow').prop('checked'))
    $('li').remove('.green');

   // Blue Color
  if($('#blue').prop('checked')  && !$('#red').prop('checked') && !$('#yallow').prop('checked'))
     $('li').remove('.blue');

	// red Color
  if(!$('#blue').prop('checked')  && $('#red').prop('checked') && !$('#yallow').prop('checked'))
  	$('li').remove('.red');


	// yallow Color
  if(!$('#blue').prop('checked')  && !$('#red').prop('checked') && $('#yallow').prop('checked'))
    	$('li').remove('.yallow');
})
