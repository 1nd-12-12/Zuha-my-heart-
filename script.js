(() => {
  'use strict';

  const CHAPTER_DURATION_MS = 6500;

  const CASCADE_LINES = [
    'Z💐',
    'ZU♥️',
    'ZUH💓',
    'ZUHA👾',
    'ZUHA I💞',
    'ZUHA I L✨',
    'ZUHA I LO❤️‍🩹',
    'ZUHA I LOV🫀',
    'ZUHA I LOVE🤍',
    'ZUHA I LOVE Y🖤',
    'ZUHA I LOVE YO🤎',
    'ZUHA I LOVE YOU 🫂',
    'ZUHA I LOVE YOU Z💌',
    'ZUHA I LOVE YOU ZU💝',
    'ZUHA I LOVE YOU ZUH💟',
    'ZUHA I LOVE YOU ZUHA❣️'
  ];

  const FINAL_LOVE_ZUHA = 'I LOVE YOU ZUHA';
  const FINAL_BACCHA = 'MERA BACCHA 💐✨';

  const CHAPTERS = [
    {
      roman: 'CHAPTER I',
      image: 'Zuha1.jpg',
      audio: 'Zuha1.mp3',
      title: 'Jahan Tum Ho, Wahin Sukoon Hai',
      shayari:
        '“Teri ek muskurahat pe yeh dil haar baithe hain,\n' +
        'Har khushi apni tere naam waar baithe hain,\n' +
        'Log dhoondhte hain jannat aasmaanon mein kahin,\n' +
        'Aur hum teri aankhon mein apna jahan pa baithe hain.”',
      note: 'Har pal tumhare saath sabse khaas lagta hai, Zuha.'
    },
    {
      roman: 'CHAPTER II',
      image: 'Zuha2.jpg',
      audio: 'Zuha2.mp3',
      title: 'Chand Bhi Sharma Jaaye',
      shayari:
        '“Teri saadgi mein bhi ek alag hi noor hai,\n' +
        'Tu paas ho toh har gham mujhse door hai,\n' +
        'Chaand bhi dekhe tujhe toh rashk kar baithe,\n' +
        'Meri Zuha toh khuda ki sabse haseen hoor hai.”',
      note: 'Tumhari saadgi aur muskaan dil chura leti hai.'
    },
    {
      roman: 'CHAPTER III',
      image: 'Zuha3.jpg',
      audio: 'Zuha3.mp3',
      title: 'Meri Har Dua Ka Jawab Ho Tum',
      shayari:
        '“Meri har dua mein tera hi zikr rehta hai,\n' +
        'Har pal bas tera hi fikr rehta hai,\n' +
        'Kaise bataun kitni mohabbat hai tumse,\n' +
        'Meri har dhadkan mein sirf Zuha naam behta hai.”',
      note: 'Meri har dua mein sirf tumhara naam rehta hai.'
    },
    {
      roman: 'CHAPTER IV',
      image: 'Zuha4.jpg',
      audio: 'Zuha4.mp3',
      title: 'Tere Saath Har Safar Khoobsurat Hai',
      shayari:
        '“Haath thaam lo mera toh safar aasaan ho jaaye,\n' +
        'Tere sang har mushkil bhi meherbaan ho jaaye,\n' +
        'Bas itni si khwahish hai is dil ki, Mera Baccha,\n' +
        'Meri har subah aur har shaam tere naam ho jaaye.”',
      note: 'Tumhara saath har safar ko khoobsurat bana deta hai.'
    },
    {
      roman: 'CHAPTER V',
      image: 'Zuha5.jpg',
      audio: 'Zuha5.mp3',
      title: 'Mera Aaj, Mera Kal, Meri Zuha',
      shayari:
        '“Na waqt badlega, na yeh pyaar kam hoga,\n' +
        'Har janam mein tera hi intezaar humko hoga,\n' +
        'Tu meri zindagi ki sabse khoobsurat kahani hai,\n' +
        'Mera aaj, mera kal, aur mera har pal sirf tera hoga.”',
      note: 'Mera aaj, mera kal, aur mera har pal tumhare naam.'
    }
  ];

  const LETTER_WORDS =
    'Meri pyaari Zuha, jab tum muskurati ho toh har uljhan aasaan lagti hai. ' +
    'Tumhare saath bitaya har ek pal mere dil ke sabse kareeb hai. ' +
    'I love you Zuha, Mera Baccha.';

  const HEART_MESSAGES = [
    'You are my favourite person.',
    'My happiness starts with you.',
    'You make my world beautiful.'
  ];

  // Strictly one view shown at a time
  const screens = {
    intro: document.getElementById('viewIntro'),
    confession: document.getElementById('viewConfession'),
    chapter: document.getElementById('viewChapter'),
    letter: document.getElementById('viewLetter'),
    heartQuestion: document.getElementById('viewHeartQuestion'),
    finale: document.getElementById('viewFinale')
  };

  function showOnlyScreen(targetKey) {
    Object.entries(screens).forEach(([key, el]) => {
      const active = key === targetKey;
      el.classList.toggle('is-shown', active);
      if (active) el.scrollTop = 0;
    });
  }

  // Audio Engine (Single track at a time)
  const audioPlayer = document.getElementById('audioPlayer');
  const audioHud = document.getElementById('audioHud');
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const eqBars = document.getElementById('eqBars');
  const musicBtnLabel = document.getElementById('musicBtnLabel');
  const nowPlayingText = document.getElementById('nowPlayingText');
  const volumeSlider = document.getElementById('volumeSlider');
  const sfxBtn = document.getElementById('sfxBtn');
  const toast = document.getElementById('toast');

  let currentAudioFile = '';
  let pausedByUser = false;
  let sfxOn = true;
  let audioCtx = null;

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2500);
  }

  function chime(freq = 640) {
    if (!sfxOn) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.11);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.11);
    } catch (_) {}
  }

  function updateMusicUI(playing) {
    eqBars.classList.toggle('active', playing);
    musicBtnLabel.textContent = playing ? 'PAUSE' : 'PLAY';
  }

  function playTrack(file) {
    nowPlayingText.textContent = file;
    if (currentAudioFile !== file) {
      audioPlayer.pause();
      try {
        audioPlayer.currentTime = 0;
      } catch (_) {}
      currentAudioFile = file;
      audioPlayer.src = file;
      audioPlayer.loop = true;
      audioPlayer.load();
    }
    audioPlayer.volume = parseFloat(volumeSlider.value);
    if (pausedByUser) {
      updateMusicUI(false);
      return;
    }
    const p = audioPlayer.play();
    if (p && typeof p.then === 'function') {
      p.then(() => updateMusicUI(true)).catch(() => {
        updateMusicUI(false);
        showToast('Tap PLAY to start music ♪');
      });
    }
  }

  audioPlayer.addEventListener('error', () => {
    updateMusicUI(false);
    if (currentAudioFile) showToast(`Add "${currentAudioFile}" to folder`);
  });

  musicToggleBtn.addEventListener('click', () => {
    chime(580);
    if (audioPlayer.paused) {
      pausedByUser = false;
      const f = currentAudioFile || 'Zuha1.mp3';
      if (!audioPlayer.src || currentAudioFile !== f) {
        currentAudioFile = f;
        audioPlayer.src = f;
        audioPlayer.loop = true;
      }
      audioPlayer.volume = parseFloat(volumeSlider.value);
      audioPlayer.play().then(() => updateMusicUI(true)).catch(() => showToast(`Missing ${f}`));
    } else {
      pausedByUser = true;
      audioPlayer.pause();
      updateMusicUI(false);
    }
  });

  volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = parseFloat(volumeSlider.value);
  });

  sfxBtn.addEventListener('click', () => {
    sfxOn = !sfxOn;
    sfxBtn.textContent = sfxOn ? 'SFX ON' : 'SFX OFF';
  });

  // Sequence Timers
  let cascadeTimer = null;
  let finalWordTimer = null;
  let chapterTimer = null;
  let chapterBarTimer = null;
  let letterWordTimer = null;

  function clearTimers() {
    clearInterval(cascadeTimer);
    clearInterval(finalWordTimer);
    clearTimeout(chapterTimer);
    clearInterval(chapterBarTimer);
    clearInterval(letterWordTimer);
  }

  // Step 2: Z -> ZUHA I LOVE YOU ZUHA going downward, then next page
  const cascadeLines = document.getElementById('cascadeLines');
  const confessionBox = document.getElementById('confessionBox');
  const typedLoveZuha = document.getElementById('typedLoveZuha');
  const typedBacchaLine = document.getElementById('typedBacchaLine');
  const confessionHint = document.getElementById('confessionHint');

  function runConfessionDownward() {
    clearTimers();
    showOnlyScreen('confession');
    cascadeLines.innerHTML = '';
    typedLoveZuha.textContent = '';
    typedBacchaLine.textContent = '';
    confessionHint.textContent = 'Likhte hue neeche ja raha hai...';

    let i = 0;
    cascadeTimer = setInterval(() => {
      if (i < CASCADE_LINES.length) {
        const div = document.createElement('div');
        div.className = 'cascade-line';
        div.textContent = CASCADE_LINES[i];
        cascadeLines.appendChild(div);
        confessionBox.scrollTop = confessionBox.scrollHeight;
        i++;
      } else {
        clearInterval(cascadeTimer);
        const loveWords = FINAL_LOVE_ZUHA.split(' ');
        const bacchaWords = FINAL_BACCHA.split(' ');
        let a = 0;
        let b = 0;

        finalWordTimer = setInterval(() => {
          if (a < loveWords.length) {
            typedLoveZuha.textContent += (a === 0 ? '' : ' ') + loveWords[a++];
            confessionBox.scrollTop = confessionBox.scrollHeight;
          } else if (b < bacchaWords.length) {
            typedBacchaLine.textContent += (b === 0 ? '' : ' ') + bacchaWords[b++];
            confessionBox.scrollTop = confessionBox.scrollHeight;
          } else {
            clearInterval(finalWordTimer);
            confessionHint.textContent = 'Animation poora hua — agla page khul raha hai...';
            setTimeout(() => {
              runChapterStep(0);
            }, 1150);
          }
        }, 250);
      }
    }, 310);
  }

  // Step 3: Auto-advancing chapters (1 -> 2 -> 3 -> 4 -> 5 -> Letter)
  const chapBadge = document.getElementById('chapBadge');
  const chapSongBadge = document.getElementById('chapSongBadge');
  const chapImg = document.getElementById('chapImg');
  const chapFallback = document.getElementById('chapFallback');
  const chapFallbackMsg = document.getElementById('chapFallbackMsg');
  const chapTitle = document.getElementById('chapTitle');
  const chapShayari = document.getElementById('chapShayari');
  const chapNote = document.getElementById('chapNote');
  const chapBarFill = document.getElementById('chapBarFill');
  const chapHint = document.getElementById('chapHint');

  let activeChapterIdx = 0;

  function runChapterStep(index) {
    clearTimers();
    activeChapterIdx = index;
    const ch = CHAPTERS[index];

    showOnlyScreen('chapter');
    playTrack(ch.audio);
    burst(16);

    chapBadge.textContent = ch.roman;
    chapSongBadge.textContent = ch.audio;
    chapTitle.textContent = ch.title;
    chapShayari.textContent = ch.shayari;
    chapNote.textContent = ch.note;

    chapFallback.classList.remove('show');
    chapImg.style.display = 'block';
    chapImg.onerror = () => {
      chapImg.style.display = 'none';
      chapFallbackMsg.textContent = `Add "${ch.image}" to folder`;
      chapFallback.classList.add('show');
    };
    chapImg.src = ch.image;
    chapImg.alt = ch.title;

    chapBarFill.style.width = '0%';
    chapHint.textContent =
      index < CHAPTERS.length - 1
        ? 'Animation khatam hote hi agla surprise page khulega...'
        : 'Aakhiri chapter ke baad Letter page khulega...';

    const start = Date.now();
    chapterBarTimer = setInterval(() => {
      const pct = Math.min(100, ((Date.now() - start) / CHAPTER_DURATION_MS) * 100);
      chapBarFill.style.width = `${pct}%`;
    }, 80);

    chapterTimer = setTimeout(() => {
      clearInterval(chapterBarTimer);
      chapBarFill.style.width = '100%';
      if (index < CHAPTERS.length - 1) {
        runChapterStep(index + 1);
      } else {
        runLetterStep();
      }
    }, CHAPTER_DURATION_MS);
  }

  // Step 4: Letter -> Heart & Question
  const letterTyped = document.getElementById('letterTyped');
  const letterHint = document.getElementById('letterHint');

  function runLetterStep() {
    clearTimers();
    showOnlyScreen('letter');
    letterTyped.textContent = '';
    letterHint.textContent = 'Letter likha ja raha hai...';

    const words = LETTER_WORDS.split(' ');
    let idx = 0;
    letterWordTimer = setInterval(() => {
      if (idx < words.length) {
        letterTyped.textContent += (idx === 0 ? '' : ' ') + words[idx++];
      } else {
        clearInterval(letterWordTimer);
        letterHint.textContent = 'Agla surprise page khul raha hai...';
        setTimeout(() => {
          showOnlyScreen('heartQuestion');
        }, 1200);
      }
    }, 150);
  }

  // Step 5: Heart & Question -> Finale
  const glowHeartBtn = document.getElementById('glowHeartBtn');
  const heartQuote = document.getElementById('heartQuote');
  const heartTapCount = document.getElementById('heartTapCount');
  const yesChoiceBtn = document.getElementById('yesChoiceBtn');
  const letsSeeChoiceBtn = document.getElementById('letsSeeChoiceBtn');
  const choiceReply = document.getElementById('choiceReply');
  const toFinaleBtn = document.getElementById('toFinaleBtn');
  let taps = 0;

  glowHeartBtn.addEventListener('click', () => {
    chime(780);
    taps++;
    heartQuote.textContent = HEART_MESSAGES[(taps - 1) % HEART_MESSAGES.length];
    heartTapCount.textContent = `Taps: ${taps}`;
    glowHeartBtn.classList.add('pop');
    setTimeout(() => glowHeartBtn.classList.remove('pop'), 220);
    burst(24);
  });

  yesChoiceBtn.addEventListener('click', () => {
    chime(820);
    choiceReply.textContent = 'Tumne mera dil khush kar diya, Zuha! ❤️✨';
    burst(32);
    setTimeout(() => showOnlyScreen('finale'), 1200);
  });

  letsSeeChoiceBtn.addEventListener('click', () => {
    chime(650);
    choiceReply.textContent = 'Koi jaldi nahi hai, Zuha — bina kisi pressure ke, main yahin hoon 💗';
    setTimeout(() => showOnlyScreen('finale'), 1400);
  });

  toFinaleBtn.addEventListener('click', () => {
    chime(720);
    showOnlyScreen('finale');
    burst(30);
  });

  // Lightbox & Secret Modal
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const fullViewBtn = document.getElementById('fullViewBtn');
  const closeLightbox = document.getElementById('closeLightbox');

  fullViewBtn.addEventListener('click', () => {
    const ch = CHAPTERS[activeChapterIdx];
    lightboxImg.src = ch.image;
    lightboxCaption.textContent = `${ch.roman} — ${ch.title}`;
    lightbox.classList.add('open');
  });
  closeLightbox.addEventListener('click', () => lightbox.classList.remove('open'));

  const secretModal = document.getElementById('secretModal');
  const onlyForZuhaBtn = document.getElementById('onlyForZuhaBtn');
  const closeSecret = document.getElementById('closeSecret');
  onlyForZuhaBtn.addEventListener('click', () => {
    chime(750);
    secretModal.classList.add('open');
  });
  closeSecret.addEventListener('click', () => secretModal.classList.remove('open'));

  // Start & Finale
  document.getElementById('startJourneyBtn').addEventListener('click', () => {
    chime(660);
    audioHud.classList.remove('is-off');
    pausedByUser = false;
    playTrack('Zuha1.mp3');
    burst(25);
    runConfessionDownward();
  });

  document.getElementById('burstLoveBtn').addEventListener('click', () => {
    chime(840);
    burst(55);
    showToast('I LOVE YOU ZUHA, MERA BACCHA 💐✨');
  });

  document.getElementById('replayAllBtn').addEventListener('click', () => {
    runConfessionDownward();
  });

  // Ambient Canvas
  const canvas = document.getElementById('ambientCanvas');
  const ctx = canvas.getContext('2d');
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 36 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 4 + 2,
    vy: Math.random() * 0.7 + 0.3,
    vx: (Math.random() - 0.5) * 0.5
  }));

  function burst(n) {
    for (let i = 0; i < n; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 5 + 2.5,
        vy: Math.random() * 1.1 + 0.4,
        vx: (Math.random() - 0.5) * 1.1
      });
    }
    if (particles.length > 105) particles.splice(0, particles.length - 105);
  }

  function renderParticles() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.y += p.vy;
      p.x += p.vx;
      if (p.y > h + 10) {
        p.y = -10;
        p.x = Math.random() * w;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 223, 184, 0.35)';
      ctx.fill();
    }
    requestAnimationFrame(renderParticles);
  }
  renderParticles();
})();
