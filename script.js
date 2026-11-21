
document.addEventListener("DOMContentLoaded", () => {

  // LOADER
  window.addEventListener("load", () => {
    document.getElementById("loader").classList.add("done");
  });

  // LOVE TEXT: every line stays visible after appearing
  const loveMessages = [
    "Z💐",
    "ZU♥️",
    "ZUH💓",
    "ZUHA👾",
    "ZUHA I💞",
    "ZUHA I L✨",
    "ZUHA I LO❤️‍🩹",
    "ZUHA I LOV🫀",
    "ZUHA I LOVE🤍",
    "ZUHA I LOVE Y🖤",
    "ZUHA I LOVE YO🤎",
    "ZUHA I LOVE YOU 🫂",
    "ZUHA I LOVE YOU S💌",
    "ZUHA I LOVE YOU SO💝",
    "ZUHA I LOVE YOU SO M💟",
    "ZUHA I LOVE YOU SO MU🌸",
    "ZUHA I LOVE YOU SO MUC🥀",
    "ZUHA I LOVE YOU SO MUCH❣️"
  ];

  const loveContainer = document.getElementById("loveLines");
  const loveFinal = document.getElementById("loveFinal");
  let animationStarted = false;
  let animationTimers = [];

  function playLoveAnimation() {
    animationTimers.forEach(clearTimeout);
    animationTimers = [];
    loveContainer.innerHTML = "";
    loveFinal.classList.add("hidden");
    animationStarted = true;

    loveMessages.forEach((message, index) => {
      const timer = setTimeout(() => {
        const line = document.createElement("div");
        line.className = "love-line";
        line.textContent = message;
        loveContainer.appendChild(line);

        requestAnimationFrame(() => {
          line.classList.add("visible");
        });

        if (index === loveMessages.length - 1) {
          const finalTimer = setTimeout(() => {
            loveFinal.classList.remove("hidden");
          }, 1100);
          animationTimers.push(finalTimer);
        }
      }, index * 750);

      animationTimers.push(timer);
    });
  }

  const loveObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !animationStarted) {
      playLoveAnimation();
    }
  }, { threshold: 0.2 });

  loveObserver.observe(document.getElementById("love"));

  document.getElementById("replayLove").addEventListener("click", () => {
    playLoveAnimation();
  });

  // MUSIC: one shared audio element, one track at a time
  const audio = document.getElementById("audioPlayer");
  const trackName = document.getElementById("trackName");
  const trackStatus = document.getElementById("trackStatus");
  const playerPlay = document.getElementById("playerPlay");
  const musicToggle = document.getElementById("musicToggle");

  const tracks = [
    { file: "Zuha1.mp3", name: "The First Feeling" },
    { file: "Zuha2.mp3", name: "My Beautiful World" },
    { file: "Zuha3.mp3", name: "My Favourite Person" },
    { file: "Zuha4.mp3", name: "Forever Together" },
    { file: "Zuha5.mp3", name: "My Forever" }
  ];

  let currentTrack = -1;

  async function playTrack(index) {
    if (index < 0 || index >= tracks.length) return;

    const track = tracks[index];

    if (currentTrack !== index) {
      audio.pause();
      audio.src = track.file;
      audio.load();
      currentTrack = index;
    }

    try {
      await audio.play();
      trackName.textContent = track.name;
      trackStatus.textContent = "Now playing for Zuha ❤️";
      playerPlay.textContent = "Ⅱ";
      musicToggle.textContent = "♫ Playing";
    } catch (error) {
      trackStatus.textContent = "Tap play to start the music";
      playerPlay.textContent = "▶";
      console.warn("Audio could not play:", error);
    }
  }

  document.querySelectorAll(".play-track").forEach(button => {
    button.addEventListener("click", () => {
      playTrack(Number(button.dataset.track));
    });
  });

  playerPlay.addEventListener("click", async () => {
    if (currentTrack === -1) {
      playTrack(0);
    } else if (audio.paused) {
      try {
        await audio.play();
        playerPlay.textContent = "Ⅱ";
        musicToggle.textContent = "♫ Playing";
        trackStatus.textContent = "Now playing for Zuha ❤️";
      } catch (error) {
        trackStatus.textContent = "Unable to play this track";
      }
    } else {
      audio.pause();
      playerPlay.textContent = "▶";
      musicToggle.textContent = "♫ Music";
      trackStatus.textContent = "Music paused";
    }
  });

  musicToggle.addEventListener("click", () => {
    playerPlay.click();
  });

  audio.addEventListener("ended", () => {
    playerPlay.textContent = "▶";
    musicToggle.textContent = "♫ Music";
    trackStatus.textContent = "Track finished";
  });

  audio.addEventListener("error", () => {
    trackStatus.textContent = "Music file not found. Check its filename.";
    playerPlay.textContent = "▶";
  });

  document.getElementById("volume").addEventListener("input", event => {
    audio.volume = Number(event.target.value);
  });

  audio.volume = 0.8;

  // LOVE LETTER
  document.getElementById("openLetter").addEventListener("click", () => {
    document.getElementById("envelope").classList.add("hidden");
    document.getElementById("letterPaper").classList.remove("hidden");
  });

  // HEART EXPLOSION
  const heartMessages = [
    "You are my favourite person. ❤️",
    "My happiness starts with you. 💗",
    "You make my world beautiful. 🌹",
    "Always keep smiling, Zuha. ✨",
    "You are truly special. 🫂"
  ];

  let heartIndex = 0;

  document.getElementById("bigHeart").addEventListener("click", event => {
    document.getElementById("heartMessage").textContent =
      heartMessages[heartIndex % heartMessages.length];

    heartIndex++;

    const rect = event.currentTarget.getBoundingClientRect();

    for (let i = 0; i < 12; i++) {
      const heart = document.createElement("span");
      heart.className = "heart-pop";
      heart.textContent = ["❤️", "💗", "💕", "✨"][i % 4];

      heart.style.left = rect.left + rect.width / 2 + "px";
      heart.style.top = rect.top + rect.height / 2 + "px";
      heart.style.setProperty("--x", (Math.random() * 240 - 120) + "px");

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1400);
    }
  });

  // QUESTION
  document.getElementById("yesBtn").addEventListener("click", () => {
    document.getElementById("answerMessage").textContent =
      "Awww! Here's to beautiful memories and endless smiles. ❤️";
  });

  document.getElementById("maybeBtn").addEventListener("click", () => {
    document.getElementById("answerMessage").textContent =
      "No pressure, Zuha. Take your time. Your happiness matters. 💗";
  });

  // SECRET MESSAGE
  document.getElementById("secretButton").addEventListener("click", () => {
    const message = document.getElementById("secretMessage");
    message.classList.remove("hidden");
    document.getElementById("secretButton").textContent = "✨ YOUR SECRET IS OPEN";
    document.getElementById("secretButton").disabled = true;
  });

  // FALLING ROSE PETALS
  const petals = document.getElementById("petals");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion) {
    setInterval(() => {
      const petal = document.createElement("span");
      petal.className = "petal";
      petal.textContent = ["🌸", "🌹", "💗"][Math.floor(Math.random() * 3)];
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.fontSize = (12 + Math.random() * 13) + "px";
      petal.style.animationDuration = (7 + Math.random() * 7) + "s";
      petals.appendChild(petal);

      setTimeout(() => petal.remove(), 15000);
    }, 1100);
  }

  // SCROLL REVEAL
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(element => {
    revealObserver.observe(element);
  });

});
