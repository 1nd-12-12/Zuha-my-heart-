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
    chapterReflection.textContent = chap
