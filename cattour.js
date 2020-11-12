//VISUAL
//cat icon divs
let speaker = document.getElementById("speaker");
let logo = document.getElementById("logo");
let highline = document.getElementById("highline");
let arts = document.getElementById("arts");
let d2 = document.getElementById("d2");

//cat icon images
let logocat = document.getElementById("logocat");
let highlinecat = document.getElementById("highlinecat");
let artscat = document.getElementById("artscat");
let d2cat = document.getElementById("d2cat");

//SOUND

//control buttons
let meow = document.getElementById("meow"); //cat recording
let talk = document.getElementById("translate"); //human recording

//audio variables
var meow1 = new Audio("./audio/meow 1_new.mp3");
var meow2 = new Audio("./audio/meow 2_new.mp3");
var meow3 = new Audio("./audio/meow 3_new.mp3");
var meow4 = new Audio("./audio/meow 4_new.mp3");
var talk1 = new Audio("./audio/palm tree cat 1.mp3");
var talk2 = new Audio("./audio/highline cat 2.mp3");
var talk3 = new Audio("./audio/arts center cat 3.mp3");
var talk4 = new Audio("./audio/d1 cat 4.mp3");

//current audio variables
var currcataudio = meow1;
var currtalkaudio = talk1;

//managing visual and audio settings on clicking cat icons

logo.addEventListener("click", () => {
  speaker.src = "./images/logocat.png";
  logocat.style.outline = "3px solid white";
  highlinecat.style.outline = "none";
  artscat.style.outline = "none";
  d2cat.style.outline = "none";

  //setting current audio based on which cat is clicked
  currcataudio = meow1;
  currtalkaudio = talk1;
});

highline.addEventListener("click", () => {
  speaker.src = "./images/highlinecat.png";
  logocat.style.outline = "none";
  highlinecat.style.outline = "3px solid white";
  artscat.style.outline = "none";
  d2cat.style.outline = "none";

  currcataudio = meow2;
  currtalkaudio = talk2;
});

arts.addEventListener("click", () => {
  cat = 3;
  speaker.src = "./images/artscat.png";
  logocat.style.outline = "none";
  highlinecat.style.outline = "none";
  artscat.style.outline = "3px solid white";
  d2cat.style.outline = "none";

  currcataudio = meow3;
  currtalkaudio = talk3;
});

d2.addEventListener("click", () => {
  cat = 4;
  speaker.src = "./images/d2cat.png";
  logocat.style.outline = "none";
  highlinecat.style.outline = "none";
  artscat.style.outline = "none";
  d2cat.style.outline = "3px solid white";

  currcataudio = meow4;
  currtalkaudio = talk4;
});

//managing pause and play of current audio using a counter
//for cat recordings
var meowcounter = 0;
var talkcounter = 0;
let playing = false;
meow.addEventListener("click", () => {
  if (talkcounter == 1) {
    talk.style.opacity = "0.5"; //button fades on pause
    talkcounter = 0;
    currtalkaudio.pause();
  }
  if (meowcounter == 0) {
    console.log(playing);
    meow.style.opacity = "1"; //button is highlighted while audio is playing
    currcataudio.play();
    meowcounter++;
    //if audio ends then button fades and counter is reset
    currcataudio.addEventListener("ended", function () {
      this.currentTime = 0;
      meowcounter = 0;
      meow.style.opacity = "0.5";
    });
  } else {
    meow.style.opacity = "0.5"; //button fades on pause
    meowcounter = 0;
    currcataudio.pause();
  }
});

//for human recordings

talk.addEventListener("click", () => {
  if (meowcounter == 1) {
    meow.style.opacity = "0.5"; //button fades on pause
    meowcounter = 0;
    currcataudio.pause();
  }
  if (talkcounter == 0) {
    talk.style.opacity = "1";
    currtalkaudio.play();
    talkcounter++;
    playing = false;
    currtalkaudio.addEventListener("ended", function () {
      this.currentTime = 0;
      talkcounter = 0;
      talk.style.opacity = "0.5";
    });
  } else {
    talk.style.opacity = "0.5";
    talkcounter = 0;
    currtalkaudio.pause();
    playing = false;
  }
});
