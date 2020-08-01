const remote = require('electron').remote;

var winclose = function () {
    window.close();
}

var winmaximize = function () {
    window.moveTo(0, 0);
    window.resizeTo(screen.width, screen.height);
}


function winminimize(){
    var window = remote.getCurrentWindow();
    window.minimize();  
  }
