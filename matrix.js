function addMatrices2by2(){

document.getElementById("operation2by2").innerHTML = "+"; //adds a plus symbol between the matrices

var m1 = [document.getElementById("a1").value,document.getElementById("b1").value, document.getElementById("c1").value, document.getElementById("d1").value];
var m2 = [document.getElementById("a2").value,document.getElementById("b2").value, document.getElementById("c2").value, document.getElementById("d2").value];


var result = [];

for(var i= 0; i < m1.length;i++){

	for (var j=0; j < m2.length;j++){
		result[i] = parseInt(m1[i]) + parseInt(m2[i]);
	}

}


document.getElementById("1").innerHTML = result[0];
document.getElementById("2").innerHTML = result[1];
document.getElementById("3").innerHTML = result[2];
document.getElementById("4").innerHTML = result[3];

}

function multiplyMatrices2by2(){

document.getElementById("operation2by2").innerHTML = "*"; //adds multiplication between matrices


var m1 = [document.getElementById("a1").value,document.getElementById("b1").value, document.getElementById("c1").value, document.getElementById("d1").value];
var m2 = [document.getElementById("a2").value,document.getElementById("b2").value, document.getElementById("c2").value, document.getElementById("d2").value];


var result = [];

	var rowLength = Math.sqrt(m1.length);
	for (i = 0; i < m1.length; i++) {
		var index = parseInt(i / rowLength);
		var val = 0;
		for (var x = 0; x < rowLength; x++) {
		val += m1[index * rowLength + x] * m2[x * rowLength + (i % rowLength)];
		}
		result[i] = val;

	
}



document.getElementById("1").innerHTML = result[0];
document.getElementById("2").innerHTML = result[1];
document.getElementById("3").innerHTML = result[2];
document.getElementById("4").innerHTML = result[3];

}

function addMatrices3by3(){

document.getElementById("operation3by3").innerHTML = "+";

var m1 = [document.getElementById("a01").value,document.getElementById("b01").value, document.getElementById("c01").value, document.getElementById("d01").value, document.getElementById("e01").value, document.getElementById("f01").value, document.getElementById("g01").value, document.getElementById("h01").value, document.getElementById("i01").value];
var m2 = [document.getElementById("a02").value,document.getElementById("b02").value, document.getElementById("c02").value, document.getElementById("d02").value, document.getElementById("e02").value, document.getElementById("f02").value, document.getElementById("g02").value, document.getElementById("h02").value, document.getElementById("i02").value]

var result = [];

for(var i= 0; i < m1.length;i++){

	for (var j=0; j < m2.length;j++){
		result[i] = parseInt(m1[i]) + parseInt(m2[i]);
	}

}


document.getElementById("one").innerHTML = result[0];
document.getElementById("two").innerHTML = result[1];
document.getElementById("three").innerHTML = result[2];
document.getElementById("four").innerHTML = result[3];
document.getElementById("five").innerHTML = result[4];
document.getElementById("six").innerHTML = result[5];
document.getElementById("seven").innerHTML = result[6];
document.getElementById("eight").innerHTML = result[7];
document.getElementById("nine").innerHTML = result[8];


}

function multiplyMatrices3by3(){

document.getElementById("operation3by3").innerHTML = "*";


var m1 = [document.getElementById("a01").value,document.getElementById("b01").value, document.getElementById("c01").value, document.getElementById("d01").value, document.getElementById("e01").value, document.getElementById("f01").value, document.getElementById("g01").value, document.getElementById("h01").value, document.getElementById("i01").value];
var m2 = [document.getElementById("a02").value,document.getElementById("b02").value, document.getElementById("c02").value, document.getElementById("d02").value, document.getElementById("e02").value, document.getElementById("f02").value, document.getElementById("g02").value, document.getElementById("h02").value, document.getElementById("i02").value];


var result = [];

	var rowLength = Math.sqrt(m1.length);
	for (i = 0; i < m1.length; i++) {
		var index = parseInt(i / rowLength);
		var val = 0;
		for (var x = 0; x < rowLength; x++) {
		val += m1[index * rowLength + x] * m2[x * rowLength + (i % rowLength)];
		}
		result[i] = val;

	
}




document.getElementById("one").innerHTML = result[0];
document.getElementById("two").innerHTML = result[1];
document.getElementById("three").innerHTML = result[2];
document.getElementById("four").innerHTML = result[3];
document.getElementById("five").innerHTML = result[4];
document.getElementById("six").innerHTML = result[5];
document.getElementById("seven").innerHTML = result[6];
document.getElementById("eight").innerHTML = result[7];
document.getElementById("nine").innerHTML = result[8];

}

function showMatrix1(){

if(document.getElementById("answer").style.display = "none"){
document.getElementById("answer").style.display = "inline-block";
 }
 
}

function showMatrix2(){

if(document.getElementById("answer2").style.display = "none"){
document.getElementById("answer2").style.display = "inline-block";
 }
}