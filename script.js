// ======== ANIMASI BINTANG ======== 
const starContainer = document.createElement("div");
starContainer.classList.add("stars");
document.body.appendChild(starContainer);

for (let i = 0; i < 100; i++) {
  const star = document.createElement("span");
  star.classList.add("star");
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDuration = 2 + Math.random() * 3 + "s";
  star.style.opacity = Math.random();
  starContainer.appendChild(star);
}

// ======== ANIMASI PLANET ========
const planet = document.createElement("div");
planet.classList.add("planet");
document.body.appendChild(planet);

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  planet.style.transform = `translate(${x}px, ${y}px)`;
});

// ======== DAFTAR LAGU ========
const allTracks = [
  { title: "Daddy's Home", file: "Daddy's Home - Usher ft Plies.mp3" },
  { title: "Earned It", file: "Earned It - The Weeknd.mp3" },
  { title: "Show Me Love", file: "Show Me Love - WizTheMc ft Tyla.mp3" },
  { title: "Terbuang Dalam Waktu", file: "Terbuang Dalam Waktu - Barasuara.mp3" },
  { title: "Monolog", file: "Monolog - Pamungkas .mp3" },
  { title: "Mangu", file: "Mangu - Fourtwnty feat Charita Utami.mp3" },
  { title: "Mejikuhibiniu", file: "Mejikuhibiniu - Tenxi, suisei & Jemsii.mp3" },
  { title: "Ours To Keep", file: "Ours To Keep - Kendis ft Adis.mp3" },
  { title: "Back To Friends", file: "Back To Friends-Sombr.mp3" },
  { title: "Komang", file: "Komang-Raim Laode.mp3" },
  { title: "Sailor Song", file: "Sailor Song - Gigi Perez.mp3" },
  { title: "Salvatore", file: "Salvatore - Lana Del Rey.mp3" },
  { title: "The Hills", file: "The Hills - The Weeknd.mp3" },
  { title: "Better", file: "Better - Khalid.mp3" },
  { title: "Eyes Off You", file: "Eyes Off You - Prettymuch.mp3" }
];

// ======== PLAYER UTAMA ========
const playerContainer = document.createElement("div");
playerContainer.classList.add("player");
document.body.appendChild(playerContainer);

playerContainer.innerHTML = `
  <h2 class="judul">🎵 <span id="trackTitle"></span></h2>
  <audio id="audio"></audio>
  <div class="controls">
    <button id="playPause">⏯️</button>
    <button id="next">⏭️</button>
  </div>
`;

const audio = document.getElementById("audio");
const title = document.getElementById("trackTitle");
const playPause = document.getElementById("playPause");
const nextBtn = document.getElementById("next");

let currentTrack = null;

// ======== FUNGSI PUTAR LAGU RANDOM ========
function playRandomTrack() {
  const random = allTracks[Math.floor(Math.random() * allTracks.length)];
  currentTrack = random;
  audio.src = random.file;
  title.textContent = random.title;
  audio.play();
  playPause.textContent = "⏸️";
}

// ======== TOMBOL PLAY / PAUSE ========
playPause.addEventListener("click", () => {
  if (audio.src === "") {
    playRandomTrack();
  } else if (audio.paused) {
    audio.play();
    playPause.textContent = "⏸️";
  } else {
    audio.pause();
    playPause.textContent = "▶️";
  }
});

// ======== TOMBOL NEXT / SKIP ========
nextBtn.addEventListener("click", playRandomTrack);

// ======== OTOMATIS SKIP SETELAH LAGU SELESAI ========
audio.addEventListener("ended", playRandomTrack);

// ======== MULAI PERTAMA ========
playRandomTrack();