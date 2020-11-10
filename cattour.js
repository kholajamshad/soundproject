let speaker=document.getElementById("speaker");
let logo=document.getElementById("logo");
let highline=document.getElementById("highline");
let arts=document.getElementById("arts");
let d2=document.getElementById("d2");

logo.addEventListener("click", () =>{
	speaker.src="logocat.png";
})

highline.addEventListener("click", () =>{
	speaker.src="highlinecat.png";
})

arts.addEventListener("click", () =>{
	speaker.src="artscat.png";
})

d2.addEventListener("click", () =>{
	speaker.src="d2cat.png";
})


let meow=document.getElementById("meow");
let translate=document.getElementById("translate");

var meowcounter=0;
meow.addEventListener("click", () => {
	if(meowcounter==0){
		meow.src="nomeow.png";
		meowcounter++;
	}
	else{
		meow.src="meow.png";
		meowcounter=0;
	}
	
})

var talkcounter=0;
translate.addEventListener("click", () => {
	if(talkcounter==0){
		translate.src="notalk.png";
		talkcounter++;
	}
	else{
		translate.src="talk.png";
		talkcounter=0;
	}
	
})
