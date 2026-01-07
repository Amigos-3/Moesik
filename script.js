const songs = [
  { title: "Back To Friends - Sombr", file: "Back To Friends-Sombr.mp3" },
  { title: "Better - Khalid", file: "Better - Khalid.mp3" },
  { title: "Calma Remix - Pedro Ca", file: "assets/audio/lagu3.mp3" },
  { title: "Cincin - Hindia", file: "assets/audio/lagu4.mp3" },
  { title: "Ponte Bonita - CrisMj", file: "assets/audio/lagu5.mp3" },
];

const audio = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");
const songList = document.getElementById("songList");
const search = document.getElementById("search");

/* RANDOM SAAT WEB DIBUKA */
function randomSong() {
  const random = Math.floor(Math.random() * songs.length);
  audio.src = songs[random].file;
  songTitle.innerText = songs[random].title;
  audio.play();
}

/* TAMPILKAN LIST */
function showSongs(list) {
  songList.innerHTML = "";
  list.forEach(song => {
    const li = document.createElement("li");
    li.innerText = song.title;
    li.onclick = () => {
      audio.src = song.file;
      songTitle.innerText = song.title;
      audio.play();
    };
    songList.appendChild(li);
  });
}

/* SEARCH */
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  const filtered = songs.filter(song =>
    song.title.toLowerCase().includes(value)
  );
  showSongs(filtered);
});

showSongs(songs);
randomSong();
