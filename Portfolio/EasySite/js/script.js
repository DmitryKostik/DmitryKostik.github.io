var h = document.getElementById('hour');
var m = document.getElementById('minutes');
var s = document.getElementById('seconds');

setInterval(tick, 1000);

function tick()
{
  var d = new Date;
  var H = 23-d.getHours();
  var M = 59 - d.getMinutes();
  var S = 59 - d.getSeconds();
  h.innerHTML = H+":";
  m.innerHTML = M+":";
  s.innerHTML = S;
}
