const songs = [
  { title: "Back To Friends - Sombr", file: "Back To Friends-Sombr.mp3" },
  { title: "Better - Khalid", file: "Better - Khalid.mp3" },
  { title: "Calma Remix - Pedro Capó Farruko", file: "Calma_Remix_-_Pedro_Capó_Farruko[1].mp3" },
  { title: "Cincin - Hindia", file: "Cincin_-_Hindia[1].mp3" },
  { title: "Ponte Bonita - CrisMj", file: "Cris_MJ_Ponte_Bonita_Visualizer_Partyson[2].mp3" },
  { title: "Daddy's Home - Usher, Plies", file: "Daddy's Home -Usher ft Plies.mp3" },
  { title: "Di Ujung Jalan - Samsons", file: "Di Ujung Jalan - Samsons.mp3" },
  { title: "Earned It - The Weeknd", file: "Earned It - The Weeknd.mp3" },
  { title: "Everything U Are - Hindia", file: "Everything_u_are_-_Hindia[1].mp3" },
  { title: "Eyes Off You - Prettymuch", file: "Eyes Off You - Prettymuch.mp3" }
];

const audio = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");
const songList = document.getElementById("songList");
const search = document.getElementById("search");

let currentIndex = -1;

function playSong(song) {
  audio.src = song.file;
  songTitle.textContent = song.title;
  audio.play();
}

function randomSong() {
  let index;
  do {
    index = Math.floor(Math.random() * songs.length);
  } while (index === currentIndex);

  currentIndex = index;
  playSong(songs[index]);
}

/* auto lanjut random kalau lagu selesai */
audio.addEventListener("ended", randomSong);

/* list lagu */
function showSongs(list) {
  songList.innerHTML = "";
  list.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.onclick = () => playSong(song);
    songList.appendChild(li);
  });
}

/* search */
search.addEventListener("input", () => {
  const keyword = search.value.toLowerCase();
  if (keyword === "") {
    songList.style.display = "none";
    return;
  }

  const filtered = songs.filter(song =>
    song.title.toLowerCase().includes(keyword)
  );

  songList.style.display = "block";
  showSongs(filtered);
});

/* pertama kali masuk web */
randomSong();
