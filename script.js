const songs = [
  { title: "Back To Friends - Sombr", file: "Back To Friends-Sombr.mp3" },
  { title: "Better - Khalid", file: "Better - Khalid.mp3" },
  { title: "Calma Remix - Pedro Capó Farruko", file: "Calma_Remix_-_Pedro_Capó_Farruko[1].mp3" },
  { title: "Cincin - Hindia", file: "Cincin_-_Hindia[1].mp3" },
  { title: "Ponte Bonita - CrisMj", file: "Cris_MJ_Ponte_Bonita_Visualizer_Partyson[2].mp3" },
  { title: "Daddy's Home - Usher with Plies", file: "Daddy's Home - Usher ft Plies.mp3" },
  { title: "Di Ujung Jalan - Samsons", file: "Di Ujung Jalan - Samsons.mp3" },
  { title: "Earned It - The Weeknd", file: "Earned It - The Weeknd.mp3" },
  { title: "Everything U Are - Hindia", file: "Everything_u_are_-_Hindia[1].mp3" },
  { title: "Eyes Off You - Prettymuch", file: "Eyes Off You - Prettymuch.mp3" },
  { title: "Figurinha part MC Bruninho Douglas e Vinícius", file: "Figurinha_part_MC_Bruninho_Douglas_e_Vinícius[1].mp3" },
  { title: "Gata Only - CrisMj with FloyyMenor", file: "Gata Only - CrisMj with FloyyMenor.mp3" },
  { title: "Komang - Raim Laode", file: "Komang-Raim Laode.mp3" },
  { title: "Mangu - Fourtwnty, Charita Utami", file: "Mangu - Fourtwnty feat Charita Utami.mp3" },
  { title: "Mejikuhibiniu - Tenxi, Suisei, Jemsii", file: "Mejikuhibiniu - Tenxi, suisei & Jemsii.mp3" },
  { title: "Monolog - Pamungkas", file: "Monolog - Pamungkas .mp3" },
  { title: "Ours To Keep - Kendis, Adis", file: "Ours To Keep - Kendis ft Adis.mp3" },
  { title: "Sailor Song - Gigi Perez", file: "Sailor Song - Gigi Perez.mp3" },
  { title: "Salvatore - Lana Del Rey", file: "Salvatore - Lana Del Rey.mp3" },
  { title: "Show Me Love - WizTheMc, Tyla", file: "Show Me Love - WizTheMc ft Tyla.mp3" },
  { title: "Sou Favela - MC Bruninho Vitinho Ferrari Letra", file: "Sou_Favela - MC Bruninho Vitinho Ferrari Letra.mp3" },
  { title: "Tarot - Feast", file: "Tarot_-_Feast[1].mp3" },
  { title: "Terbuang Dalam Waktu - Barasuara", file: "Terbuang Dalam Waktu - Barasuara.mp3" },
  { title: "The Hills - The Weeknd", file: "The Hills - The Weeknd.mp3" },
];

const audio = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");
const playBtn = document.getElementById("playBtn");
const skipBtn = document.getElementById("skipBtn");
const search = document.getElementById("search");
const songList = document.getElementById("songList");

let randomPool = [];
let currentIndex = -1;

/* 🔹 SIAPKAN BEBERAPA LAGU RANDOM DI AWAL */
function initRandomSongs(jumlah = 5) {
  const shuffled = [...songs].sort(() => 0.5 - Math.random());
  randomPool = shuffled.slice(0, jumlah);
}

/* 🔹 PUTAR LAGU */
function playSong(song) {
  audio.src = song.file;
  songTitle.textContent = song.title;
  audio.load();
  audio.play();
}

/* 🔹 PUTAR RANDOM DARI RANDOM POOL */
function playRandomFromPool() {
  if (randomPool.length === 0) return;

  let index;
  do {
    index = Math.floor(Math.random() * randomPool.length);
  } while (index === currentIndex);

  currentIndex = index;
  playSong(randomPool[index]);
}

/* ▶ PLAY */
playBtn.addEventListener("click", () => {
  playRandomFromPool();
});

/* ⏭ SKIP */
skipBtn.addEventListener("click", () => {
  playRandomFromPool();
});

/* 🔁 AUTO NEXT */
audio.addEventListener("ended", () => {
  playRandomFromPool();
});

/* 🔍 SEARCH (TETAP BERFUNGSI) */
search.addEventListener("input", () => {
  const keyword = search.value.toLowerCase();
  songList.innerHTML = "";

  if (keyword === "") {
    songList.style.display = "none";
    return;
  }

  const filtered = songs.filter(song =>
    song.title.toLowerCase().includes(keyword)
  );

  filtered.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.onclick = () => {
      playSong(song);
      songList.style.display = "none";
      search.value = "";
    };
    songList.appendChild(li);
  });

  songList.style.display = "block";
});

/* 🔹 INISIALISASI SAAT HALAMAN DIBUKA */
initRandomSongs();

/* 📜 DATA SEJARAH MUSIK */
const musicHistory = [
  {
    era: "Musik Klasik",
    text: "Musik klasik berkembang pada abad ke-18 dan ke-19 dengan tokoh seperti Mozart dan Beethoven."
  },
  {
    era: "Musik Jazz",
    text: "Jazz berasal dari komunitas Afrika-Amerika pada awal abad ke-20 dengan ciri improvisasi."
  },
  {
    era: "Musik Rock",
    text: "Rock berkembang pada tahun 1950-an dan dipopulerkan oleh Elvis Presley dan The Beatles."
  },
  {
    era: "Musik Pop",
    text: "Musik pop bersifat ringan dan mudah diterima, berkembang pesat sejak tahun 1980-an."
  },
  {
    era: "Musik Digital",
    text: "Era digital memungkinkan musik diakses secara online melalui streaming dan platform digital."
  }
];

let historyIndex = 0;

const eraEl = document.getElementById("era");
const historyTextEl = document.getElementById("historyText");

/* 🔁 GANTI SEJARAH OTOMATIS */
function updateHistory() {
  eraEl.textContent = musicHistory[historyIndex].era;
  historyTextEl.textContent = musicHistory[historyIndex].text;

  historyIndex++;
  if (historyIndex >= musicHistory.length) {
    historyIndex = 0;
  }
}

/* tampil pertama */
updateHistory();

/* ganti setiap 6 detik */
setInterval(updateHistory, 6000);


