var {PythonShell} = require('python-shell');
var pyshell = new PythonShell('motor.py')


function stop() {
  alert("stop")
  pyshell.send("break")
}

function back() {
  alert("back")
  pyshell.send("back")
}

function forward() {
  alert("forward")
  pyshell.send("go")
  
}

