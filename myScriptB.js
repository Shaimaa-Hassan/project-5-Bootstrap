// var textcopied = document.querySelector("#mypython");
// var copyord = document.querySelector("#copyfun");
// copyord.onclick = function copypaste(){
//     textcopied.select();
//     textcopied.setSelectionRange();
//     navigator.clipboard.writeText(textcopied.innerText);
//     document.execCommand('copy')
//     alert("copied the text : " + textcopied.innerText);
// }
////////////////////////////////////////////////////
// function copyPaste() {
//     /* Get the text field */
//     var copyText = document.getElementById("mypython");
  
//     /* Select the text field */
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
//      /* Copy the text inside the text field */
//     navigator.clipboard.writeText(copyText.value);
  
//     /* Alert the copied text */
//     alert("Copied the text: " + copyText.value);
//   }
//////////////////////////////////////////////////////////////////
function copyPaste(name){
    var range = document.createRange(); 
    range.selectNode(document.getElementById(name));
    window.getSelection().removeAllRanges();//clear current selection
    window.getSelection().addRange(range);//to select
    document.execCommand("copy");
    window.getSelection().removeAllRanges();//to deselect
alert("copied the text ");
}