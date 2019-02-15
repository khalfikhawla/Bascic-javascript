function myFunction_bold() {
    document.getElementById("f").style.fontWeight = "bold";
  }
  function myFunction_italic() {
    document.getElementById("f").style.fontStyle = "italic";
  }
  function myFunction_underlined() {
    document.getElementById("f").style.textDecoration = "underline";
  }
  
 
  function myFunction1(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("f").style.fontSize = listValue;}

    function myFunction(selectTag) {
        var listValue = selectTag.options[selectTag.selectedIndex].text;
        document.getElementById("f").style.fontStyle = listValue;
      }