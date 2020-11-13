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
var talk4 = new Audio("./audio/d1 cat 4.mp3"); //background audio: https://freesound.org/people/omgbong/sounds/411597/

//current audio variables
var currcataudio = meow1;
var currtalkaudio = talk1;

//audio counters
var meowcounter = 0;
var talkcounter = 0;



//managing visual and audio settings on clicking cat icons
//same code structure used for all four cat icon clicking

logo.addEventListener("click", () => {
  speaker.src = "./images/logocat.png"; //picture of selected cat appears as main speaker
  //fades out all the unselected cats
  logocat.style.opacity = "1";
  highlinecat.style.opacity = "0.6";
  artscat.style.opacity = "0.6";
  d2cat.style.opacity = "0.6";
  
  //pauses audio and resets control counters when new cat is selected
  //if condition checks if cat being clicked was already selected
  //prevents overlap of audios associated with different cats
  if(currcataudio != meow1){
      meow.style.opacity = "0.6"; //button fades on pause
      meowcounter = 0;
      currcataudio.pause();
      talk.style.opacity = "0.6";
      talkcounter = 0;
      currtalkaudio.pause();
  }

  //setting current audio based on which cat is clicked
  currcataudio = meow1;
  currtalkaudio = talk1;
});


highline.addEventListener("click", () => {
  speaker.src = "./images/highlinecat.png";
  logocat.style.opacity = "0.6";
  highlinecat.style.opacity = "1";
  artscat.style.opacity = "0.6";
  d2cat.style.opacity = "0.6";

  if(currcataudio != meow2){
      meow.style.opacity = "0.6"; 
      meowcounter = 0;
      currcataudio.pause();
      talk.style.opacity = "0.6";
      talkcounter = 0;
      currtalkaudio.pause();
  }

  currcataudio = meow2;
  currtalkaudio = talk2;
});


arts.addEventListener("click", () => {
  cat = 3;
  speaker.src = "./images/artscat.png";
  logocat.style.opacity = "0.6";
  highlinecat.style.opacity = "0.6";
  artscat.style.opacity = "1";
  d2cat.style.opacity = "0.6";

  if(currcataudio != meow3){
      meow.style.opacity = "0.6"; 
      meowcounter = 0;
      currcataudio.pause();
      talk.style.opacity = "0.6";
      talkcounter = 0;
      currtalkaudio.pause();
  }

  currcataudio = meow3;
  currtalkaudio = talk3;
});


d2.addEventListener("click", () => {
  cat = 4;
  speaker.src = "./images/d2cat.png";
  logocat.style.opacity = "0.6";
  highlinecat.style.opacity = "0.6";
  artscat.style.opacity = "0.6";
  d2cat.style.opacity = "1";

  if(currcataudio != meow4){
      meow.style.opacity = "0.6"; 
      meowcounter = 0;
      currcataudio.pause();
      talk.style.opacity = "0.6";
      talkcounter = 0;
      currtalkaudio.pause();
  }

  currcataudio = meow4;
  currtalkaudio = talk4;
});



//managing pause and play of current audio using control buttons

//for cat recordings
meow.addEventListener("click", () => {
  //if conditions pauses human recording if cat recording clicked
  //prevents overlapping of human and cat recordings
  if (talkcounter == 1) {
    talk.style.opacity = "0.6"; //button fades on pause
    talkcounter = 0;
    currtalkaudio.pause();
  }

  //if conditions plays current audio using counter
  if (meowcounter == 0) {
    meow.style.opacity = "1"; //button is highlighted while audio is playing
    currcataudio.play();
    meowcounter++;
    //if audio ends then button fades and counter is reset
    currcataudio.addEventListener("ended", function () {
      this.currentTime = 0;
      meowcounter = 0;
      meow.style.opacity = "0.6"; //button fades on end of recording
    });
  } 

  //else condition pauses current audio using counter
  else {
    meow.style.opacity = "0.6"; //button fades on pause
    meowcounter = 0;
    currcataudio.pause();
  }
});


//for human recordings (similar code as cat recordings)
talk.addEventListener("click", () => {
  //if conditions pauses cat recording if human recording clicked
  if (meowcounter == 1) {
    meow.style.opacity = "0.6"; 
    meowcounter = 0;
    currcataudio.pause();
  }

  if (talkcounter == 0) {
    talk.style.opacity = "1";
    currtalkaudio.play();
    talkcounter++;
    currtalkaudio.addEventListener("ended", function () {
      this.currentTime = 0;
      talkcounter = 0;
      talk.style.opacity = "0.6";
    });
  } 

  else {
    talk.style.opacity = "0.6";
    talkcounter = 0;
    currtalkaudio.pause();
  }
});
