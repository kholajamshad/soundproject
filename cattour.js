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


