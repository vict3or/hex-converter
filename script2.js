var input  = document.getElementById("convert-hex")
var dinamic = document.getElementById("result-block")
var output1 = document.getElementById("rgb");
var output2 = document.getElementById("color");

function convert(){
    var inputv = input.value
    var r = parseInt(inputv.match(/.{1,2}/g)[0], 16)
    var g = parseInt(inputv.match(/.{1,2}/g)[1], 16)
    var b = parseInt(inputv.match(/.{1,2}/g)[2], 16)
    var result = "rgb" + "(" + r + ", " + g + ", " + b + ")"
    tela1(result)
    output2.style.backgroundColor = result
    dinamic.style.display = "block"
}


function tela1(value){
    output1.value = value;
}


document.getElementById("button").addEventListener("click", function(event){
  event.preventDefault()
});
