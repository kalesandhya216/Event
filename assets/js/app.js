// alert('ok');

let cl = console.log;

let clickbtn = document.querySelector("#btn");
let demoDiv = document.querySelector(".demo");

let demo1Div = document.querySelector(".demo1");
let primarybtn = document.querySelector("#btn1");

cl(clickbtn);
cl(demoDiv);

cl(demo1Div);
cl(primarybtn);

// click event 

// clickbtn.addEventListener("click", function() {
	// demoDiv.style.backgroundColor = "aqua";
// });

clickbtn.addEventListener("click", () => {
	cl("event triggered");
	 demoDiv.style.backgroundColor = "aqua";
});


// click event 

// ==========================   Ex.1)  ==================================

primarybtn.addEventListener("click", changeColor);

function changeColor() {
	demo1Div.style.backgroundColor = "orange";
};



// ==========================   Ex.2)  ==================================

var demo2Div = document.querySelector(".demo2");
var btn2 = document.querySelector("#btn2");

cl(demo2Div);
cl(btn2);

btn2.addEventListener("click", scaleDiv);

function scaleDiv(){
	// cl("event triggered");
	demo2Div.style.transform = "scale(1.05)";
	demo2Div.style.backgroundColor = "aqua";
};

 
// ==========================   Ex.3)  ==================================

let mainDiv = document.querySelector(".main");
let btn3 = document.querySelector("#btn3");

cl(mainDiv);
cl(btn3);

btn3.addEventListener("click", change);

function change(){
	cl("event triggered");
	mainDiv.style.borderRadius = "25%";
};


// ==========================   Ex.4)  ==================================

let box = document.querySelector(".box");
let button = document.querySelector("#btn4");

cl(box);
cl(button);

button.addEventListener("click", onClick);

function onClick(e){
	cl(e.type);
	box.style.borderRadius = "50% 30%";
	box.style.backgroundColor = "blueviolet";
};

// =====================  Ex.5)  ==============================

let main = document.querySelector(".main");
let clickbtn1 = document.querySelector("#clickbtn1");
let info = document.querySelector("#info");

cl(main);
cl(clickbtn1);

clickbtn1.addEventListener("click", changeColor);

function changeColor(){
	info.innerText = "Hii this is a javascript";
	info.style.padding = "30% 30%";
};



// dblclick event

// ==========================   Ex.1)  ==================================


let Button = document.querySelector("#button");
let testDiv = document.querySelector(".test");

cl(Button);
cl(testDiv);

Button.addEventListener("dblclick", setColor);

function setColor(e){
	cl(e.type);
	testDiv.style.backgroundColor = "hotpink";
};

// ==========================   Ex.2)  ==================================

let clickbtn2 = document.querySelector("#clickbtn2");
let demo3Div = document.querySelector(".demo3");

cl(clickbtn2);
cl(demo3Div);


clickbtn2.addEventListener("dblclick", changeColor);


function changeColor(){
	demo3Div.innerText = "This is a javascript";
};


// ==========================   Ex.3)  ==================================

let demo4Div = document.querySelector(".demo4");
let clickbtn3 = document.querySelector("#clickbtn3");

cl(demo4Div);
cl(clickbtn3);

clickbtn3.addEventListener("dblclick", changeColor);

function changeColor(){
	demo4Div.style.backgroundColor = "orange";
	demo4Div.style.borderRadius = "70%";
};


// ==========================   Ex.4)  ==================================

let clickbtn4 = document.querySelector("#clickbtn4");
let demo5Div = document.querySelector(".demo5");

cl(clickbtn4);
cl(demo5Div);

clickbtn4.addEventListener("dblclick", changeColor);

function changeColor(e){
	cl(e.type);
	demo5Div.style.backgroundColor = "orchid";
};


// ==========================   Ex.5)  ==================================


