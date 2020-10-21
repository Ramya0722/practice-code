/*Window.onkeydown = processKeyDown

function processKeyDown(evt){
    var keys=document.querySelector('#keys');
    keys.innerHTML += "key: " + evt.key + "code: " + evt.keyCode;

    var modifiers = '';

    if(event.shiftKey)
      modifiers += "SHIFT";

      keys.innerHTML = modifiers + "<br>";
}

*/
window.onkeydown = function(evt) {
    document.body.innerHTML += "key = " + evt.key + "<br>";
   document.body.innerHTML += "code = " + evt.code + "<br><br>";
  }