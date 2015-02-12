"use strict"; //modo estricto para los navegadores que lo permitan
function calculate(){
  var result;
  var result2;
  var original = document.getElementById("original");
  var temp = original.value;
  //var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  var regexp = /^\s*([-+]?\d+(?:\.\d*)?º?(?:[eE][-+]?\d+)?)\s*([cCfFkK])$/

  var m = temp.match(regexp);

  if(m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C'){
      result = (num * 9/5) + 32;
      result = result.toFixed(1) + " Farenheit";
      result2 = num + 273.15;
      result2 = result2.toFixed(1) + " Kelvin"
    }
    else if (type == 'f' || type == 'F'){
      result = (num - 32) * 5/9;
      result = result.toFixed(1) + " Celsius";
      result2 = ((num - 32) / 1.8) + 273;
      result2 = result2.toFixed(1) + " Kelvin"
    }
    else{
      result = num - 273.15;
      result2 = (result * 9/5) + 32;
      result = result.toFixed(1) + " Celsius";
      result2 = result2.toFixed(1) + " Farenheit"
    }
    converted.innerHTML = result;
    document.getElementById("converted2").innerHTML = result2;
    //converted2.innerHTML = result2;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
    converted2.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}
