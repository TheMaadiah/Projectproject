// CLOCK
setInterval(() => {
  const now = new Date();
  const clock = document.getElementById("clock");
  if (clock) clock.innerHTML = now.toLocaleTimeString();
}, 1000);

window.onload = function() {
      const images = [
        "bam_bam.jpg",
        "big_hero_6.webp",
        "finding_dory.webp",
        "galway_girl.jpg",
        "whats_poppin.jpg",
        "lego_batman.jpg",
        "monsters_inc.jpg",
        "talking_to_the_moon.jpg",
        "the_lorax.webp",
        "wow.jpg"
      ];

      let index = 0;
      const slide = document.getElementById("slide");

      setInterval(() => {
        index = (index + 1) % images.length;
        slide.src = images[index];
      }, 3000);
    };

// MOVIES
const videos = [
  {
    title: "Big Hero 6 (2014)",
    src: "BIG HERO 6 _ UK Teaser Trailer _ Official Disney UK.mp4", type: "video/mp4",
    desc: "A young robotics prodigy, Hiro, teams up with an inflatable robot, Baymax, and friends to stop a mysterious villain in San Fransokyo.",
    cast: `<li>Ryan Potter</li>
  <li>Scott Adsit</li>
  <li>Daniel Henney</li>
  <li>T.J. Miller</li>
  <li>Jamie Chung</li>
  <li>Genesis Rodriguez</li>
  <li>Damon Wayans Jr.</li>`,
  genre: "Genre: Animation, Action"
  },
  {
    title: "Lego Batman (2013)",
    src: "LEGO Batman_ The Movie - Trailer.mp4", type: "video/mp4",
    desc: "Batman learns to work with others to save Gotham City from the Joker and other villains in a chaotic Lego world.",
    cast: `<li>Will Arnett</li>
    <li>Michael Cera</li>
    <li>Rosario Dawson</li> 
    <li>Zach Galifianakis</li>`,
    genre: "Genre: Animation, Comedy"
  },
  {
    title: "Monsters, Inc. (2001)",
    src: "Monsters, Inc. 3D Trailer.mp4", type: "video/mp4",
    desc: "Two monsters, Sulley and Mike, uncover a conspiracy in the scream-powered city while protecting a little girl, Boo.",
    cast: `<li>Billy Crystal</li>
  <li>John Goodman</li>
  <li>Mary Gibbs</li>
  <li>Steve Buscemi</li>
  <li>James Coburn</li>
  <li>Jennifer Tilly</li>`,
  genre: "Genre: Animation, Fantasy"
  }
];

let index = 0;

const vid = document.getElementById("vid");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
document.getElementById("cast").innerHTML = videos.cast;
const genre = document.getElementById("genre");
const volSlide = document.getElementById("vol");

function loadMovie(i) {
  vid.src = videos[i].src;
  document.getElementById("title").innerHTML = videos[i].title;
  document.getElementById("desc").innerHTML = videos[i].desc;
  document.getElementById("cast").innerHTML = videos[i].cast;
  document.getElementById("genre").innerHTML = videos[i].genre;
  vid.play();
}


document.getElementById("playbtn").addEventListener("click", function() {
  if (vid.paused) {
    vid.play();
    this.innerHTML = "Pause";
  } else {
    vid.pause();
    this.innerHTML = "Play";
  }
});

document.getElementById("mutebtn").addEventListener("click", function() {
  vid.muted = !vid.muted;
});


document.getElementById("maxbtn").addEventListener("click", () => vid.width = 1200);
document.getElementById("minbtn").addEventListener("click", () => vid.width = 520);


document.getElementById("nextbtn").addEventListener("click", function() {
  index = (index + 1) % videos.length;
  loadMovie(index);
});

document.getElementById("prevbtn").addEventListener("click", function() {
  index = (index - 1 + videos.length) % videos.length;
  loadMovie(index);
});


vid.volume = 0.2;
volSlide.addEventListener("input", function() {
  vid.volume = volSlide.value / 100;
});

// Load the first movie when page opens
loadMovie(index);
// Update video sources




