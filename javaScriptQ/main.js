
var btn = document.getElementById('addBtn');
btn.onclick= function (){

var valu = document.getElementById('valu');
var color = document.getElementById('color');
var MyList =document.getElementById('MyUnList'); 

debugger
  var MyInnerHtml="";
  if(color.value=== "red"){
    MyInnerHtml= "<li class='red'>"+ valu.value+"</li>"
    MyList.innerHTML+=MyInnerHtml;
  }
  else if(color.value == "yallow"){
    MyInnerHtml= "<li class='yallow'>"+ valu.value+"</li>"
    MyList.innerHTML+=MyInnerHtml;
  }
  else if(color.value== "blue"){
    MyInnerHtml+= "<li class='blue'>"+ valu.value+"</li>"
    MyList.innerHTML+=MyInnerHtml;
  }

 

}



