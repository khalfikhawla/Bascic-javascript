function myFunction_bold() {
if(document.getElementById("f").style.fontWeight == "bold"){
  document.getElementById("f").style.fontWeight = ""; 
}  else document.getElementById("f").style.fontWeight = "bold" ;
  }



  function myFunction_italic() {
    if( document.getElementById("f").style.fontStyle == "italic"){
      document.getElementById("f").style.fontStyle = ""; 
  } else  document.getElementById("f").style.fontStyle = "italic";
}


  function myFunction_underlined() {
    if(  document.getElementById("f").style.textDecoration == "underline"){
      document.getElementById("f").style.textDecoration ="";  
  }else  document.getElementById("f").style.textDecoration = "underline";
}
  
 
  function myFunction1(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("f").style.fontSize = listValue;}

    function myFunction(selectTag) {
        var listValue = selectTag.options[selectTag.selectedIndex].text;
        document.getElementById("f").style.fontStyle = listValue;
      }