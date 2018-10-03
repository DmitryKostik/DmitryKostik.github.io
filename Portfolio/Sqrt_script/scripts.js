function squareCalc() {
  var a = document.f1.inA.value;
  var b = document.f1.inB.value;
  var c = document.f1.inC.value;

  var answer = document.getElementById("answer");
  var korni="";
  var D = b*b+4*a*c;
  if (D<0) {
    korni+="Нет вещественных корней";
  }

  else if (D > 0) {
    korni+="Два вещественных корня"
    var x1 = (-b + Math.sqrt(D)) / 2*a;
    var x2 = (-b - Math.sqrt(D)) / 2*a;
    korni+="<br>x<sub>1</sub> = "+x1+"<br>x<sub>2</sub> = "+x2;
  }
  else {
    korni += "Один вещественный корень";
    var x = -b  / 2*a;
    korni +="x = "+x;
  }
  answer.innerHTML = korni;
  console.log(korni);
}
