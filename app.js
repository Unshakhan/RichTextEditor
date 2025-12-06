// var icons = document.getElementsByTagName("i")
// console.log(icons);
function bold(){
//    var icons = document.getElementsByTagName("i")[0] 
   var mainText = document.getElementById("text")
   mainText.style.fontWeight = "bold"
}
function italic(){
  var mainText = document.getElementById("text")  
  mainText.style.fontStyle="italic"
}
function underline(){
  var mainText = document.getElementById("text")  
  mainText.style.textDecoration="underline"
}
 function changeFont(font) {
        var mainText = document.getElementById("text");
        mainText.style.fontFamily = font;
      }