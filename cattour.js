let speaker = document.getElementById("speaker");
let logo = document.getElementById("logo");
let highline = document.getElementById("highline");
let arts = document.getElementById("arts");
let d2 = document.getElementById("d2");
//cat icons
let logocat = document.getElementById("logocat");
let highlinecat = document.getElementById("highlinecat");
let artscat = document.getElementById("artscat");
let d2cat = document.getElementById("d2cat");
logo.addEventListener("click", () => {
  console.log("clicked logo!!");
  speaker.src = "./images/logocat.png";
  logocat.style.outline = "3px solid orange";
  highlinecat.style.outline = "none";
  artscat.style.outline = "none";
  d2cat.style.outline = "none";
});

highline.addEventListener("click", () => {
  speaker.src = "./images/highlinecat.png";
  logocat.style.outline = "none";
  highlinecat.style.outline = "3px solid orange";
  artscat.style.outline = "none";
  d2cat.style.outline = "none";
});

arts.addEventListener("click", () => {
  speaker.src = "./images/artscat.png";
  logocat.style.outline = "none";
  highlinecat.style.outline = "none";
  artscat.style.outline = "3px solid orange";
  d2cat.style.outline = "none";
});

d2.addEventListener("click", () => {
  speaker.src = "./images/d2cat.png";
  logocat.style.outline = "none";
  highlinecat.style.outline = "none";
  artscat.style.outline = "none";
  d2cat.style.outline = "3px solid orange";
});

let meow = document.getElementById("meow");
let translate = document.getElementById("translate");

var meowcounter = 0;
meow.addEventListener("click", () => {
  if (meowcounter == 0) {
    meow.src = "./images/nomeow.png";
    meowcounter++;
  } else {
    meow.src = "./images/meow.png";
    meowcounter = 0;
  }
});

var talkcounter = 0;
translate.addEventListener("click", () => {
  if (talkcounter == 0) {
    translate.src = "./images/notalk.png";
    talkcounter++;
  } else {
    translate.src = "./images/talk.png";
    talkcounter = 0;
  }
});
