
/* ==========================================================================
   ZUHA — MY FOREVER LOVE
   Complete Interactive Experience, Audio Engine & Particle System
   ========================================================================== */

(() => {
  'use strict';

  /* ------------------------------------------------------------------------
     CONFIGURABLE DATES & EDITABLE ROMANTIC CONTENT
     ------------------------------------------------------------------------ */
  // Change this date to your special day with Zuha (YYYY-MM-DDTHH:MM:SS)
  const SPECIAL_DATE_ISO = '2025-02-14T00:00:00';

  const LOVE_SEQUENCE_LINES = [
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
    'ZUHA I LOVE YOU S💌',
    'ZUHA I LOVE YOU SO💝',
    'ZUHA I LOVE YOU SO M💟',
    'ZUHA I LOVE YOU SO MU🌸',
    'ZUHA I LOVE YOU SO MUC🥀',
    'ZUHA I LOVE YOU SO MUCH❣️'
  ];

  const FINAL_LOVE_TEXT = 'I LOVE YOU SO MUCH';
  const FINAL_BACCHA_TEXT = 'MERA BACCHA 💐✨';

  // Preserves all 5 original photos (Zuha1.jpg–Zuha5.jpg), music (Zuha1.mp3–Zuha5.mp3), and shayari
  const CHAPTERS = [
    {
      roman: 'CHAPTER I',
      mood: 'THE BEGINNING OF MAGIC',
      title: 'Jahan Tum Ho, Wahin Sukoon Hai',
      image: 'Zuha1.jpg',
      audio: 'Zuha1.mp3',
      songLabel: 'Zuha1.mp3',
      shayari:
        '“Teri ek muskurahat pe yeh dil haar baithe hain,\n' +
        'Har khushi apni tere naam waar baithe hain,\n' +
        'Log dhoondhte hain jannat aasmaanon mein kahin,\n' +
        'Aur hum teri aankhon mein apna jahan pa baithe hain.”',
      reflection:
        'Every time I look at you, Zuha, the noise of the entire world fades into silence.'
    },
    {
      roman: 'CHAPTER II',
      mood: 'UNSPOKEN BEAUTY',
      title: 'Chand Bhi Sharma Jaaye',
      image: 'Zuha2.jpg',
      audio: 'Zuha2.mp3',
      songLabel: 'Zuha2.mp3',
      shayari:
        '“Teri saadgi mein bhi ek alag hi noor hai,\n' +
        'Tu paas ho toh har gham mujhse door hai,\n' +
        'Chaand bhi dekhe tujhe toh rashk kar baithe,\n' +
        'Meri Zuha toh khuda ki sabse haseen hoor hai.”',
      reflection:
        'Grace, warmth, and effortless magic — you make every frame unforgettable.'
    },
    {
      roman: 'CHAPTER III',
      mood: 'HEARTBEAT & SOUL',
      title: 'Meri Har Dua Ka Jawab Ho Tum',
      image: 'Zuha3.jpg',
      audio: 'Zuha3.mp3',
      songLabel: 'Zuha3.mp3',
      shayari:
        '“Meri har dua mein tera hi zikr rehta hai,\n' +
        'Har pal bas tera hi fikr rehta hai,\n' +
        'Kaise bataun kitni mohabbat hai tumse,\n' +
        'Meri har dhadkan mein sirf Zuha naam behta hai.”',
      reflection:
        'In a world full of temporary things, you are the feeling I want to keep forever.'
    },
    {
      roman: 'CHAPTER IV',
      mood: 'DESTINY & DEVOTION',
      title: 'Tere Saath Har Safar Khoobsurat Hai',
      image: 'Zuha4.jpg',
      audio: 'Zuha4.mp3',
      songLabel: 'Zuha4.mp3',
      shayari:
        '“Haath thaam lo mera toh safar aasaan ho jaaye,\n' +
        'Tere sang har mushkil bhi meherbaan ho jaaye,\n' +
        'Bas itni si khwahish hai is dil ki, Mera Baccha,\n' +
        'Meri har subah aur har shaam tere naam ho jaaye.”',
      reflection:
        'With you beside me, every ordinary moment feels like a scene from my favorite dream.'
    },
    {
      roman: 'CHAPTER V',
      mood: 'ETERNAL PROMISE',
      title: 'Mera Aaj, Mera Kal, Meri Zuha',
      image: 'Zuha5.jpg',
      audio: 'Zuha5.mp3',
      songLabel: 'Zuha5.mp3',
      shayari:
        '“Na waqt badlega, na yeh pyaar kam hoga,\n' +
        'Har janam mein tera hi intezaar humko hoga,\n' +
        'Tu meri zindagi ki sabse khoobsurat kahani hai,\n' +
        'Mera aaj, mera kal, aur mera har pal sirf tera hoga.”',
      reflection:
        'Five chapters are only the prologue — our real love story lasts a lifetime.'
    }
  ];

  const SECRET_LETTER_TEXT =
    'Meri pyaari Zuha,\n\n' +
    'Kabhi kabhi sochta hoon ki zindagi ne mujhe sabse khoobsurat tohfa kab diya — ' +
    'aur jawab hamesha tum hoti ho. Jab tum muskurati ho, toh lagta hai jaise har uljhan ' +
    'apne aap sulajh jaaye.\n\n' +
    'Tumhare saath bitaya har ek lamha mere liye kisi geet jaisa hai. Chahe hum baatein karein ' +
    'ya bas khamosh saath baithein, tumhara hona hi kaafi hai mere dil ko sukoon dene ke liye.\n\n' +
    'I love you endlessly, Mera Baccha. Aaj bhi, kal bhi, aur hamesha.';

  const LOVE_MILESTONES = [
    {
      step: 'MILESTONE 01',
      title: 'The Spark That Changed Everything',
      desc: 'A simple moment that quietly turned into the most unforgettable beginning of my heart.'
    },
    {
      step: 'MILESTONE 02',
      title: 'When Your Name Became My Favorite Word',
      desc: 'Saying “Zuha” started feeling warmer than any melody I had ever heard.'
    },
    {
      step: 'MILESTONE 03',
      title: 'Late-Night Talks & Endless Smiles',
      desc: 'Hours felt like minutes whenever we talked about everything and nothing at all.'
    },
    {
      step: 'MILESTONE 04',
      title: 'Finding Home in Your Presence',
      desc: 'No matter how tiring the day got, thinking of you brought instant peace.'
    },
    {
      step: 'MILESTONE 05',
      title: 'Little Moments, Big Memories',
      desc: 'Every glance, every laugh, and every photo became a page in my favorite book.'
    },
    {
      step: 'MILESTONE 06',
      title: 'Standing Together Through Every Mood',
      desc: 'Learning each other’s heartbeats with patience, care, and unspoken understanding.'
    },
    {
      step: 'MILESTONE 07',
      title: 'Dreaming of Tomorrows Together',
      desc: 'Picturing quiet mornings, shared journeys, and a lifetime built side by side.'
    },
    {
      step: 'MILESTONE 08',
      title: 'My Forever Chapter — Zuha',
      desc: 'Not just a memory, not just a phase — you are the story I want to live forever.'
    }
  ];

  const HEART_MESSAGES = [
    'You are my favourite person.',
    'My happiness starts with you.',
    'You make my world beautiful.',
    'Mera Baccha, my heart beats only for you.',
    'Every smile of yours is pure magic to me.'
  ];

  /* ------------------------------------------------------------------------
     DOM REFERENCES
     ------------------------------------------------------------------------ */
  const preloader = document.getElementById('preloader');
  const scrollProgress = document.getElementById('scrollProgress');
  const customCursor = document.getElementById('customCursor');

  const audioPlayer = document.getElementById('bgAudioPlayer');
  const audioHud = document.getElementById('audioHud');
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const musicEqualizer = document.getElementById('musicEqualizer');
  const musicStatusText = document.getElementById('musicStatusText');
  const nowPlayingLabel = document.getElementById('nowPlayingLabel');
  const volumeSlider = document.getElementById('volumeSlider');
  const sfxToggleBtn = document.getElementById('sfxToggleBtn');

  const floatingNav = document.getElementById('floatingNav');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const toastNotice = document.getElementById('toastNotice');

  const enterWorldBtn = document.getElementById('enterWorldBtn');
  const onlyForZuhaBtn = document.getElementById('onlyForZuhaBtn');
  const openSecretFromSectionBtn = document.getElementById('openSecretFromSectionBtn');
  const secretModal = document.getElementById('secretModal');
  const closeSecretBtn = document.getElementById('closeSecretBtn');

  const daysEl = document.getElementById('daysCount');
  const hoursEl = document.getElementById('hoursCount');
  const minutesEl = document.getElementById('minutesCount');
  const secondsEl = document.getElementById('secondsCount');
  const counterCaptionEl = document.getElementById('counterStartCaption');

  const progressiveText = document.getElementById('progressiveText');
  const confessionProgressFill = document.getElementById('confessionProgressFill');
  const finalConfessionBox = document.getElementById('finalConfessionBox');
  const typedLoveLine = document.getElementById('typedLoveLine');
  const typedBacchaLine = document.getElementById('typedBacchaLine');
  const replayConfessionBtn = document.getElementById('replayConfessionBtn');
  const jumpToChaptersBtn = document.getElementById('jumpToChaptersBtn');

  const chapPills = document.querySelectorAll('.chap-pill');
  const activeChapterStage = document.getElementById('activeChapterStage');
  const chapterPhotoFrame = document.getElementById('chapterPhotoFrame');
  const chapterImage = document.getElementById('chapterImage');
  const chapterFallback = document.getElementById('chapterFallback');
  const chapterFallbackText = document.getElementById('chapterFallbackText');
  const chapterBadge = document.getElementById('chapterBadge');
  const chapterShayari = document.getElementById('chapterShayari');
  const chapterMood = document.getElementById('chapterMood');
  const chapterTitle = document.getElementById('chapterTitle');
  const chapterReflection = document.getElementById('chapterReflection');
  const chapterAudioName = document.getElementById('chapterAudioName');
  const prevChapBtn = document.getElementById('prevChapBtn');
  const nextChapBtn = document.getElementById('nextChapBtn');
  const fullscreenPhotoBtn = document.getElementById('fullscreenPhotoBtn');

  const photoLightbox = document.getElementById('photoLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');

  const sealedLetterCover = document.getElementById('sealedLetterCover');
  const unsealedLetterPaper = document.getElementById('unsealedLetterPaper');
  const openLetterBtn = document.getElementById('openLetterBtn');
  const sealLetterAgainBtn = document.getElementById('sealLetterAgainBtn');
  const typedLetterBody = document.getElementById('typedLetterBody');

  const loveTimelineEl = document.getElementById('loveTimeline');

  const interactiveHeartBtn = document.getElementById('interactiveHeartBtn');
  const heartAffirmationText = document.getElementById('heartAffirmationText');
  const heartTapCounter = document.getElementById('heartTapCounter');

  const answerYesBtn = document.getElementById('answerYesBtn');
  const answerLetsSeeBtn = document.getElementById('answerLetsSeeBtn');
  const questionResponseBox = document.getElementById('questionResponseBox');
  const questionResponseText = document.getElementById('questionResponseText');

  const memoryWallGrid = document.getElementById('memoryWallGrid');
  const finaleLoveBurstBtn = document.getElementById('finaleLoveBurstBtn');
  const restartExperienceBtn = document.getElementById('restartExperienceBtn');

  /* ------------------------------------------------------------------------
     STATE & SUBTLE SOUND EFFECTS (Web Audio API)
     ------------------------------------------------------------------------ */
  let currentChapterIndex = 0;
  let currentTrackFile = '';
  let isUserPaused = false;
  let sfxEnabled = true;
  let hasStartedConfession = false;
  let sequenceTimer = null;
  let confessionTypeTimer = null;
  let letterTypeTimer = null;
  let heartTaps = 0;
  let toastTimer = null;
  let audioCtx = null;

  function playSoftChime(freq = 660, duration = 0.14) {
    if (!sfxEnabled) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      if (!audioCtx) audioCtx = new AudioContextClass();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (_) {
      // Ignore audio context restrictions
    }
  }

  function showToast(msg) {
    toastNotice.textContent = msg;
    toastNotice.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastNotice.classList.remove('show'), 3000);
  }

  /* ------------------------------------------------------------------------
     SINGLE-TRACK MUSIC ENGINE (Never plays two songs at once)
     ------------------------------------------------------------------------ */
  function syncAudioUI(isPlaying) {
    musicEqualizer.classList.toggle('playing', isPlaying);
    musicStatusText.textContent = isPlaying ? 'PAUSE' : 'PLAY';
  }

  function stopTrackImmediately() {
    audioPlayer.pause();
    try {
      audioPlayer.currentTime = 0;
    } catch (_) {}
    syncAudioUI(false);
  }

  function playChapterAudio(fileName) {
    nowPlayingLabel.textContent = fileName;

    if (currentTrackFile !== fileName) {
      stopTrackImmediately();
      currentTrackFile = fileName;
      audioPlayer.src = fileName;
      audioPlayer.loop = true;
      audioPlayer.load();
    }

    audioPlayer.volume = parseFloat(volumeSlider.value);

    if (isUserPaused) {
      syncAudioUI(false);
      return;
    }

    const promise = audioPlayer.play();
    if (promise && typeof promise.then === 'function') {
      promise
        .then(() => syncAudioUI(true))
        .catch(() => {
          syncAudioUI(false);
          showToast('Tap PLAY in the top bar to start music ♪');
        });
    }
  }

  audioPlayer.addEventListener('error', () => {
    syncAudioUI(false);
    if (currentTrackFile) {
      showToast(`Place "${currentTrackFile}" in your project folder`);
    }
  });

  musicToggleBtn.addEventListener('click', () => {
    playSoftChime(580, 0.1);
    if (audioPlayer.paused) {
      isUserPaused = false;
      const trackToPlay = currentTrackFile || CHAPTERS[currentChapterIndex].audio;
      if (!audioPlayer.src || currentTrackFile !== trackToPlay) {
        currentTrackFile = trackToPlay;
        audioPlayer.src = trackToPlay;
        audioPlayer.loop = true;
      }
      audioPlayer.volume = parseFloat(volumeSlider.value);
      audioPlayer
        .play()
        .then(() => syncAudioUI(true))
        .catch(() => showToast(`Add "${trackToPlay}" to play audio`));
    } else {
      isUserPaused = true;
      audioPlayer.pause();
      syncAudioUI(false);
    }
  });

  volumeSlider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    audioPlayer.volume = val;
    if (val === 0) {
      isUserPaused = true;
      audioPlayer.pause();
      syncAudioUI(false);
    } else if (audioPlayer.paused && !isUserPaused) {
      audioPlayer.play().then(() => syncAudioUI(true)).catch(() => {});
    }
  });

  sfxToggleBtn.addEventListener('click', () => {
    sfxEnabled = !sfxEnabled;
    sfxToggleBtn.textContent = sfxEnabled ? 'SFX: ON' : 'SFX: OFF';
    if (sfxEnabled) playSoftChime(740, 0.1);
  });

  /* ------------------------------------------------------------------------
     LOVE COUNTER
     ------------------------------------------------------------------------ */
  function updateLoveCounter() {
    const start = new Date(SPECIAL_DATE_ISO).getTime();
    const now = Date.now();
    const diff = Math.max(0, now - start);

    const totalSec = Math.floor(diff / 1000);
    const days = Math.floor(totalSec / 86400);
    const hours = Math.floor((totalSec % 86400) / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');

    const formattedDate = new Date(SPECIAL_DATE_ISO).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    counterCaptionEl.textContent = `Counting every precious moment since ${formattedDate}`;
  }

  updateLoveCounter();
  setInterval(updateLoveCounter, 1000);

  /* ------------------------------------------------------------------------
     ORIGINAL PROGRESSIVE CONFESSION + TYPED FINAL LINES
     ------------------------------------------------------------------------ */
  function typeFinalConfessionLines() {
    clearInterval(confessionTypeTimer);
    typedLoveLine.textContent = '';
    typedBacchaLine.textContent = '';

    const chars1 = Array.from(FINAL_LOVE_TEXT);
    const chars2 = Array.from(FINAL_BACCHA_TEXT);
    let i = 0;
    let j = 0;

    confessionTypeTimer = setInterval(() => {
      if (i < chars1.length) {
        typedLoveLine.textContent += chars1[i++];
      } else if (j < chars2.length) {
        typedBacchaLine.textContent += chars2[j++];
      } else {
        clearInterval(confessionTypeTimer);
        burstParticles(24);
      }
    }, 60);
  }

  function runConfessionSequence() {
    clearInterval(sequenceTimer);
    clearInterval(confessionTypeTimer);

    finalConfessionBox.classList.add('hidden');
    typedLoveLine.textContent = '';
    typedBacchaLine.textContent = '';
    progressiveText.textContent = '';
    confessionProgressFill.style.width = '0%';

    let idx = 0;
    const total = LOVE_SEQUENCE_LINES.length;

    const step = () => {
      if (idx < total) {
        progressiveText.textContent = LOVE_SEQUENCE_LINES[idx];
        progressiveText.classList.remove('pop');
        void progressiveText.offsetWidth;
        progressiveText.classList.add('pop');
        confessionProgressFill.style.width = `${Math.round(((idx + 1) / total) * 100)}%`;
        idx++;
      } else {
        clearInterval(sequenceTimer);
        finalConfessionBox.classList.remove('hidden');
        typeFinalConfessionLines();
      }
    };

    step();
    sequenceTimer = setInterval(step, 420);
  }

  replayConfessionBtn.addEventListener('click', () => {
    playSoftChime(620, 0.12);
    runConfessionSequence();
  });

  jumpToChaptersBtn.addEventListener('click', () => {
    playSoftChime(680, 0.12);
    document.getElementById('chaptersSection').scrollIntoView({ behavior: 'smooth' });
  });

  /* ------------------------------------------------------------------------
     FIVE CINEMATIC PHOTO CHAPTERS (Zuha1.jpg–Zuha5.jpg & Zuha1.mp3–Zuha5.mp3)
     ------------------------------------------------------------------------ */
  function selectChapter(index, shouldPlayAudio = true) {
    currentChapterIndex = index;
    const chap = CHAPTERS[index];

    chapPills.forEach((pill, i) => pill.classList.toggle('active', i === index));

    activeChapterStage.classList.remove('layout-0', 'layout-1', 'layout-2', 'layout-3', 'layout-4');
    activeChapterStage.classList.add(`layout-${index}`);

    chapterFallback.classList.add('hidden');
    chapterImage.style.display = 'block';
    chapterImage.style.opacity = '0.35';
    chapterImage.onload = () => {
      chapterImage.style.opacity = '1';
    };
    chapterImage.onerror = () => {
      chapterImage.style.display = 'none';
      chapterFallbackText.textContent = `Add "${chap.image}" to the same folder`;
      chapterFallback.classList.remove('hidden');
    };
    chapterImage.src = chap.image;
    chapterImage.alt = `${chap.roman} — ${chap.title}`;

    chapterBadge.textContent = `${chap.roman} · ${chap.audio}`;
    chapterShayari.textContent = chap.shayari;
    chapterMood.textContent = chap.mood;
    chapterTitle.textContent = chap.title;
    chapterReflection.textContent = chap.reflection;
    chapterAudioName.textContent = chap.audio;

    prevChapBtn.disabled = index === 0;
    nextChapBtn.querySelector('span').textContent =
      index === CHAPTERS.length - 1 ? 'Go to Love Letter →' : 'Next Chapter →';

    if (shouldPlayAudio) {
      playChapterAudio(chap.audio);
    }
    burstParticles(14);
  }

  chapPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      playSoftChime(590, 0.1);
      const idx = parseInt(pill.dataset.chap, 10);
      if (!Number.isNaN(idx)) selectChapter(idx, true);
    });
  });

  prevChapBtn.addEventListener('click', () => {
    playSoftChime(540, 0.1);
    if (currentChapterIndex > 0) selectChapter(currentChapterIndex - 1, true);
  });

  nextChapBtn.addEventListener('click', () => {
    playSoftChime(660, 0.1);
    if (currentChapterIndex < CHAPTERS.length - 1) {
      selectChapter(currentChapterIndex + 1, true);
    } else {
      document.getElementById('letterSection').scrollIntoView({ behavior: 'smooth' });
    }
  });

  fullscreenPhotoBtn.addEventListener('click', () => {
    playSoftChime(720, 0.12);
    const chap = CHAPTERS[currentChapterIndex];
    lightboxImg.src = chap.image;
    lightboxCaption.textContent = `${chap.roman} — ${chap.title}`;
    photoLightbox.classList.remove('hidden');
  });

  closeLightboxBtn.addEventListener('click', () => {
    photoLightbox.classList.add('hidden');
  });

  photoLightbox.addEventListener('click', (e) => {
    if (e.target === photoLightbox) photoLightbox.classList.add('hidden');
  });

  /* Subtle Scroll Parallax on Active Chapter Photo */
  window.addEventListener(
    'scroll',
    () => {
      const rect = chapterPhotoFrame.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const centerRatio = (rect.top + rect.height / 2 - vh / 2) / vh;
      const clamped = Math.max(-1, Math.min(1, centerRatio));
      chapterImage.style.setProperty('--parallax-shift', clamped.toFixed(3));
    },
    { passive: true }
  );

  /* ------------------------------------------------------------------------
     SECRET LOVE LETTER (Sealed Envelope + Typing Animation)
     ------------------------------------------------------------------------ */
  function typeSecretLetter() {
    clearInterval(letterTypeTimer);
    typedLetterBody.textContent = '';
    const chars = Array.from(SECRET_LETTER_TEXT);
    let idx = 0;

    letterTypeTimer = setInterval(() => {
      if (idx < chars.length) {
        typedLetterBody.textContent += chars[idx++];
      } else {
        clearInterval(letterTypeTimer);
      }
    }, 22);
  }

  openLetterBtn.addEventListener('click', () => {
    playSoftChime(700, 0.14);
    sealedLetterCover.classList.add('hidden');
    unsealedLetterPaper.classList.remove('hidden');
    burstParticles(22);
    typeSecretLetter();
  });

  sealLetterAgainBtn.addEventListener('click', () => {
    clearInterval(letterTypeTimer);
    unsealedLetterPaper.classList.add('hidden');
    sealedLetterCover.classList.remove('hidden');
  });

  /* ------------------------------------------------------------------------
     8-MILESTONE LOVE STORY TIMELINE
     ------------------------------------------------------------------------ */
  function buildTimeline() {
    loveTimelineEl.innerHTML = LOVE_MILESTONES.map(
      (m) => `
      <div class="milestone-item">
        <span class="milestone-heart" aria-hidden="true">♥</span>
        <div class="milestone-card">
          <span class="milestone-step">${m.step}</span>
          <h3 class="milestone-title">${m.title}</h3>
          <p class="milestone-desc">${m.desc}</p>
        </div>
      </div>`
    ).join('');
  }
  buildTimeline();

  /* ------------------------------------------------------------------------
     INTERACTIVE 3D-STYLE GLOWING HEART
     ------------------------------------------------------------------------ */
  interactiveHeartBtn.addEventListener('click', () => {
    playSoftChime(780, 0.14);
    heartTaps++;
    heartCounterBadgeUpdate();

    const msgIndex = (heartTaps - 1) % HEART_MESSAGES.length;
    heartAffirmationText.textContent = HEART_MESSAGES[msgIndex];

    interactiveHeartBtn.classList.add('exploded');
    setTimeout(() => interactiveHeartBtn.classList.remove('exploded'), 260);
    burstParticles(28);
  });

  function heartCounterBadgeUpdate() {
    heartTapCounter.textContent = `Hearts sent: ${heartTaps}`;
  }

  /* ------------------------------------------------------------------------
     ROMANTIC QUESTION SECTION
     ------------------------------------------------------------------------ */
  answerYesBtn.addEventListener('click', () => {
    playSoftChime(820, 0.16);
    questionResponseBox.classList.remove('hidden');
    questionResponseText.textContent =
      'Tumne mera dil aur khush kar diya, Zuha! Har ek yaad ko main apni sabse keemti ' +
      'kahani bana kar sambhal kar rakhunga. Mera Baccha, hamara aane wala waqt behtareen hoga ❤️✨';
    burstParticles(40);
  });

  answerLetsSeeBtn.addEventListener('click', () => {
    playSoftChime(640, 0.14);
    questionResponseBox.classList.remove('hidden');
    questionResponseText.textContent =
      'Koi jaldi nahi hai, Zuha — bina kisi pressure ke. Bas tumhare saath har chhota sa pal ' +
      'mehsoos karna hi mere liye bahut khaas hai. Jab bhi tumhara dil chahe, main yahin hoon 💗';
    burstParticles(18);
  });

  /* ------------------------------------------------------------------------
     MEMORY WALL (5 Existing Photos)
     ------------------------------------------------------------------------ */
  function buildMemoryWall() {
    memoryWallGrid.innerHTML = CHAPTERS.map(
      (chap, idx) => `
      <div class="wall-frame" data-wall-index="${idx}" role="button" tabindex="0" aria-label="View ${chap.image} full screen">
        <img src="${chap.image}" alt="Zuha Memory ${idx + 1}" />
        <div class="wall-caption">${chap.roman} · ${chap.image}</div>
      </div>`
    ).join('');

    memoryWallGrid.querySelectorAll('.wall-frame').forEach((card) => {
      const openItem = () => {
        playSoftChime(710, 0.12);
        const idx = parseInt(card.dataset.wallIndex, 10);
        const chap = CHAPTERS[idx];
        lightboxImg.src = chap.image;
        lightboxCaption.textContent = `${chap.roman} — ${chap.title}`;
        photoLightbox.classList.remove('hidden');
      };
      card.addEventListener('click', openItem);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openItem();
        }
      });
    });
  }
  buildMemoryWall();

  /* ------------------------------------------------------------------------
     SECRET SURPRISE ("ONLY FOR ZUHA") & INTRO / FINALE ACTIONS
     ------------------------------------------------------------------------ */
  function openSecretVault() {
    playSoftChime(760, 0.15);
    secretModal.classList.remove('hidden');
    burstParticles(26);
  }

  onlyForZuhaBtn.addEventListener('click', openSecretVault);
  openSecretFromSectionBtn.addEventListener('click', openSecretVault);
  closeSecretBtn.addEventListener('click', () => secretModal.classList.add('hidden'));
  secretModal.addEventListener('click', (e) => {
    if (e.target === secretModal) secretModal.classList.add('hidden');
  });

  enterWorldBtn.addEventListener('click', () => {
    playSoftChime(660, 0.15);
    audioHud.classList.remove('hidden');
    floatingNav.classList.remove('hidden');
    isUserPaused = false;
    playChapterAudio(CHAPTERS[currentChapterIndex].audio);

    if (!hasStartedConfession) {
      hasStartedConfession = true;
      runConfessionSequence();
    }

    burstParticles(35);
    document.getElementById('counterSection').scrollIntoView({ behavior: 'smooth' });
  });

  finaleLoveBurstBtn.addEventListener('click', () => {
    playSoftChime(840, 0.18);
    burstParticles(70);
    showToast('ZUHA, YOU ARE MY FAVOURITE CHAPTER ❤️');
  });

  restartExperienceBtn.addEventListener('click', () => {
    playSoftChime(600, 0.12);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ------------------------------------------------------------------------
     SCROLL PROGRESS, SECTION REVEAL, FLOATING NAV & BACK TO TOP
     ------------------------------------------------------------------------ */
  const revealSections = document.querySelectorAll('.reveal-section');
  const navButtons = floatingNav.querySelectorAll('button');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          if (entry.target.id === 'confessionSection' && !hasStartedConfession) {
            hasStartedConfession = true;
            runConfessionSequence();
          }

          if (entry.target.id === 'finaleSection') {
            burstParticles(25);
          }

          const secId = `#${entry.target.id}`;
          navButtons.forEach((btn) => {
            btn.classList.toggle('active', btn.dataset.target === secId);
          });
        }
      });
    },
    { threshold: 0.16 }
  );

  revealSections.forEach((sec) => observer.observe(sec));

  navButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      playSoftChime(620, 0.08);
      const target = document.querySelector(btn.dataset.target);
      if (target) {
        audioHud.classList.remove('hidden');
        floatingNav.classList.remove('hidden');
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  backToTopBtn.addEventListener('click', () => {
    playSoftChime(650, 0.1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener(
    'scroll',
    () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      scrollProgress.style.width = `${Math.min(100, Math.max(0, pct))}%`;

      if (window.scrollY > 260) {
        audioHud.classList.remove('hidden');
        floatingNav.classList.remove('hidden');
        backToTopBtn.classList.remove('hidden');
      } else {
        backToTopBtn.classList.add('hidden');
      }
    },
    { passive: true }
  );

  /* ------------------------------------------------------------------------
     CUSTOM CURSOR (Desktop) & PRELOADER DISMISSAL
     ------------------------------------------------------------------------ */
  if (window.matchMedia('(pointer: fine)').matches && customCursor) {
    document.body.classList.add('custom-cursor-active');
    window.addEventListener(
      'mousemove',
      (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
      },
      { passive: true }
    );

    document.addEventListener('mouseover', (e) => {
      const interactive = e.target.closest('button, a, input, .wall-frame');
      customCursor.classList.toggle('hovering', Boolean(interactive));
    });
  }

  window.addEventListener('load', () => {
    selectChapter(0, false);
    setTimeout(() => {
      preloader.classList.add('done');
    }, 550);
  });

  /* ------------------------------------------------------------------------
     AMBIENT CANVAS: PETALS, CHAMPAGNE GOLD DUST & HEARTS
     ------------------------------------------------------------------------ */
  const canvas = document.getElementById('ambientCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let cw = 0;
  let ch = 0;
  let tick = 0;

  function resizeCanvas() {
    cw = canvas.width = window.innerWidth;
    ch = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function makeParticle(burst = false) {
    const roll = Math.random();
    let kind = 'petal';
    if (roll > 0.84) kind = 'heart';
    else if (roll > 0.42) kind = 'gold';

    return {
      kind,
      x: Math.random() * cw,
      y: burst ? window.scrollY + ch * (0.25 + Math.random() * 0.5) : Math.random() * ch,
      size: kind === 'gold' ? Math.random() * 2.2 + 0.9 : Math.random() * 7 + 4.5,
      vy: kind === 'heart' ? -(Math.random() * 0.85 + 0.35) : Math.random() * 0.8 + 0.3,
      vx: (Math.random() - 0.5) * 0.65,
      rot: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.025,
      alpha: Math.random() * 0.55 + 0.22,
      phase: Math.random() * 60
    };
  }

  function initAmbient() {
    const count = cw < 640 ? 36 : 64;
    particles = Array.from({ length: count }, () => makeParticle(false));
  }

  function burstParticles(amount) {
    for (let i = 0; i < amount; i++) {
      particles.push(makeParticle(true));
    }
    if (particles.length > 160) {
      particles.splice(0, particles.length - 160);
    }
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.globalAlpha = p.alpha;
    const g = ctx.createRadialGradient(0, 0, 1, 0, 0, p.size);
    g.addColorStop(0, '#c9184a');
    g.addColorStop(1, '#390817');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(0, -p.size);
    ctx.bezierCurveTo(p.size, -p.size * 0.6, p.size * 0.8, p.size, 0, p.size * 1.1);
    ctx.bezierCurveTo(-p.size * 0.8, p.size, -p.size, -p.size * 0.6, 0, -p.size);
    ctx.fill();
    ctx.restore();
  }

  function drawGold(p) {
    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = '#f5dfb8';
    ctx.shadowColor = '#e5b299';
    ctx.shadowBlur = 7;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawHeart(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.scale(p.size / 14, p.size / 14);
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = '#e5b299';
    ctx.shadowColor = '#9e1940';
    ctx.shadowBlur = 9;
    ctx.beginPath();
    ctx.moveTo(0, 4);
    ctx.bezierCurveTo(0, 0, -8, -4, -8, 2);
    ctx.bezierCurveTo(-8, 8, 0, 12, 0, 15);
    ctx.bezierCurveTo(0, 12, 8, 8, 8, 2);
    ctx.bezierCurveTo(8, -4, 0, 0, 0, 4);
    ctx.fill();
    ctx.restore();
  }

  function loopCanvas() {
    tick += 0.015;
    ctx.clearRect(0, 0, cw, ch);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y += p.vy;
      p.x += p.vx + Math.sin(tick + p.phase) * 0.25;
      p.rot += p.spin;

      if (p.kind === 'petal') drawPetal(p);
      else if (p.kind === 'gold') drawGold(p);
      else drawHeart(p);

      if (p.y > ch + 20) {
        p.y = -15;
        p.x = Math.random() * cw;
      } else if (p.y < -20) {
        p.y = ch + 15;
        p.x = Math.random() * cw;
      }
      if (p.x > cw + 20) p.x = -15;
      if (p.x < -20) p.x = cw + 15;
    }

    requestAnimationFrame(loopCanvas);
  }

  initAmbient();
  loopCanvas();
})();
