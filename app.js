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
 function justify(direction) {
        var mainText = document.getElementById("text");
        mainText.style.display = "flex";
        mainText.style.justifyContent = direction;
      }
    
    // ===========================
    // color apply
// document.querySelectorAll('.color-box').forEach(box => {
//   box.addEventListener('click', function () {
//     const pickedColor = this.getAttribute("data-color");
//     document.getElementById("text").style.color = pickedColor;
//   });
// });
  var mainText = document.getElementById("text")  

function left(){
  // mainText.style.display ="flex"
  mainText.style.textAlign="left"
}
function center(){
  // mainText.style.display ="flex" 
  mainText.style.textAlign="center"
}
function right(){
  // mainText.style.display ="flex"
  mainText.style.textAlign="right"
}
function changeColor(){
  var Color = event.target.getAttribute("data-color");
   document.getElementById("text").style.color = Color;
}

function changeBgColor(){
  var BgColor = event.target.getAttribute("data-color");
document.getElementById("text").style.backgroundColor = BgColor;
}


function makeOrdList() {
    var editor = document.getElementById("text");
    editor.focus();
    document.execCommand("insertOrderedList");
}
function makeUnList() {
    var editor = document.getElementById("text");
    editor.focus();
    document.execCommand("insertUnorderedList");

}
let currentIndent = 0; 
function indentLeft(){
 var editor = document.getElementById("text");
    editor.focus();
     currentIndent += 10;
    editor.style.marginLeft = currentIndent + "px";
}
function indentright(){
 var editor = document.getElementById("text");
    editor.focus();
    currentIndent -= 10;
    editor.style.marginLeft = currentIndent + "px";
}
function bqoute() {
    var editor = document.getElementById("text");
    editor.focus();
    // document.execCommand("blockquote");
      editor.classList.toggle("quote");
}
// ===============================
var emojis = document.getElementsByClassName("emoji");

for (var i = 0; i < emojis.length; i++) {
    emojis[i].onclick = function () {
        var editor = document.getElementById("text");
        editor.focus();

        document.execCommand("insertText", false, this.innerText);
    }
}
function heading(tag){
 var editor = document.getElementById("text");
    editor.focus();
    document.execCommand("formatBlock", false, tag);
}
let copiedText = ""; // global variable to store copied text

function copy() {
    copiedText = document.getElementById("text").innerText; // store text globally
    Swal.fire({
        icon: "success",
        title: "Copied successfully"
    });
    console.log(copiedText);
}

function paste() {
    var textDiv = document.getElementById("text");
    textDiv.innerText = copiedText; // use the global variable
}
function deleteAll() {
    document.getElementById("text").innerText = ""; // clears everything
}


