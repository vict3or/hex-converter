document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
  });
var dinamic = document.getElementById("result-block")

var output1 = document.getElementById("hex");
var output2 = document.getElementById("rgb");
var output3 = document.getElementById("color");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");

function convert(){
    var redv = red.value;
    var greenv = green.value;
    var bluev = blue.value;
    var bresult = ("#" + rgbToHex(redv)+ rgbToHex(greenv) + rgbToHex(bluev))
    var result = bresult.toUpperCase()
    tela1(result)
    tela2("rgb" + "(" + redv + ", " + greenv + ", " + bluev + ")")
    output3.style.backgroundColor = result
    dinamic.style.display = "block"
}


var rgbToHex = function (r,g,b) { 
    var hex = Number(r,g,b).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };


  function tela1(value){
    output1.value = value;
}

function tela2(value){
    output2.value = value;
}

