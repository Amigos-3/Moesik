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
  { title: "Eyes Off You - Prettymuch", file: "Eyes Off You - Prettymuch.mp3" },
  { title: "Figurinha part MC Bruninho Douglas e Vinícius", file: "Figurinha_part_MC_Bruninho_Douglas_e_Vinícius[1].mp3" },
  { title: "Gata Only - CrisMj with FloyyMenor", file: "Gata Only - CrisMj with FloyyMenor.mp3" },
  { title: "Komang - Raim Laode", file: "Komang-Raim Laode.mp3" },
  { title: "Mangu - Fourtwnty, Charita Utami", file: "Mangu -Fourtwnty feat Charita Utami.mp3" },
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
  { title: "", file: "" },
];

const audio = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");
const songList = document.getElementById("songList");
const search = document.getElementById("search");

function playSong(song) {
  audio.src = song.file;
  songTitle.innerText = song.title;
  audio.play();
}

function randomSong() {
  const randomIndex = Math.floor(Math.random() * songs.length);
  playSong(songs[randomIndex]);
}
// Kalau lagu selesai, lanjut lagu random
audio.addEventListener("ended", () => {
  randomSong();
});

function showSongs(list) {
  songList.innerHTML = "";
  list.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.onclick = () => playSong(song);
    songList.appendChild(li);
  });
}

search.addEventListener("input", () => {
  const keyword = search.value.toLowerCase();
  const filtered = songs.filter(song =>
    song.title.toLowerCase().includes(keyword)
  );
  showSongs(filtered);
});

showSongs(songs);
randomSong();

